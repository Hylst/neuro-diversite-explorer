import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import MainNavbar from '@/components/layout/MainNavbar';
import Footer from '@/components/layout/Footer';

const RessourcesLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNavbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Ressources</h1>
          <p className="text-muted-foreground">
            Découvrez des outils, guides et supports pour faciliter le quotidien
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
          <aside className="space-y-4">
            <nav className="space-y-1">
              {ROUTES.RESSOURCES && Object.entries(ROUTES.RESSOURCES).map(([key, path]) => {
                if (key === 'INDEX') return null;
                const label = key
                  .split('_')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                  .join(' ');
                  
                return (
                  <Link 
                    key={key}
                    to={path as string}
                    className="block px-3 py-2 rounded-md hover:bg-secondary transition-colors"
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </aside>
          
          <div>
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RessourcesLayout;