
import React from 'react';
import { NavbarLink } from './NavbarLink';
import { SubmenuLink } from './SubmenuLink';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Collapse } from '@/components/ui/collapse';
import AuthButtons from '@/components/auth/AuthButtons';
import { ThemeToggle } from './ThemeToggle';
import { AccessibilityMenu } from './AccessibilityMenu';
import { User } from '@supabase/supabase-js';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';

interface MobileNavbarProps {
  isMenuOpen: boolean;
  openSubmenu: string | null;
  isCurrentPage: (path: string) => boolean;
  pathIncludes: (path: string) => boolean;
  closeMenu: () => void;
  toggleSubmenu: (submenu: string) => void;
  user: User | null;
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isMenuOpen,
  openSubmenu,
  isCurrentPage,
  pathIncludes,
  closeMenu,
  toggleSubmenu,
  user
}) => {
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden border-t">
      <div className="container py-2">
        <nav className="flex flex-col space-y-1">
          <NavbarLink to={ROUTES.HOME} isActive={isCurrentPage(ROUTES.HOME)} onClick={closeMenu}>
            Accueil
          </NavbarLink>
          
          <button
            className={`px-3 py-2 text-sm font-medium transition-colors hover:text-foreground/80 flex items-center justify-between ${
              isCurrentPage(ROUTES.COMPRENDRE) || isCurrentPage(ROUTES.CERVEAU) 
                ? 'text-foreground' 
                : 'text-foreground/60'
            }`}
            onClick={() => toggleSubmenu('comprendre')}
          >
            Comprendre
            <ChevronDown className="h-4 w-4" />
          </button>
          <Collapse open={openSubmenu === 'comprendre'}>
            <div className="pl-4 border-l ml-3 space-y-1">
              <SubmenuLink to={ROUTES.COMPRENDRE} onClick={closeMenu}>
                La neurodiversité
              </SubmenuLink>
              <SubmenuLink to={ROUTES.CERVEAU} onClick={closeMenu}>
                Le cerveau
              </SubmenuLink>
            </div>
          </Collapse>
          
          <NavbarLink 
            to={ROUTES.TROUBLES.INDEX} 
            isActive={pathIncludes('/troubles')} 
            onClick={closeMenu}
          >
            Troubles
          </NavbarLink>
          
          <NavbarLink
            to={ROUTES.VIVRE_AVEC}
            isActive={isCurrentPage(ROUTES.VIVRE_AVEC)}
            onClick={closeMenu}
          >
            Vivre avec
          </NavbarLink>
          
          <NavbarLink
            to={ROUTES.COMMUNAUTE}
            isActive={isCurrentPage(ROUTES.COMMUNAUTE)}
            onClick={closeMenu}
          >
            Communauté
          </NavbarLink>
          
          <NavbarLink
            to={ROUTES.RESSOURCES.INDEX}
            isActive={isCurrentPage(ROUTES.RESSOURCES.INDEX)}
            onClick={closeMenu}
          >
            Ressources
          </NavbarLink>

          <NavbarLink
            to={ROUTES.GLOSSAIRE}
            isActive={isCurrentPage(ROUTES.GLOSSAIRE)}
            onClick={closeMenu}
          >
            Glossaire
          </NavbarLink>
          
          <NavbarLink
            to={ROUTES.AUTO_EVALUATION}
            isActive={isCurrentPage(ROUTES.AUTO_EVALUATION)}
            onClick={closeMenu}
          >
            Auto-évaluation
          </NavbarLink>

          <NavbarLink
            to={ROUTES.A_PROPOS}
            isActive={isCurrentPage(ROUTES.A_PROPOS)}
            onClick={closeMenu}
          >
            À propos
          </NavbarLink>
          
          <div className="pt-2 flex flex-col border-t mt-2 space-y-2">
            <div className="py-2">
              <AuthButtons user={user} />
            </div>
            <div className="flex space-x-2">
              <ThemeToggle />
              <AccessibilityMenu />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
