import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  HeartPulse, 
  Zap, 
  FlaskConical, 
  Activity, 
  Microscope, 
  Dna, 
  Brain, 
  Network 
} from 'lucide-react';

interface NeurotransmittersSectionProps {
  sectionRef: React.RefObject<HTMLElement>;
}

const NeurotransmittersSection: React.FC<NeurotransmittersSectionProps> = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} className="py-16 bg-background">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Neurotransmetteurs</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Les messagers chimiques du cerveau qui jouent un rôle crucial dans la transmission de l'information neuronale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <HeartPulse className="h-6 w-6 text-blue-500" />
              </div>
              <CardTitle>Sérotonine</CardTitle>
              <CardDescription>Le régulateur de l'humeur</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Impliquée dans la régulation de l'humeur, du sommeil, de l'appétit et de la perception de la douleur. Un déséquilibre peut contribuer à la dépression et l'anxiété.
              </p>
              <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                <span>Troubles associés:</span>
                <span>Dépression, Anxiété, TOC</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <Zap className="h-6 w-6 text-green-500" />
              </div>
              <CardTitle>Dopamine</CardTitle>
              <CardDescription>Le messager du plaisir et de la récompense</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Essentielle dans les circuits de récompense, la motivation, la mémoire et l'attention. Son dysfonctionnement est lié à plusieurs troubles neurologiques.
              </p>
              <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                <span>Troubles associés:</span>
                <span>Parkinson, TDAH, Addiction</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                <FlaskConical className="h-6 w-6 text-purple-500" />
              </div>
              <CardTitle>GABA</CardTitle>
              <CardDescription>L'inhibiteur principal</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Principal neurotransmetteur inhibiteur du cerveau, il réduit l'excitabilité neuronale. Il joue un rôle important dans la réduction de l'anxiété et la détente.
              </p>
              <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                <span>Troubles associés:</span>
                <span>Anxiété, Épilepsie, Insomnie</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                <Activity className="h-6 w-6 text-orange-500" />
              </div>
              <CardTitle>Noradrénaline</CardTitle>
              <CardDescription>Le neurotransmetteur de l'éveil</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Joue un rôle clé dans l'attention, la vigilance et la réponse au stress. Impliquée dans la régulation du cycle veille-sommeil et la réactivité émotionnelle.
              </p>
              <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                <span>Troubles associés:</span>
                <span>TDAH, Dépression, Stress post-traumatique</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-3">
                <Microscope className="h-6 w-6 text-yellow-500" />
              </div>
              <CardTitle>Acétylcholine</CardTitle>
              <CardDescription>Le messager de la mémoire</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Essentielle pour la mémoire, l'apprentissage et le contrôle musculaire. Premier neurotransmetteur découvert, elle est cruciale pour les fonctions cognitives.
              </p>
              <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                <span>Troubles associés:</span>
                <span>Alzheimer, Myasthénie, Parkinson</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-3">
                <Dna className="h-6 w-6 text-red-500" />
              </div>
              <CardTitle>Glutamate</CardTitle>
              <CardDescription>L'excitateur principal</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Principal neurotransmetteur excitateur du cerveau, essentiel pour l'apprentissage et la mémoire. Son excès peut être neurotoxique et contribuer à diverses pathologies.
              </p>
              <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                <span>Troubles associés:</span>
                <span>Épilepsie, AVC, Sclérose latérale</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-3">
                <HeartPulse className="h-6 w-6 text-pink-500" />
              </div>
              <CardTitle>Endorphines</CardTitle>
              <CardDescription>Les analgésiques naturels</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Produites par l'organisme en réponse à la douleur ou au stress, elles procurent une sensation de bien-être et réduisent la perception de la douleur. Elles sont impliquées dans la réponse au plaisir et l'euphorie.
              </p>
              <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                <span>Effets:</span>
                <span>Analgésie, Euphorie, Réduction du stress</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-3">
                <Zap className="h-6 w-6 text-teal-500" />
              </div>
              <CardTitle>Histamine</CardTitle>
              <CardDescription>Le régulateur de l'éveil</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Au-delà de son rôle dans les réactions allergiques, l'histamine agit comme neurotransmetteur impliqué dans la régulation du cycle veille-sommeil, l'appétit et la vigilance. Elle joue un rôle clé dans le maintien de l'éveil.
              </p>
              <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                <span>Fonctions:</span>
                <span>Éveil, Attention, Réponse immunitaire</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                <Network className="h-6 w-6 text-indigo-500" />
              </div>
              <CardTitle>Mélatonine</CardTitle>
              <CardDescription>L'hormone du sommeil</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Bien que principalement considérée comme une hormone, la mélatonine agit également comme neurotransmetteur. Elle régule le cycle circadien et favorise l'endormissement. Sa production est inhibée par la lumière et stimulée par l'obscurité.
              </p>
              <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                <span>Fonctions:</span>
                <span>Régulation du sommeil, Antioxydant, Immunité</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-3">
                <Brain className="h-6 w-6 text-emerald-500" />
              </div>
              <CardTitle>Ocytocine</CardTitle>
              <CardDescription>L'hormone de l'attachement</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                À la fois hormone et neurotransmetteur, l'ocytocine joue un rôle crucial dans les comportements sociaux, l'attachement et la confiance. Elle est impliquée dans la formation des liens affectifs, l'empathie et la réduction du stress social.
              </p>
              <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                <span>Fonctions:</span>
                <span>Attachement, Confiance, Réduction de l'anxiété</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NeurotransmittersSection;