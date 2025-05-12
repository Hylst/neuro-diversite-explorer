
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/auth/AuthProvider';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { AlertCircle, User, Settings, FileText, BarChart, Save, LogOut, Camera, Star, PenLine } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/components/ui/use-toast';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { UserProfile } from '@/types/custom-types';
import { Profile } from '@/types/custom-types';

const defaultProfile: UserProfile = {
  username: '',
  avatar_url: null,
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
      navigate('/login');
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
          avatar_url: profile.avatar_url,
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
    const fileExt = file.name.split('.').pop();
    const filePath = `${user?.id}/avatar.${fileExt}`;
    
    try {
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true });
      
      if (uploadError) throw uploadError;
      
      const { data } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);
      
      setProfile(prev => ({ ...prev, avatar_url: data.publicUrl }));
      
      toast({
        title: "Avatar téléchargé",
        description: "Votre nouvel avatar a été téléchargé.",
      });
      
    } catch (error) {
      console.error('Error uploading avatar:', error);
      toast({
        title: "Erreur",
        description: "Impossible de télécharger l'avatar. Veuillez réessayer.",
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
        </main>      </div>
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
              <Button onClick={() => navigate('/login')} className="w-full">
                Se connecter
              </Button>
            </CardFooter>
          </Card>
        </main>      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="w-full md:w-64">
              <Card>
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4 w-24 h-24">
                    <Avatar className="w-24 h-24 border-2 border-primary">
                      <AvatarImage src={profile.avatar_url || ''} alt={profile.username} />
                      <AvatarFallback className="text-2xl">
                        {profile.username.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <label 
                      htmlFor="avatar-upload" 
                      className="absolute bottom-0 right-0 p-1 bg-primary text-primary-foreground rounded-full cursor-pointer"
                    >
                      <Camera className="w-4 h-4" />
                      <input 
                        id="avatar-upload" 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={handleAvatarChange}
                      />
                    </label>
                  </div>
                  <CardTitle>{profile.username}</CardTitle>
                  <CardDescription>{user?.email}</CardDescription>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    <Button 
                      variant={activeTab === 'profile' ? 'default' : 'ghost'} 
                      className="w-full justify-start" 
                      onClick={() => setActiveTab('profile')}
                    >
                      <User className="mr-2 h-4 w-4" />
                      Profil
                    </Button>
                    <Button 
                      variant={activeTab === 'settings' ? 'default' : 'ghost'} 
                      className="w-full justify-start" 
                      onClick={() => setActiveTab('settings')}
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Paramètres
                    </Button>
                    <Button 
                      variant={activeTab === 'results' ? 'default' : 'ghost'} 
                      className="w-full justify-start" 
                      onClick={() => setActiveTab('results')}
                    >
                      <BarChart className="mr-2 h-4 w-4" />
                      Résultats
                    </Button>
                    <Button 
                      variant={activeTab === 'notes' ? 'default' : 'ghost'} 
                      className="w-full justify-start" 
                      onClick={() => setActiveTab('notes')}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Notes
                    </Button>
                  </nav>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Déconnexion
                  </Button>
                </CardFooter>
              </Card>
            </aside>
            
            <div className="flex-1">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="hidden">
                  <TabsTrigger value="profile">Profil</TabsTrigger>
                  <TabsTrigger value="settings">Paramètres</TabsTrigger>
                  <TabsTrigger value="results">Résultats</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <User className="h-5 w-5" />
                          Informations de profil
                        </CardTitle>
                        <CardDescription>
                          Modifiez vos informations personnelles
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="username">Nom d'utilisateur</Label>
                          <Input 
                            id="username" 
                            value={profile.username} 
                            onChange={(e) => setProfile({...profile, username: e.target.value})}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="bio">Biographie</Label>
                          <Textarea 
                            id="bio" 
                            value={profile.bio || ''} 
                            onChange={(e) => setProfile({...profile, bio: e.target.value})}
                            placeholder="Parlez-nous un peu de vous..."
                            rows={4}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Centres d'intérêt</Label>
                          <div className="flex flex-wrap gap-2">
                            {['TDAH', 'Autisme', 'Dyslexie', 'Dyspraxie', 'Dyscalculie', 'Neuropsychologie', 'Sciences cognitives'].map(interest => (
                              <Button
                                key={interest}
                                variant={profile.interests?.includes(interest) ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => {
                                  const newInterests = profile.interests?.includes(interest)
                                    ? profile.interests.filter(i => i !== interest)
                                    : [...(profile.interests || []), interest];
                                  setProfile({...profile, interests: newInterests});
                                }}
                              >
                                {interest}
                                {profile.interests?.includes(interest) && (
                                  <Star className="ml-1 h-3 w-3" />
                                )}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button onClick={handleProfileUpdate} disabled={saving}>
                          {saving ? 'Enregistrement...' : 'Enregistrer les modifications'}
                          <Save className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="settings">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Settings className="h-5 w-5" />
                          Paramètres du compte
                        </CardTitle>
                        <CardDescription>
                          Personnalisez votre expérience sur la plateforme
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">Thème</h3>
                          <div className="grid grid-cols-3 gap-4">
                            {['light', 'dark', 'system'].map((theme) => (
                              <Button
                                key={theme}
                                variant={profile.preferred_themes === theme ? 'default' : 'outline'}
                                className="w-full justify-center"
                                onClick={() => setProfile({
                                  ...profile, 
                                  preferred_themes: theme as 'light' | 'dark' | 'system'
                                })}
                              >
                                {theme === 'light' && 'Clair'}
                                {theme === 'dark' && 'Sombre'}
                                {theme === 'system' && 'Système'}
                              </Button>
                            ))}
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium">Accessibilité</h3>
                          
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Contraste élevé</p>
                                <p className="text-sm text-muted-foreground">Augmente le contraste des couleurs</p>
                              </div>
                              <Button
                                variant={profile.accessibility_settings.highContrast ? 'default' : 'outline'}
                                onClick={() => setProfile({
                                  ...profile,
                                  accessibility_settings: {
                                    ...profile.accessibility_settings,
                                    highContrast: !profile.accessibility_settings.highContrast
                                  }
                                })}
                              >
                                {profile.accessibility_settings.highContrast ? 'Activé' : 'Désactivé'}
                              </Button>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Texte agrandi</p>
                                <p className="text-sm text-muted-foreground">Augmente la taille du texte pour une meilleure lisibilité</p>
                              </div>
                              <Button
                                variant={profile.accessibility_settings.largeText ? 'default' : 'outline'}
                                onClick={() => setProfile({
                                  ...profile,
                                  accessibility_settings: {
                                    ...profile.accessibility_settings,
                                    largeText: !profile.accessibility_settings.largeText
                                  }
                                })}
                              >
                                {profile.accessibility_settings.largeText ? 'Activé' : 'Désactivé'}
                              </Button>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Réduire les animations</p>
                                <p className="text-sm text-muted-foreground">Limite les effets de mouvement</p>
                              </div>
                              <Button
                                variant={profile.accessibility_settings.reduceMotion ? 'default' : 'outline'}
                                onClick={() => setProfile({
                                  ...profile,
                                  accessibility_settings: {
                                    ...profile.accessibility_settings,
                                    reduceMotion: !profile.accessibility_settings.reduceMotion
                                  }
                                })}
                              >
                                {profile.accessibility_settings.reduceMotion ? 'Activé' : 'Désactivé'}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button onClick={handleProfileUpdate} disabled={saving}>
                          {saving ? 'Enregistrement...' : 'Enregistrer les paramètres'}
                          <Save className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="results">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BarChart className="h-5 w-5" />
                          Résultats des auto-évaluations
                        </CardTitle>
                        <CardDescription>
                          Historique de vos évaluations
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {assessmentResults.length > 0 ? (
                          <div className="space-y-6">
                            {assessmentResults.map((result, index) => (
                              <div key={index} className="space-y-2">
                                <div className="flex justify-between items-center">
                                  <h3 className="font-medium">{result.type}</h3>
                                  <span className="text-sm text-muted-foreground">
                                    {new Date(result.date).toLocaleDateString('fr-FR')}
                                  </span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                                  <div 
                                    className={`${result.color} h-full transition-all duration-500 ease-out`}
                                    style={{ width: `${result.score}%` }}
                                  ></div>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span>Score: {result.score}%</span>
                                  <span>Interprétation: {result.interpretation}</span>
                                </div>
                                <Button variant="outline" size="sm" className="mt-1">
                                  Voir les détails
                                </Button>
                                <Separator className="mt-4" />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-8">
                            <p className="text-muted-foreground mb-4">
                              Vous n'avez pas encore effectué d'auto-évaluations.
                            </p>
                            <Button onClick={() => navigate('/auto-evaluation')}>
                              Faire une évaluation
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="notes">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="h-5 w-5" />
                          Mes notes personnelles
                        </CardTitle>
                        <CardDescription>
                          Prenez des notes sur votre parcours neurodivergent
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Alert className="mb-6">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Fonctionnalité en développement</AlertTitle>
                          <AlertDescription>
                            Le système de notes personnelles sera bientôt disponible.
                          </AlertDescription>
                        </Alert>
                        
                        <div className="space-y-4">
                          <Textarea 
                            placeholder="Commencez à écrire une note..."
                            rows={8}
                            disabled
                          />
                          
                          <div className="flex justify-between">
                            <Button variant="outline" disabled>
                              <PenLine className="mr-2 h-4 w-4" />
                              Nouvelle note
                            </Button>
                            <Button disabled>
                              Enregistrer
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>    </div>
  );
};

export default ProfilePage;
