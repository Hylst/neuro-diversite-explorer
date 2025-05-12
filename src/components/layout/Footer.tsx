
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  // Function to scroll to top when clicking links
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-neuro-purple" />
              <span className="font-nunito text-xl font-bold">
                NeuroDiversité<span className="text-neuro-purple">Explorer</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Explorer, comprendre et partager autour de la neurodiversité
            </p>
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Facebook" 
                title="Prochainement disponible"
                disabled
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook opacity-50"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Twitter" 
                title="Prochainement disponible"
                disabled
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter opacity-50"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Instagram" 
                title="Prochainement disponible"
                disabled
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram opacity-50"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-neuro-purple" onClick={scrollToTop}>Accueil</Link>
              </li>
              <li>
                <Link to="/comprendre" className="text-sm hover:text-neuro-purple" onClick={scrollToTop}>Comprendre la neurodiversité</Link>
              </li>
              <li>
                <Link to="/troubles" className="text-sm hover:text-neuro-purple" onClick={scrollToTop}>Troubles spécifiques</Link>
              </li>
              <li>
                <Link to="/vivre-avec" className="text-sm hover:text-neuro-purple" onClick={scrollToTop}>Vivre avec</Link>
              </li>
              <li>
                <Link to="/ressources" className="text-sm hover:text-neuro-purple" onClick={scrollToTop}>Ressources</Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-sm hover:text-neuro-purple" onClick={scrollToTop}>À propos</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Me contacter</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Geoffroy Streit</li>
              <li className="text-sm text-muted-foreground">Strasbourg</li>
              <li className="text-sm text-muted-foreground">
                <a href="mailto:geoffroy.streit@gmail.com" className="hover:underline">
                  geoffroy.streit@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Inscrivez-vous pour recevoir les dernières actualités et ressources
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="rounded-md border px-3 py-2 text-sm flex-1"
              />
              <Button size="sm">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NeuroDiversité Explorer. Créé par Geoffroy Streit. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Link to="/politique-confidentialite" className="text-xs text-muted-foreground hover:text-neuro-purple" onClick={scrollToTop}>
              Politique de confidentialité
            </Link>
            <Link to="/mentions-legales" className="text-xs text-muted-foreground hover:text-neuro-purple" onClick={scrollToTop}>
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
