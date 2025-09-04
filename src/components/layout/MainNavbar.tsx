
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HelpCircle } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import AuthButtons from '@/components/auth/AuthButtons';
import { ThemeToggle } from './ThemeToggle';
import { AccessibilityMenu } from './AccessibilityMenu';
import { DesktopNavbar } from './DesktopNavbar';
import { MobileNavbar } from './MobileNavbar';
import { motion } from 'framer-motion';

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const { user } = useAuth();

  const isCurrentPage = (path: string) => {
    // Avec HashRouter, nous devons comparer avec location.hash sans le # initial
    const currentPath = location.hash.substring(1) || '/';
    return currentPath === path;
  };

  const pathIncludes = (path: string) => {
    // Avec HashRouter, nous devons comparer avec location.hash sans le # initial
    const currentPath = location.hash.substring(1) || '/';
    return currentPath.includes(path);
  };

  const toggleSubmenu = (submenu: string) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };

  // Animation variants for logo text
  const logoContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.05
      }
    }
  };

  const letterVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const words = ["Neuro", "Diversité", "Explorer"];
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <motion.span 
              className="font-bold sm:inline-flex text-xl items-baseline"
              variants={logoContainer}
              initial="visible"
              animate="visible"
            >
              {words.map((word, wordIndex) => (
                <React.Fragment key={wordIndex}>
                  {wordIndex > 0 && wordIndex < words.length && <span className="mx-0.5"></span>}
                  <span className={`inline-flex ${wordIndex === 1 ? 'text-neuro-purple' : 'text-primary'}`}>
                    {word.split('').map((letter, letterIndex) => (
                      <motion.span
                        key={letterIndex}
                        variants={letterVariant}
                        className="inline-block relative"
                        whileHover={{ 
                          scale: 1.2, 
                          color: wordIndex === 1 ? '#8B5CF6' : '#0EA5E9',
                          y: -2,
                          transition: { type: "spring", stiffness: 300 }
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                </React.Fragment>
              ))}
            </motion.span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <DesktopNavbar 
            isCurrentPage={isCurrentPage}
            pathIncludes={pathIncludes}
            closeMenu={closeMenu}
            toggleSubmenu={toggleSubmenu}
          />

          <div className="flex items-center">
            <div className="hidden md:flex items-center gap-2">
              <Link 
                to="/a-propos" 
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="À propos"
              >
                <HelpCircle className="h-5 w-5" />
              </Link>
              <AuthButtons user={user} />
              <ThemeToggle />
              <AccessibilityMenu />
            </div>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileNavbar 
        isMenuOpen={isMenuOpen}
        openSubmenu={openSubmenu}
        isCurrentPage={isCurrentPage}
        pathIncludes={pathIncludes}
        closeMenu={closeMenu}
        toggleSubmenu={toggleSubmenu}
        user={user}
      />
    </header>
  );
};

export default MainNavbar;
