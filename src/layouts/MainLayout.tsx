import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavbar from '@/components/layout/MainNavbar';
import Footer from '@/components/layout/Footer';
import { Analytics } from "@vercel/analytics/react";
import { ContextualDetailProvider } from '@/components/ui/ContextualDetailProvider';

/**
 * Layout principal de l'application
 * Contient la barre de navigation et le pied de page qui sont partagés entre toutes les pages
 */
const MainLayout: React.FC = () => {
  return (
    <ContextualDetailProvider>
      <React.Fragment>
        <div className="flex min-h-screen flex-col">
        <MainNavbar />
        <main className="flex-1">
          <Outlet />
        </main>
          <Footer />
          <Analytics />
        </div>
      </React.Fragment>
    </ContextualDetailProvider>
  );
};

export default MainLayout;