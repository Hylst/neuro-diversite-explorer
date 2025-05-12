
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="container max-w-2xl py-16 text-center space-y-8">
          <Brain className="h-24 w-24 text-neuro-purple mx-auto" />
          
          <h1 className="text-4xl md:text-6xl font-bold">
            404
          </h1>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Page non trouvée</h2>
            <p className="text-muted-foreground">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/">Retour à l'accueil</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/comprendre">Explorer la neurodiversité</Link>
            </Button>
          </div>
      </div>
    </div>
  );
};

export default NotFound;
