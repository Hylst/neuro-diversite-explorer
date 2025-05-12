
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';

const ExplicationNeurodiversite = () => {
  // Contenu du document (sera présenté comme ressource téléchargeable)
  const neurodiversiteContent = `
  Explication à un enfant de 8 ans de ce qu'est la neurodiversité
  
  Par Geoffroy Streit
  
  Bonjour mon petit ami ! 
  
  Aujourd'hui, j'aimerais te parler de quelque chose d'important qui s'appelle la "neurodiversité". C'est un grand mot, n'est-ce pas ? Mais ne t'inquiète pas, je vais t'expliquer simplement.
  
  Imagine que chaque personne dans le monde a un cerveau qui fonctionne comme une machine extraordinaire. Certaines machines sont très fortes pour construire des puzzles, d'autres pour raconter des histoires, et d'autres encore pour se souvenir de tous les noms des dinosaures !
  
  La neurodiversité, c'est l'idée que tous les cerveaux sont différents, et c'est une chose merveilleuse. Comme les couleurs d'un arc-en-ciel, chaque cerveau a sa façon spéciale de voir le monde, de penser et d'apprendre.
  
  Tu sais, parfois à l'école, certains enfants peuvent avoir du mal à rester assis tranquillement pendant longtemps, ou peut-être qu'ils ont besoin de plus de temps pour apprendre à lire, ou qu'ils sont très sensibles aux bruits forts ou aux lumières vives. Ce n'est pas parce qu'ils font exprès ou qu'ils sont moins intelligents. C'est simplement parce que leur cerveau fonctionne d'une manière un peu différente.
  
  Par exemple, certains enfants ont ce qu'on appelle le TDAH (Trouble du Déficit de l'Attention avec Hyperactivité). Leur cerveau est comme une voiture de course super rapide avec des freins qui ne fonctionnent pas toujours bien. Ils ont souvent plein d'énergie et d'idées géniales, mais parfois ils ont du mal à se concentrer sur une seule chose.
  
  D'autres enfants peuvent avoir de l'autisme. Leur cerveau est comme un ordinateur très puissant qui traite les informations différemment. Ils peuvent être vraiment forts dans certains domaines, comme les mathématiques ou la musique, mais parfois ils trouvent difficile de comprendre comment les autres personnes se sentent ou pourquoi ils font certaines choses.
  
  Et puis il y a des enfants qui ont ce qu'on appelle la "dyslexie". Pour eux, lire peut être comme essayer de déchiffrer un code secret très compliqué. Les lettres semblent parfois danser sur la page ou se mélanger. Mais ces mêmes enfants ont souvent une imagination incroyable et peuvent être de grands artistes ou inventeurs !
  
  Ce qui est important à comprendre, c'est que nous sommes tous différents, et c'est ce qui rend le monde si intéressant. Si nous étions tous exactement pareils, la vie serait ennuyeuse, tu ne crois pas ?
  
  Quand tu rencontres quelqu'un qui pense ou agit différemment de toi, essaie de te rappeler que son cerveau fonctionne peut-être d'une façon unique. Au lieu de juger ou de te moquer, sois curieux et gentil. Tu pourrais apprendre quelque chose de nouveau et peut-être même te faire un ami spécial.
  
  Être différent n'est pas une mauvaise chose. En fait, beaucoup de personnes célèbres et qui ont changé le monde avaient des cerveaux qui fonctionnaient différemment. Albert Einstein, qui a découvert des choses incroyables sur l'univers, ou Leonardo da Vinci, qui a créé des peintures magnifiques et inventé des machines fascinantes, avaient probablement des cerveaux "neurodivers".
  
  Chacun d'entre nous a des forces et des défis. Certains sont rapides à la course, d'autres sont bons en dessin. Certains peuvent avoir besoin d'aide pour apprendre à lire, d'autres pour se faire des amis. Et c'est parfaitement normal.
  
  La prochaine fois que tu vois quelqu'un qui a du mal avec quelque chose qui te semble facile, ou qui fait les choses d'une manière qui te paraît étrange, rappelle-toi que son cerveau est simplement réglé un peu différemment du tien. Peut-être qu'il ou elle est très doué(e) pour quelque chose que tu trouves difficile !
  
  Traiter tout le monde avec respect et gentillesse, peu importe à quel point ils peuvent sembler différents de toi, c'est ce qu'on appelle être inclusif. Et être inclusif rend le monde meilleur pour tout le monde.
  
  Alors, qu'est-ce que tu en penses ? N'est-ce pas merveilleux que nous soyons tous uniques et spéciaux à notre façon ? La neurodiversité est comme un grand jardin avec plein de fleurs différentes. Chaque fleur a sa propre beauté, et c'est l'ensemble qui rend le jardin si coloré et magnifique.
  
  Souviens-toi toujours que ce qui compte vraiment, ce n'est pas comment ton cerveau fonctionne, mais la gentillesse que tu montres aux autres et l'effort que tu mets à faire de ton mieux avec tes propres talents uniques.
  
  Et n'oublie jamais : tu es parfait(e) exactement comme tu es !
  `;

  // Fonction pour créer un PDF à partir du contenu et le télécharger
  const downloadPDF = () => {
    const element = document.createElement('a');
    const file = new Blob([neurodiversiteContent], {type: 'application/pdf'});
    element.href = URL.createObjectURL(file);
    element.download = "Explication_neurodiversite_enfant.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="p-4 border rounded-lg bg-card shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Explication à un enfant de 8 ans de ce qu'est la neurodiversité</h3>
          <p className="text-sm text-muted-foreground mt-1">Par Geoffroy Streit</p>
        </div>
        <Button variant="outline" size="sm" onClick={downloadPDF} className="flex items-center gap-2">
          <FileDown className="h-4 w-4" />
          Télécharger
        </Button>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        Un document expliquant la neurodiversité avec pédagogie et sensibilité pour les enfants, 
        abordant les différences cérébrales, l'acceptation et le respect des particularités de chacun.
      </p>
    </div>
  );
};

export default ExplicationNeurodiversite;
