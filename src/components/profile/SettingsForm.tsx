import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Settings } from 'lucide-react';
import { UserProfile } from '@/types/custom-types';
import { motion } from 'framer-motion';

interface SettingsFormProps {
  profile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
}

const SettingsForm: React.FC<SettingsFormProps> = ({ profile, setProfile }) => {
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
                  className="w-full justify-center transition-all duration-200 hover:scale-105"
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
                  className="transition-all duration-200"
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
                  className="transition-all duration-200"
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
                  className="transition-all duration-200"
                >
                  {profile.accessibility_settings.reduceMotion ? 'Activé' : 'Désactivé'}
                </Button>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Notifications</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Notifications par email</p>
                <p className="text-sm text-muted-foreground">Recevez des mises à jour sur les nouveaux contenus</p>
              </div>
              <Button
                variant="outline"
                className="transition-all duration-200"
              >
                Configurer
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SettingsForm;