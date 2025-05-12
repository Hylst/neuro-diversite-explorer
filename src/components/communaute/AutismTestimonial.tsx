
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Collapse } from '@/components/ui/collapse';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const AutismTestimonial = () => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder.svg" alt="Sophie" />
            <AvatarFallback>SP</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Mon parcours avec l'autisme</CardTitle>
            <CardDescription className="mt-1">
              Par Sophie, 34 ans, diagnostiquée TSA à 32 ans
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>
            J'ai découvert mon autisme tardivement, après des années à me sentir différente sans comprendre pourquoi. Comme beaucoup de femmes autistes, j'ai appris à masquer mes différences, un processus épuisant qui a eu un coût élevé sur ma santé mentale.
          </p>

          <Collapse open={expanded}>
            <div className="space-y-4 mt-4">
              <p>
                Enfant, j'étais décrite comme "rêveuse", "dans ma bulle", ou "trop sensible". J'adorais les livres sur les sciences naturelles et je pouvais passer des heures à classifier les insectes ou à mémoriser les noms des étoiles. Les interactions sociales étaient un mystère pour moi - je ne comprenais pas les règles implicites, les expressions faciales ou pourquoi mes camarades se lassaient si vite de mes sujets d'intérêt.
              </p>
              
              <p>
                À l'adolescence, j'ai développé des stratégies de camouflage sophistiquées. J'observais attentivement mes pairs et je répétais mentalement des scripts sociaux. Je mimais les expressions faciales et les intonations. J'ai appris à ne pas parler de mes intérêts spécifiques en public. Je suis devenue une excellente actrice, mais ce masquage constant m'épuisait et me laissait avec un sentiment profond d'imposture.
              </p>
              
              <p>
                Professionnellement, j'ai trouvé ma place dans l'informatique, un domaine où ma pensée logique et mon attention aux détails sont valorisées. Cependant, les open spaces, les réunions impromptues et les événements sociaux d'entreprise restaient des défis majeurs. J'ai connu plusieurs burnouts, sans comprendre qu'ils étaient liés à l'effort constant de masquage.
              </p>
              
              <p>
                Mon diagnostic à 32 ans a été une révélation. Soudain, tout avait un sens. Ce n'était pas que j'étais "cassée" ou "inadaptée" - mon cerveau fonctionne simplement différemment. J'ai pu commencer à découvrir mes besoins authentiques et à mettre en place des accommodements qui me permettent de fonctionner sans m'épuiser.
              </p>
              
              <p>
                Aujourd'hui, je travaille à distance trois jours par semaine, ce qui me permet de contrôler mon environnement sensoriel. J'utilise des écouteurs antibruit quand je suis au bureau. J'ai appris à reconnaître les signes avant-coureurs de surcharge et à prendre des pauses sensorielles. Je suis plus ouverte sur mes besoins avec mes collègues proches.
              </p>
              
              <p>
                Le diagnostic m'a aussi permis de trouver une communauté. Rencontrer d'autres adultes autistes a été une expérience transformatrice - pour la première fois, je me sentais vraiment comprise. Nous partageons des stratégies, des ressources, et surtout, nous pouvons être authentiques ensemble.
              </p>
              
              <p>
                Mon message pour ceux qui se reconnaissent dans mon histoire: vous n'êtes pas seuls. Il n'est jamais trop tard pour se découvrir et s'accepter. L'autisme n'est pas quelque chose à "surmonter" mais une partie intrinsèque de qui je suis, avec ses défis mais aussi ses forces uniques.
              </p>
            </div>
          </Collapse>
          
          <Button 
            variant="outline" 
            onClick={() => setExpanded(!expanded)} 
            className="flex items-center gap-2 mx-auto"
          >
            {expanded ? "Voir moins" : "Lire la suite"}
            <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AutismTestimonial;
