
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
} from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { User } from '@supabase/supabase-js';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
import { UserCircle, LogOut, LogIn, UserPlus } from 'lucide-react';

interface AuthButtonsProps {
  user: User | null;
  onSignOut?: () => void;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ user, onSignOut }) => {
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isSignupOpen, setIsSignupOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        toast.error("Erreur de déconnexion", {
          description: error.message,
        });
        return;
      }

      toast.success("Déconnexion réussie");
      if (onSignOut) onSignOut();
      
    } catch (error) {
      toast.error("Une erreur s'est produite");
    } finally {
      setIsLoading(false);
    }
  };

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate('/profile')}
          aria-label="Mon profil"
          title="Mon profil"
        >
          <UserCircle className="h-5 w-5" />
        </Button>
        <Button 
          variant="outline" 
          size="icon"
          onClick={handleSignOut}
          disabled={isLoading}
          aria-label="Déconnexion"
          title="Déconnexion"
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            size="icon"
            aria-label="Connexion"
            title="Connexion"
          >
            <LogIn className="h-5 w-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Connexion</DialogTitle>
          </DialogHeader>
          <LoginForm onSuccess={() => setIsLoginOpen(false)} />
        </DialogContent>
      </Dialog>

      <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
        <DialogTrigger asChild>
          <Button 
            size="icon"
            aria-label="S'inscrire"
            title="S'inscrire"
          >
            <UserPlus className="h-5 w-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Créer un compte</DialogTitle>
          </DialogHeader>
          <SignupForm onSuccess={() => setIsSignupOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AuthButtons;
