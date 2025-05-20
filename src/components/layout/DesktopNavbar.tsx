
import React from 'react';
import { NavbarLink } from './NavbarLink';
import { SubmenuLink } from './SubmenuLink';
import { ChevronDown } from 'lucide-react';
import { User } from '@supabase/supabase-js';
import { ROUTES } from '@/routes';

interface DesktopNavbarProps {
  isCurrentPage: (path: string) => boolean;
  pathIncludes: (path: string) => boolean;
  closeMenu: () => void;
  toggleSubmenu: (submenu: string) => void;
}

export const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
  isCurrentPage,
  pathIncludes,
  closeMenu,
  toggleSubmenu
}) => {
  return (
    <nav className="hidden md:flex items-center space-x-1">
      <NavbarLink to={ROUTES.HOME} isActive={isCurrentPage(ROUTES.HOME)}>
        Accueil
      </NavbarLink>
      
      <div className="relative group">
        <button
          className={`px-3 py-2 text-sm font-medium transition-colors hover:text-foreground/80 flex items-center ${
            isCurrentPage(ROUTES.COMPRENDRE) || isCurrentPage(ROUTES.CERVEAU)
              ? 'text-foreground'
              : 'text-foreground/60'
          }`}
          onClick={() => toggleSubmenu('comprendre')}
        >
          Comprendre
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
        <div className="absolute left-0 top-full w-48 p-2 rounded-md bg-background hidden group-hover:block shadow-md border">
          <SubmenuLink to={ROUTES.COMPRENDRE} onClick={closeMenu}>
            La neurodiversité
          </SubmenuLink>
          <SubmenuLink to={ROUTES.CERVEAU} onClick={closeMenu}>
            Le cerveau
          </SubmenuLink>
        </div>
      </div>
      
      <NavbarLink to={ROUTES.TROUBLES.INDEX} isActive={pathIncludes('/troubles')}>
        Troubles
      </NavbarLink>
      
      <NavbarLink to={ROUTES.VIVRE_AVEC} isActive={isCurrentPage(ROUTES.VIVRE_AVEC)}>
        Vivre avec
      </NavbarLink>
      
      <NavbarLink to={ROUTES.APPRENTISSAGE} isActive={isCurrentPage(ROUTES.APPRENTISSAGE)}>
        Apprentissage
      </NavbarLink>
      
      <NavbarLink to={ROUTES.COMMUNAUTE} isActive={isCurrentPage(ROUTES.COMMUNAUTE)}>
        Communauté
      </NavbarLink>
      
      <NavbarLink to={ROUTES.RESSOURCES.INDEX} isActive={isCurrentPage(ROUTES.RESSOURCES.INDEX)}>
        Ressources
      </NavbarLink>

      <NavbarLink to={ROUTES.GLOSSAIRE} isActive={isCurrentPage(ROUTES.GLOSSAIRE)}>
        Glossaire
      </NavbarLink>

      <NavbarLink to={ROUTES.AUTO_EVALUATION} isActive={isCurrentPage(ROUTES.AUTO_EVALUATION)}>
        Auto-évaluation
      </NavbarLink>
    </nav>
  );
};
