
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, User, Tag, ArrowLeft, Bookmark, Share2, ThumbsUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const blogPosts = {
  "decouverte-tdah-35-ans": {
    title: "Comment j'ai découvert mon TDAH à 35 ans",
    date: "15 avril 2024",
    readTime: "6 min",
    author: "Jean Dupont",
    authorAvatar: "/placeholder.svg",
    authorInitials: "JD",
    category: "TDAH",
    content: [
      "C'est à 35 ans que j'ai finalement compris pourquoi j'avais toujours eu l'impression de fonctionner différemment des autres. Après des années de procrastination chronique, de difficultés d'organisation et de pensées qui filent dans tous les sens, j'ai enfin mis un nom sur ce que je vivais : le TDAH (Trouble du Déficit de l'Attention avec Hyperactivité).",
      "Le parcours vers ce diagnostic a été long et sinueux. J'ai longtemps cru que j'étais simplement paresseux ou que je manquais de volonté. Comment expliquer autrement que je pouvais rester concentré pendant des heures sur un sujet qui me passionnait, mais être incapable de me mettre à une tâche administrative de 15 minutes ? Ou que je pouvais oublier un rendez-vous important tout en me souvenant parfaitement d'un détail insignifiant mentionné dans une conversation il y a 10 ans ?",
      "C'est en lisant un article sur le TDAH chez l'adulte que quelque chose a fait 'tilt'. Je me suis retrouvé dans chaque ligne, chaque exemple. Cette lecture a été le point de départ d'une démarche qui m'a mené vers un neuropsychologue spécialisé, puis vers ce diagnostic qui a changé ma vie.",
      "Le TDAH chez l'adulte est souvent méconnu, ou réduit à l'image de l'enfant hyperactif qui saute partout. Or, chez l'adulte, les symptômes peuvent être plus subtils et se manifester différemment. Pour moi, c'était principalement l'inattention et ce que les spécialistes appellent la 'dysrégulation émotionnelle' - cette tendance à ressentir les émotions de manière très intense.",
      "Après le diagnostic, j'ai mis en place plusieurs stratégies pour mieux gérer mon quotidien : applications de gestion des tâches, techniques de méditation, aménagements dans mon environnement de travail... J'ai également bénéficié d'un accompagnement médicamenteux qui m'a aidé à réguler mon attention.",
      "Aujourd'hui, je considère le TDAH non plus comme un handicap, mais comme une particularité neurologique qui comporte certes des défis, mais aussi des forces : créativité, pensée divergente, capacité à établir des connexions inattendues entre les idées... Je continue à apprendre à vivre avec cette particularité, à l'apprivoiser et même à en tirer parti.",
      "Si vous vous reconnaissez dans cette histoire, sachez que le TDAH n'est pas une question de volonté ou d'intelligence. C'est une différence neurologique qui mérite d'être comprise et accompagnée. Et il n'est jamais trop tard pour entamer cette démarche."
    ]
  },
  "amenagements-scolaires-dyslexie": {
    title: "Guide des aménagements scolaires pour enfants dyslexiques",
    date: "28 mars 2024",
    readTime: "8 min",
    author: "Marie Lambert",
    authorAvatar: "/placeholder.svg",
    authorInitials: "ML",
    category: "Dyslexie",
    content: [
      "La dyslexie touche environ 5 à 10% des enfants scolarisés, rendant l'apprentissage de la lecture et de l'écriture particulièrement difficile. Pour ces élèves, des aménagements scolaires adaptés peuvent faire toute la différence dans leur parcours éducatif. Voici un guide des mesures qui ont fait leurs preuves.",
      "Tout d'abord, il est essentiel d'obtenir un diagnostic précis établi par un orthophoniste ou un neuropsychologue. Ce diagnostic permettra non seulement de mieux comprendre les difficultés spécifiques de l'enfant, mais aussi de mettre en place un Plan d'Accompagnement Personnalisé (PAP) ou, dans les cas plus sévères, un Projet Personnalisé de Scolarisation (PPS).",
      "Parmi les aménagements les plus efficaces, on trouve :",
      "L'adaptation des supports pédagogiques : utiliser une police de caractère spécifique (comme OpenDyslexic), augmenter l'espacement entre les lettres et les lignes, utiliser des couleurs pour distinguer les sons complexes...",
      "L'aménagement du temps : accorder un tiers-temps supplémentaire lors des évaluations, réduire la quantité de devoirs écrits...",
      "L'utilisation d'outils numériques : logiciels de synthèse vocale, correcteurs orthographiques, logiciels de dictée vocale, tablettes numériques...",
      "Le soutien humain : intervention d'un Accompagnant des Élèves en Situation de Handicap (AESH), séances d'orthophonie intégrées au temps scolaire...",
      "L'adaptation des méthodes d'évaluation : privilégier l'oral, ne pas pénaliser l'orthographe dans les matières autres que le français, autoriser l'utilisation de tables de multiplication ou de fiches mémo...",
      "Il est important de rappeler que chaque enfant dyslexique est différent, et que les aménagements doivent être personnalisés en fonction de ses besoins spécifiques. Une communication régulière entre parents, enseignants et professionnels de santé est essentielle pour ajuster ces mesures au fil du temps.",
      "Enfin, au-delà des aménagements techniques, n'oublions pas l'importance du soutien émotionnel. Les enfants dyslexiques ont souvent une estime de soi fragilisée par leurs difficultés scolaires. Valoriser leurs progrès, leurs talents dans d'autres domaines, et leur faire comprendre que la dyslexie n'affecte en rien leur intelligence est tout aussi fondamental que les adaptations pédagogiques."
    ]
  },
  "double-exceptionnalite": {
    title: "La double exceptionnalité : surdoué et neurodivergent",
    date: "10 mars 2024",
    readTime: "5 min",
    author: "Thomas Roux",
    authorAvatar: "/placeholder.svg",
    authorInitials: "TR",
    category: "Général",
    content: [
      "La double exceptionnalité, ou 'twice exceptionality' (2e), désigne la coexistence chez une même personne d'un haut potentiel intellectuel (HPI) et d'un trouble neurodéveloppemental comme le TDAH, l'autisme, la dyslexie ou la dyspraxie. Cette combinaison crée un profil cognitif complexe, souvent mal identifié et mal accompagné.",
      "La difficulté majeure réside dans l'effet de masquage : les capacités intellectuelles supérieures peuvent compenser les difficultés liées au trouble neurodéveloppemental, rendant celui-ci invisible aux yeux des enseignants et parfois même des professionnels. À l'inverse, le trouble peut masquer le haut potentiel, donnant l'impression d'un élève 'moyen' ou en difficulté.",
      "Cette situation conduit souvent à des parcours scolaires chaotiques. L'enfant doublement exceptionnel peut exceller dans certaines matières qui correspondent à ses points forts et être en grande difficulté dans d'autres, créant une inconsistance déconcertante pour son entourage. 'Il pourrait y arriver s'il faisait des efforts' est une phrase que ces enfants entendent fréquemment, ajoutant à leur incompréhension et leur sentiment d'inadéquation.",
      "Sur le plan émotionnel, cette double exceptionnalité génère souvent une intense frustration. Ces personnes perçoivent intuitivement qu'elles sont capables de performances intellectuelles élevées, mais se heurtent à des obstacles inexplicables. Cette dissonance peut mener à une perte de confiance en soi, une anxiété chronique ou une dépression.",
      "Pour accompagner efficacement ces profils atypiques, une approche sur mesure est nécessaire :",
      "Identifier précisément les forces et les défis spécifiques à travers un bilan neuropsychologique complet",
      "Mettre en place des stratégies de contournement pour les difficultés tout en nourrissant les domaines d'excellence",
      "Proposer un environnement d'apprentissage flexible, permettant d'avancer à son rythme dans différentes matières",
      "Accompagner la personne dans la compréhension de son fonctionnement particulier",
      "La double exceptionnalité nous rappelle que l'intelligence humaine ne se réduit pas à une dimension unique. Elle nous invite à repenser nos systèmes éducatifs pour qu'ils puissent accueillir et valoriser la neurodiversité dans toute sa complexité."
    ]
  },
  "default": {
    title: "Article non trouvé",
    date: "",
    readTime: "",
    author: "",
    authorAvatar: "",
    authorInitials: "",
    category: "",
    content: ["Désolé, cet article n'existe pas ou a été déplacé."]
  }
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts[slug as keyof typeof blogPosts] || blogPosts.default;

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <Link to="/communaute" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux articles
          </Link>
          
          <article className="space-y-8">
            <div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
                <span className="mx-1">•</span>
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
                <span className="mx-1">•</span>
                <Tag className="h-4 w-4" />
                <span>{post.category}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={post.authorAvatar} alt={post.author} />
                  <AvatarFallback>{post.authorInitials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{post.author}</div>
                  <div className="text-sm text-muted-foreground">Auteur</div>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
            
            <div className="border-t pt-6 flex justify-between items-center">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Utile
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="mr-2 h-4 w-4" />
                  Sauvegarder
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Partager
                </Button>
              </div>
              
              <Button variant="default" asChild>
                <Link to="/communaute">
                  Voir plus d'articles
                </Link>
              </Button>
            </div>
          </article>
        </div>
      </main>    </div>
  );
};

export default BlogDetail;
