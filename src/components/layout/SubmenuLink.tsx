
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SubmenuLinkProps {
  to: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const SubmenuLink: React.FC<SubmenuLinkProps> = ({ 
  to, 
  onClick, 
  children 
}) => {
  const location = useLocation();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Si nous cliquons sur le lien de la page active, faisons un scroll to top
    // Avec HashRouter, nous devons comparer avec location.hash sans le # initial
    const currentPath = location.hash.substring(1) || '/';
    if (currentPath === to) {
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
      className="block px-3 py-2 text-sm rounded-md hover:bg-muted"
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};
