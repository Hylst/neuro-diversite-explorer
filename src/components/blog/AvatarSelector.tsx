
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Image, Upload, Link } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface AvatarSelectorProps {
  selectedAvatar: string;
  onSelectAvatar: (avatar: string, type: string, id?: string) => void;
}

// Utilisation d'avatars réels stockés localement
const defaultAvatars = [
  { id: 'avatar-1', path: '/assets/avatars/avatar-1.png' },
  { id: 'avatar-2', path: '/assets/avatars/avatar-2.png' },
  { id: 'avatar-3', path: '/assets/avatars/avatar-3.png' },
  { id: 'avatar-4', path: '/assets/avatars/avatar-4.png' },
  { id: 'avatar-5', path: '/assets/avatars/avatar-5.png' },
  { id: 'avatar-6', path: '/assets/avatars/avatar-6.png' },
  { id: 'avatar-7', path: '/assets/avatars/avatar-7.png' },
  { id: 'avatar-8', path: '/assets/avatars/avatar-8.png' },
  { id: 'avatar-9', path: '/assets/avatars/avatar-9.png' },
  { id: 'avatar-10', path: '/assets/avatars/avatar-10.png' },
  { id: 'avatar-11', path: '/assets/avatars/avatar-11.png' },
  { id: 'avatar-12', path: '/assets/avatars/avatar-12.png' },
  { id: 'avatar-13', path: '/assets/avatars/avatar-13.png' },
  { id: 'avatar-14', path: '/assets/avatars/avatar-14.png' },
  { id: 'avatar-15', path: '/assets/avatars/avatar-15.png' },
  { id: 'avatar-16', path: '/assets/avatars/avatar-16.png' },
];

export const AvatarSelector: React.FC<AvatarSelectorProps> = ({ 
  selectedAvatar, 
  onSelectAvatar 
}) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [customUrl, setCustomUrl] = useState<string>('');
  const [avatarTab, setAvatarTab] = useState<string>('gallery');
  
  // S'assurer que l'avatar est correctement initialisé
  useEffect(() => {
    if (!selectedAvatar && defaultAvatars.length > 0) {
      onSelectAvatar(defaultAvatars[0].path, 'gallery', defaultAvatars[0].id);
    }
  }, [selectedAvatar, onSelectAvatar]);

  // Gestion de l'upload de fichier
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Vérifier le type de fichier
      if (!file.type.includes('image/')) {
        alert('Veuillez charger uniquement des fichiers image.');
        return;
      }

      // Vérifier la taille (max 1MB)
      if (file.size > 1024 * 1024) {
        alert('La taille de l\'image ne doit pas dépasser 1 Mo.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setUploadedImage(result);
        onSelectAvatar(result, 'upload');
        setAvatarTab('upload');
      };
      reader.readAsDataURL(file);
    }
  };

  // Gestion de l'URL personnalisée
  const handleCustomUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomUrl(e.target.value);
  };

  const handleCustomUrlSubmit = () => {
    if (customUrl) {
      onSelectAvatar(customUrl, 'url');
      setAvatarTab('url');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Avatar className="w-16 h-16 border-2 border-primary">
          <AvatarImage src={selectedAvatar} />
          <AvatarFallback>
            <Image className="w-8 h-8 text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 text-sm text-muted-foreground">
          Avatar sélectionné
        </div>
      </div>
      
      <Tabs value={avatarTab} onValueChange={setAvatarTab} className="w-full">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="gallery">Galerie</TabsTrigger>
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="url">URL</TabsTrigger>
        </TabsList>
        
        <TabsContent value="gallery" className="mt-2">
          <div className="grid grid-cols-4 gap-2">
            {defaultAvatars.map((avatar) => (
              <Button
                key={avatar.id}
                type="button"
                variant={selectedAvatar === avatar.path ? "default" : "outline"}
                size="sm"
                className={cn(
                  "p-1 h-auto",
                  selectedAvatar === avatar.path ? "border-primary" : ""
                )}
                onClick={() => onSelectAvatar(avatar.path, 'gallery', avatar.id)}
              >
                <Avatar className="w-10 h-10">
                  <AvatarImage src={avatar.path} />
                  <AvatarFallback>{avatar.id.replace('avatar-', '')}</AvatarFallback>
                </Avatar>
              </Button>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="upload" className="mt-2">
          <label htmlFor="avatar-upload" className="cursor-pointer">
            <div className="flex items-center gap-2 p-4 border border-dashed border-input rounded-md hover:bg-accent/50 transition-colors">
              <Upload className="w-4 h-4" />
              <span>Choisir une image (JPG, 128×128 recommandé)</span>
            </div>
            <Input 
              id="avatar-upload" 
              type="file" 
              accept="image/jpeg,image/png,image/gif,image/webp" 
              className="hidden" 
              onChange={handleFileUpload}
            />
          </label>
          
          {uploadedImage && (
            <div className="mt-2 flex justify-center">
              <Avatar className="w-16 h-16">
                <AvatarImage src={uploadedImage} />
                <AvatarFallback>
                  <Image className="w-8 h-8" />
                </AvatarFallback>
              </Avatar>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="url" className="mt-2 space-y-2">
          <div className="flex gap-2">
            <Input 
              placeholder="URL de l'avatar" 
              value={customUrl}
              onChange={handleCustomUrlChange}
            />
            <Button 
              variant="secondary" 
              size="sm" 
              onClick={handleCustomUrlSubmit}
            >
              <Link className="h-4 w-4 mr-1" />
              Utiliser
            </Button>
          </div>
          
          {customUrl && (
            <div className="flex justify-center">
              <Avatar className="w-16 h-16">
                <AvatarImage src={customUrl} />
                <AvatarFallback>URL</AvatarFallback>
              </Avatar>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};
