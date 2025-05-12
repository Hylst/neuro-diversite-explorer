
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate, Link } from 'react-router-dom';
import BrainInteractive from './BrainInteractive';

const HeroBanner = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/recherche?q=${encodeURIComponent(searchQuery)}`);
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-12 lg:py-20">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Explorez la <span className="neuro-gradient-text">neurodiversité</span> et les troubles neuro-atypiques
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprendre, s'informer et trouver des ressources sur les troubles dys, TDAH, autisme et autres formes de neurodivergence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/troubles" onClick={scrollToTop}>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto"
                >
                  Explorer
                </Button>
              </Link>
              <Link to="/auto-evaluation" onClick={scrollToTop}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto"
                >
                  Auto-évaluation
                </Button>
              </Link>
            </div>
            
            <form onSubmit={handleSearch} className="relative mt-8">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input 
                type="search" 
                placeholder="Rechercher un symptôme, un trouble..." 
                className="pl-10 py-6 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
            <BrainInteractive />
          </div>
        </div>
        
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <Link to="/auto-evaluation" onClick={scrollToTop}>
            <motion.div 
              className="neuro-card-interactive bg-neuro-light-purple"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-full bg-neuro-purple/10">
                <ClipboardCheck className="h-6 w-6 text-neuro-purple" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Auto-évaluation rapide</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Répondez à quelques questions pour identifier les signes potentiels
                </p>
              </div>
              <Button 
                variant="link" 
                className="mt-auto text-neuro-purple"
              >
                Commencer le test
              </Button>
            </div>
          </motion.div>
          </Link>
          
          <Link to="/communaute?tab=carte" onClick={scrollToTop}>
            <motion.div 
              className="neuro-card-interactive bg-neuro-light-blue"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-full bg-neuro-blue/10">
                <MapPin className="h-6 w-6 text-neuro-blue" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Centres de diagnostic</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Trouvez des professionnels qualifiés près de chez vous
                </p>
              </div>
              <Button 
                variant="link" 
                className="mt-auto text-neuro-blue"
              >
                Voir la carte
              </Button>
            </div>
          </motion.div>
          </Link>
          
          <Link to="/recherche" onClick={scrollToTop}>
            <motion.div 
              className="neuro-card-interactive bg-neuro-light-green"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-full bg-neuro-green/10">
                <Search className="h-6 w-6 text-neuro-green" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Recherche avancée</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Filtrez par symptôme, âge ou domaine d'impact
                </p>
              </div>
              <Button 
                variant="link" 
                className="mt-auto text-neuro-green"
              >
                Rechercher
              </Button>
            </div>
          </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
