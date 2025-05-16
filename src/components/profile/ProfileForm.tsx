import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { User, Save, Star } from 'lucide-react';
import { UserProfile } from '@/types/custom-types';
import { motion } from 'framer-motion';

interface ProfileFormProps {
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  onSave: () => Promise<void>;
  saving: boolean;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ profile, setProfile, onSave, saving }) => {
  // Liste des centres d'intérêt disponibles
  const availableInterests = [
    'TDAH', 'Autisme', 'Dyslexie', 'Dyspraxie', 'Dyscalculie', 
    'Neuropsychologie', 'Sciences cognitives', 'Neurodiversité',
    'Inclusion', 'Accessibilité'
  ];

  return (
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
              placeholder="Votre nom d'utilisateur"
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
              {availableInterests.map(interest => (
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
                  className="transition-all duration-200 hover:scale-105"
                >
                  {interest}
                  {profile.interests?.includes(interest) && (
                    <Star className="ml-1 h-3 w-3" />
                  )}
                </Button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Sélectionnez les sujets qui vous intéressent pour personnaliser votre expérience
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={onSave} 
            disabled={saving}
            className="transition-all duration-200 hover:scale-105"
          >
            {saving ? 'Enregistrement...' : 'Enregistrer les modifications'}
            <Save className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProfileForm;