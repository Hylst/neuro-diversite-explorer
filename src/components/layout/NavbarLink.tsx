
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarLinkProps {
  to: string;
  isActive: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({ 
  to, 
  isActive, 
  onClick, 
  children 
}) => {
  const location = useLocation();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Si nous cliquons sur le lien de la page active, faisons un scroll to top
    if (location.pathname === to) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    
    // Exécutons le onClick si fourni
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <Link
      to={to}
      className={`px-3 py-2 text-sm font-medium transition-colors hover:text-foreground/80 ${
        isActive ? 'text-foreground' : 'text-foreground/60'
      }`}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};
