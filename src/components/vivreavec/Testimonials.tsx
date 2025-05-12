
import React from 'react';
import { motion } from 'framer-motion';
import { CircleUserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TestimonialProps {
  name: string;
  age?: number;
  profile: string;
  text: string;
  delay?: number;
}

const Testimonial = ({ name, age, profile, text, delay = 0 }: TestimonialProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-background p-6 rounded-lg shadow-sm"
  >
    <div className="flex items-center mb-4">
      <div className="bg-primary/10 p-2 rounded-full">
        <CircleUserRound className="h-6 w-6 text-primary" />
      </div>
      <div className="ml-3">
        <h3 className="font-semibold">{name}{age ? `, ${age} ans` : ''}</h3>
        <p className="text-sm text-muted-foreground">{profile}</p>
      </div>
    </div>
    <blockquote className="text-muted-foreground italic">
      "{text}"
    </blockquote>
  </motion.div>
);

const TestimonialsSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-muted p-8 rounded-lg">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Témoignages inspirants</h2>
        <p className="text-muted-foreground">Découvrez les histoires des personnes qui vivent avec la neurodiversité</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Testimonial
          name="Marie"
          age={32}
          profile="TDAH, diagnostiquée à 28 ans"
          text="Comprendre mon TDAH a été comme mettre des lunettes après avoir eu une vision floue toute ma vie. Les stratégies d'organisation ont transformé mon quotidien professionnel."
        />
        
        <Testimonial
          name="Thomas"
          age={15}
          profile="Dyslexie et dyspraxie"
          text="Les outils numériques à l'école ont fait toute la différence. Je peux enfin montrer ce que je sais vraiment sans être bloqué par l'écriture."
          delay={0.1}
        />
        
        <Testimonial
          name="Sophie"
          profile="Mère de Léo, fils autiste de 9 ans"
          text="Les routines visuelles ont apporté structure et sécurité à Léo. Notre vie familiale est plus sereine, et nous célébrons chaque petit progrès."
          delay={0.2}
        />

        <Testimonial
          name="Marc"
          age={28}
          profile="Syndrome d'Asperger"
          text="Trouver un environnement professionnel qui comprend et valorise ma façon unique de penser a été transformateur. Je peux enfin être authentiquement moi-même."
          delay={0.3}
        />

        <Testimonial
          name="Emma"
          age={19}
          profile="HPI et TDAH"
          text="La double exceptionnalité peut être déroutante. Comprendre que je peux être à la fois douée et en difficulté m'a aidée à mieux gérer mes études."
          delay={0.4}
        />

        <Testimonial
          name="Pierre et Julie"
          profile="Parents d'enfants neuroatypiques"
          text="Avoir deux enfants aux profils différents nous a appris l'importance d'adapter notre approche pour chacun. La neurodiversité nous a rendus plus flexibles et créatifs."
          delay={0.5}
        />
      </div>
      
      <div className="text-center mt-8">
        <Button onClick={scrollToTop}>Partager mon témoignage</Button>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground">
          <em>Note : À ce stade de développement du site, ces témoignages sont temporairement fictifs et servent d'illustration.</em>
        </p>
      </div>
    </div>
  );
};

export default TestimonialsSection;
