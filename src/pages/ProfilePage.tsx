
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/auth/AuthProvider';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { UserProfile } from '@/types/custom-types';

// Composants modulaires
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileForm from '@/components/profile/ProfileForm';
import SettingsForm from '@/components/profile/SettingsForm';
import ResultsDisplay from '@/components/profile/ResultsDisplay';
import NotesSection from '@/components/profile/NotesSection';

const defaultProfile: UserProfile = {
  username: '',
  avatar_url: null,
  avatar_base64: null,
  bio: '',
  interests: [],
  preferred_themes: 'system',
  accessibility_settings: {
    highContrast: false,
    largeText: false,
    reduceMotion: false
  }
};

const ProfilePage = () => {
  const { user, session } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [assessmentResults, setAssessmentResults] = useState<any[]>([]);

  useEffect(() => {
    if (!user && !session) {
      navigate('/');
    } else if (user) {
      loadUserProfile();
    }
  }, [user, session, navigate]);

  const loadUserProfile = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (error) {
        throw error;
      }
      
      if (data) {
        // Type casting to ensure we have the correct types
        const profileData = data as unknown as {
          username: string | null;
          avatar_url: string | null;
          avatar_base64: string | null;
          bio: string | null;
          interests: string[] | null;
          preferred_themes: string | null;
          accessibility_settings: {
            highContrast: boolean;
            largeText: boolean;
            reduceMotion: boolean;
          } | null;
        };
        
        setProfile({
          username: profileData.username || user.email?.split('@')[0] || 'Utilisateur',
          avatar_url: profileData.avatar_url,
          avatar_base64: profileData.avatar_base64 || null,
          bio: profileData.bio || '',
          interests: profileData.interests || [],
          preferred_themes: (profileData.preferred_themes as 'light' | 'dark' | 'system') || 'system',
          accessibility_settings: profileData.accessibility_settings || {
            highContrast: false,
            largeText: false,
            reduceMotion: false
          }
        });
      }
      
      // Exemple de résultats d'évaluation
      setAssessmentResults([
        { 
          type: 'TDAH', 
          score: 65, 
          date: '2023-11-15', 
          interpretation: 'Modéré',
          color: 'bg-yellow-500' 
        },
        { 
          type: 'Autisme', 
          score: 42, 
          date: '2023-11-10', 
          interpretation: 'Modéré',
          color: 'bg-yellow-500' 
        },
        { 
          type: 'Dyslexie', 
          score: 30, 
          date: '2023-10-22', 
          interpretation: 'Faible',
          color: 'bg-green-500' 
        }
      ]);
      
    } catch (error) {
      console.error('Error loading profile:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger votre profil. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleProfileUpdate = async () => {
    if (!user) return;
    
    setSaving(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({ 
          id: user.id,
          username: profile.username,
          // Nous gardons avatar_url dans la structure pour compatibilité,
          // mais nous n'utilisons que avatar_base64 pour le stockage des avatars
          avatar_url: profile.avatar_url,
          avatar_base64: profile.avatar_base64,
          bio: profile.bio,
          interests: profile.interests,
          preferred_themes: profile.preferred_themes,
          accessibility_settings: profile.accessibility_settings
        }, { onConflict: 'id' });
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "Profil mis à jour",
        description: "Vos modifications ont été enregistrées avec succès.",
      });
      
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour votre profil. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
  };

  const handleAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    const file = files[0];
    
    try {
      // Importer l'utilitaire de redimensionnement d'image
      const { resizeAndConvertToBase64 } = await import('@/utils/imageUtils');
      
      // Redimensionner l'image en 92x92 et la convertir en base64
      const base64Image = await resizeAndConvertToBase64(file, 92, 92, 'jpeg', 0.8);
      
      // Mettre à jour le profil avec la version base64
      setProfile(prev => ({ 
        ...prev, 
        avatar_base64: base64Image,
        // Supprimer l'ancienne URL d'avatar pour ne plus utiliser le stockage
        avatar_url: null
      }));
      
      // Mettre à jour la base de données avec la nouvelle image base64
      const { error: upsertError } = await supabase
        .from('profiles')
        .upsert({ 
          id: user.id,
          avatar_base64: base64Image,
          // Supprimer l'ancienne URL d'avatar pour ne plus utiliser le stockage
          avatar_url: null
        }, { onConflict: 'id' });
      
      if (upsertError) {
        throw new Error(`Erreur lors de la mise à jour du profil: ${upsertError.message}`);
      }
      
      toast({
        title: "Avatar mis à jour",
        description: "Votre nouvel avatar a été enregistré avec succès.",
      });
      
    } catch (error) {
      console.error('Error uploading avatar:', error);
      
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour l'avatar: " + (error instanceof Error ? error.message : 'Erreur inconnue'),
        variant: "destructive"
      });
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "Erreur",
        description: "Impossible de vous déconnecter. Veuillez réessayer.",
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex items-center justify-center">
          <p>Chargement de votre profil...</p>
        </main>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Accès restreint</CardTitle>
              <CardDescription>
                Vous devez être connecté pour accéder à cette page.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button onClick={() => navigate('/')} className="w-full">
                Se connecter
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar avec informations de profil et navigation */}
            <aside className="w-full md:w-64">
              <ProfileHeader 
                profile={profile}
                userEmail={user.email}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onAvatarChange={handleAvatarChange}
                onLogout={handleLogout}
              />
            </aside>
            
            {/* Contenu principal */}
            <div className="flex-1">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="hidden">
                  <TabsTrigger value="profile">Profil</TabsTrigger>
                  <TabsTrigger value="settings">Paramètres</TabsTrigger>
                  <TabsTrigger value="results">Résultats</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                </TabsList>
                
                {/* Onglet Profil */}
                <TabsContent value="profile">
                  <ProfileForm 
                    profile={profile}
                    setProfile={setProfile}
                    onSave={handleProfileUpdate}
                    saving={saving}
                  />
                </TabsContent>
                
                {/* Onglet Paramètres */}
                <TabsContent value="settings">
                  <SettingsForm 
                    profile={profile}
                    setProfile={setProfile}
                  />
                </TabsContent>
                
                {/* Onglet Résultats */}
                <TabsContent value="results">
                  <ResultsDisplay results={assessmentResults} />
                </TabsContent>
                
                {/* Onglet Notes */}
                <TabsContent value="notes">
                  <NotesSection />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
