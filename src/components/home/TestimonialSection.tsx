
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  quote: string;
  initials: string;
  disorder: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sophie L.",
    role: "Étudiante, 22 ans",
    quote: "Découvrir que j'avais un TDAH à 20 ans a été libérateur. Comprendre enfin pourquoi j'avais tant de difficultés à me concentrer m'a permis de trouver des stratégies adaptées. Ce site m'a aidée à trouver les bons outils.",
    initials: "SL",
    disorder: "TDAH"
  },
  {
    id: "2",
    name: "Thomas M.",
    role: "Enseignant et parent",
    quote: "En tant qu'enseignant et parent d'un enfant dyslexique, j'ai trouvé ici des ressources inestimables pour adapter ma pédagogie et mieux accompagner mon fils dans ses apprentissages.",
    initials: "TM",
    disorder: "Dyslexie"
  },
  {
    id: "3",
    name: "Léa D.",
    role: "Designer, 28 ans",
    quote: "Mon diagnostic tardif d'autisme m'a permis de mieux me comprendre et d'accepter mes différences. Les outils et témoignages de ce site m'ont aidée à trouver des accommodations efficaces au travail.",
    initials: "LD",
    disorder: "TSA"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-12 bg-muted">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Témoignages et expériences</h2>
          <p className="text-muted-foreground mt-2">
            Découvrez les parcours de personnes neurodivergentes et leurs stratégies
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="neuro-card">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar>
                    {testimonial.avatar ? (
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    ) : null}
                    <AvatarFallback className="bg-neuro-purple text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>
                      {testimonial.role} • <span className="font-medium text-neuro-purple">{testimonial.disorder}</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Quote className="absolute top-0 left-0 h-6 w-6 text-neuro-purple opacity-20 -translate-x-2 -translate-y-2" />
                  <p className="pl-2 text-muted-foreground">
                    "{testimonial.quote}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            <em className="font-medium">Note : À ce stade de développement du site, ces témoignages sont temporairement fictifs. 
            Ils servent d'illustration et seront remplacés par de véritables expériences partagées.</em> 
            <br />Si vous souhaitez partager votre expérience, contactez-nous via notre 
            <a href="/communaute" className="text-neuro-purple font-medium hover:underline"> espace communautaire</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
