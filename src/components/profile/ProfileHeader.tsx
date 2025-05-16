import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Settings, BarChart, FileText, LogOut, Camera } from 'lucide-react';
import { UserProfile } from '@/types/custom-types';

interface ProfileHeaderProps {
  profile: UserProfile;
  userEmail?: string | null;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onAvatarChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLogout: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profile,
  userEmail,
  activeTab,
  setActiveTab,
  onAvatarChange,
  onLogout
}) => {
  return (
    <Card className="h-full">
      <CardHeader className="text-center">
        <div className="relative mx-auto mb-4 w-24 h-24">
          <Avatar className="w-24 h-24 border-2 border-primary">
            {profile.avatar_base64 ? (
              <AvatarImage 
                src={`data:image/jpeg;base64,${profile.avatar_base64}`} 
                alt={profile.username} 
              />
            ) : (
              <AvatarImage src={profile.avatar_url || ''} alt={profile.username} />
            )}
            <AvatarFallback className="text-2xl">
              {profile.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <label 
            htmlFor="avatar-upload" 
            className="absolute bottom-0 right-0 p-1 bg-primary text-primary-foreground rounded-full cursor-pointer hover:bg-primary/90 transition-colors"
            title="Changer d'avatar"
          >
            <Camera className="w-4 h-4" />
            <input 
              id="avatar-upload" 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={onAvatarChange}
            />
          </label>
        </div>
        <CardTitle className="text-xl font-bold">{profile.username}</CardTitle>
        <CardDescription className="text-sm opacity-80">{userEmail}</CardDescription>
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
        <Button variant="outline" className="w-full" onClick={onLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Déconnexion
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileHeader;