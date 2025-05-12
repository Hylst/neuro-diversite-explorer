
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Bookmark, Book, Download } from 'lucide-react';
import BlogPosts from './BlogPosts';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import blogPosts from './BlogData';
import { Link } from 'react-router-dom';

const BlogTab = () => {
  const [syncing, setSyncing] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const checkUserPermissions = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        const email = session?.user?.email || null;
        setUserEmail(email);
        
        // Vérifier si l'utilisateur est admin
        if (email === 'geoffroy.streit@gmail.com') {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("Erreur lors de la vérification des permissions:", error);
      }
    };

    checkUserPermissions();
  }, []);

  const syncLocalBlogsToSupabase = async () => {
    setSyncing(true);
    try {
      // Convert BlogPost[] to the format expected by Supabase
      // We need to ensure the author field is properly formatted as Json
      const formattedPosts = blogPosts.map(post => {
        return {
          id: post.id,
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          author: JSON.parse(JSON.stringify(post.author)), // Convert to Json properly
          date: post.date,
          readtime: post.readtime,
          likes: post.likes,
          comments: post.comments,
          tags: post.tags,
          icon: post.icon
        };
      });

      // Insert all local blog posts into Supabase
      const { error } = await supabase
        .from('blog_posts')
        .insert(formattedPosts);

      if (error) {
        console.error('Error syncing blog posts to Supabase:', error);
        
        // If error is due to duplicate keys, try updating instead
        if (error.code === '23505') { // Duplicate key value violates unique constraint
          toast.warning("Mise à jour des articles existants...");
          
          // Update each post individually
          const updatePromises = blogPosts.map(async (post) => {
            const { error: updateError } = await supabase
              .from('blog_posts')
              .update({
                title: post.title,
                excerpt: post.excerpt,
                content: post.content,
                author: JSON.parse(JSON.stringify(post.author)), // Convert to Json properly
                date: post.date,
                readtime: post.readtime,
                likes: post.likes,
                comments: post.comments,
                tags: post.tags,
                icon: post.icon
              })
              .eq('id', post.id);
              
            if (updateError) {
              console.error(`Error updating post ${post.id}:`, updateError);
            }
          });
          
          await Promise.all(updatePromises);
          toast.success("Articles mis à jour avec succès");
          window.location.reload(); // Reload the page to reflect changes
        } else {
          toast.error("Erreur lors de la synchronisation des articles");
        }
      } else {
        toast.success("Articles synchronisés avec succès");
        window.location.reload(); // Reload the page to reflect changes
      }
    } catch (error) {
      console.error("Erreur lors de la synchronisation:", error);
      toast.error("Une erreur s'est produite");
    } finally {
      setSyncing(false);
    }
  };

  // Add new testimonial posts to Supabase
  const addNewTestimonials = async () => {
    setSyncing(true);
    try {
      // New fictional testimonials to add
      const newTestimonials = [
        {
          id: crypto.randomUUID(),
          title: "La dyslexie m'a appris à penser autrement",
          excerpt: "J'ai mis du temps à comprendre que ma difficulté à lire n'était pas de la stupidité, mais une façon différente de traiter l'information...",
          content: "J'ai passé mon enfance à me demander pourquoi les lettres dansaient devant mes yeux quand tout le monde semblait les voir immobiles. J'ai mis du temps à comprendre que ma difficulté à lire n'était pas de la stupidité, mais une façon différente de traiter l'information. Aujourd'hui, architecte, je transforme cette 'différence' en force créative. Ma vision spatiale est exceptionnelle parce que mon cerveau a développé d'autres chemins. La dyslexie m'a appris à chercher des solutions alternatives, à voir des motifs que d'autres ne voient pas. C'est ma différence qui fait ma valeur ajoutée.\n\nÀ l'école, je me cachais au fond de la classe, terrifié à l'idée qu'on me demande de lire à voix haute. Les lettres se mélangeaient, se retournaient, semblaient vibrer sur la page. J'ai développé des stratégies élaborées pour éviter ces situations : je mémorisais des paragraphes entiers ou je prétendais être malade. Mes professeurs me qualifiaient de « paresseux mais intelligent ». Ce paradoxe me hantait.\n\nLe diagnostic de dyslexie à 16 ans a été à la fois un soulagement et une révélation. J'ai enfin compris que mon cerveau était simplement câblé différemment. J'ai commencé à utiliser des polices adaptées, des enregistrements audio, des outils de reconnaissance vocale. Mais surtout, j'ai cessé de me battre contre ma différence pour commencer à l'exploiter.\n\nEn architecture, ma perception unique de l'espace est devenue mon atout majeur. Je peux visualiser les structures en trois dimensions d'une façon que mes collègues trouvent souvent surprenante. Là où d'autres voient des plans, je vois déjà l'édifice entier, ses volumes, ses jeux de lumière. En réalité, ma dyslexie m'a forcé à développer d'autres compétences cognitives pour compenser mes difficultés de lecture. C'est un exemple parfait de neuroplasticité.\n\nAujourd'hui, je travaille avec des écoles d'architecture pour sensibiliser aux différentes formes d'intelligence. Je montre aux jeunes dyslexiques qu'ils possèdent des capacités uniques qui peuvent devenir des avantages professionnels. Notre cerveau n'est pas « défectueux », il est simplement différent. Et cette différence peut être notre plus grande force.",
          author: {
            name: "Claire M.",
            avatar: "/assets/avatars/avatar-2.png",
            bio: "Architecte, lectrice audio passionnée"
          },
          date: "3 avril 2023",
          readtime: "5 min",
          likes: 98,
          comments: 15,
          tags: ["Dyslexie", "Créativité", "Adaptation"],
          icon: "book"
        },
        {
          id: crypto.randomUUID(),
          title: "Être parent d'un enfant autiste : mon parcours d'apprentissage",
          excerpt: "Au début, j'avais peur de ne pas être à la hauteur. Maintenant, je réalise que c'est mon fils qui m'enseigne chaque jour...",
          content: "Au début, j'avais peur de ne pas être à la hauteur. Maintenant, je réalise que c'est mon fils qui m'enseigne chaque jour comment voir le monde différemment. Quand Léo s'émerveille pendant des heures devant le mouvement des feuilles dans les arbres, il me rappelle de ralentir et d'observer la beauté des petites choses. Ses routines strictes m'ont appris la patience et l'importance de la structure. Ses difficultés sociales m'ont rendue plus attentive aux signaux non-verbaux. Être parent d'un enfant autiste m'a transformée en meilleure version de moi-même. C'est un parcours exigeant, mais infiniment enrichissant.\n\nQuand le diagnostic est tombé, Léo avait trois ans. Les spécialistes parlaient de « déficiences », de « retards », de « troubles ». Ces mots me brisaient le cœur. Je ne voyais pas mon enfant comme « déficient », je voyais un petit garçon qui percevait le monde d'une façon différente de la mienne. Il m'a fallu du temps pour rejeter ce langage médical déshumanisant et apprendre à célébrer sa différence plutôt que de la pathologiser.\n\nNous avons créé notre propre système de communication, un mélange de mots, de gestes et d'images. J'ai appris que quand Léo se balance d'avant en arrière, ce n'est pas un « comportement à corriger » mais sa façon de se réguler quand l'environnement devient trop intense. J'ai compris que ses crises ne sont pas des caprices, mais une réponse à une surcharge sensorielle. Chaque jour, j'apprends à voir le monde à travers ses yeux.\n\nCertains moments sont difficiles. Les regards dans les supermarchés quand il devient submergé. Les fêtes d'anniversaire auxquelles nous ne sommes plus invités. Les éducateurs qui voient ses difficultés mais pas ses dons extraordinaires – sa mémoire photographique, sa capacité à repérer des motifs complexes, sa perception des détails que personne d'autre ne remarque.\n\nMais il y a aussi ces moments magiques, comme quand il a mémorisé l'intégralité d'un documentaire sur les planètes à l'âge de quatre ans, ou quand il m'a demandé pourquoi les gens disent « tomber amoureux » alors que « l'amour devrait nous faire voler ». Ces moments où sa perspective unique illumine le monde d'une nouvelle façon.\n\nÀ tous les parents qui commencent ce voyage : votre enfant n'est pas « cassé ». Il n'a pas besoin d'être « réparé ». Il a besoin d'être compris, soutenu et aimé tel qu'il est. Et vous découvrirez que ce chemin difficile vous apprendra plus sur l'amour, la patience et l'acceptation que n'importe quelle autre expérience.",
          author: {
            name: "Sophie L.",
            avatar: "/assets/avatars/avatar-3.png",
            bio: "Maman d'un extraordinaire petit garçon, formatrice en entreprise"
          },
          date: "21 juin 2023",
          readtime: "7 min",
          likes: 215,
          comments: 47,
          tags: ["Autisme", "Parentalité", "Neurodiversité"],
          icon: "heart"
        },
        {
          id: crypto.randomUUID(),
          title: "Parkinson précoce : ma redécouverte de la lenteur",
          excerpt: "Diagnostiqué à 42 ans, j'ai dû apprendre à vivre différemment. La maladie m'a enseigné une sagesse inattendue...",
          content: "La nouvelle est tombée comme un couperet : Parkinson à 42 ans. Moi qui vivais à cent à l'heure, j'ai dû apprendre à composer avec la lenteur, les tremblements, l'imprévisibilité de mon corps. Les premiers mois ont été marqués par la colère et le déni. Puis, progressivement, j'ai découvert que cette 'lenteur forcée' m'offrait une perspective différente. Je savoure désormais chaque geste réussi. J'apprécie les moments de clarté. J'prête attention aux détails que je négligeais autrefois. Ma neurologie altérée m'a paradoxalement rendu plus présent, plus attentif à l'instant. La maladie reste un adversaire redoutable, mais elle m'a aussi enseigné une forme de sagesse que j'ignorais.\n\nAvant le diagnostic, j'étais cadre commercial dans une entreprise technologique. Ma vie était rythmée par les deadlines, les objectifs trimestriels, les voyages d'affaires. Je courais constamment après le temps, persuadé que la vitesse était synonyme d'efficacité et de réussite. Le Parkinson a brutalement réécrit les règles du jeu. Soudain, boutonner ma chemise pouvait prendre dix minutes. Marcher d'un bout à l'autre d'une salle de réunion devenait un exercice de concentration intense. Ma signature, autrefois fluide, s'est transformée en un tracé tremblant et incertain.\n\nFace à l'impossibilité de maintenir mon rythme professionnel, j'ai d'abord sombré dans une dépression profonde. L'identité que j'avais construite s'effondrait. Puis, un jour, lors d'une promenade difficile dans un parc – une de ces sorties que mon kinésithérapeute m'encourageait à faire – je me suis arrêté, essoufflé, devant un étang. Forcé à l'immobilité, j'ai observé les reflets changeants de la lumière sur l'eau, le ballet des libellules, la texture des nuages. J'ai réalisé que c'était la première fois depuis des années que je prenais simplement le temps de regarder, de vraiment voir le monde.\n\nCette révélation a initié un changement profond dans ma façon d'aborder ma condition. J'ai commencé à tenir un journal, documentant non pas mes limitations mais mes découvertes – ces moments de beauté que ma vie antérieure, trop rapide, m'aurait fait manquer. J'ai appris à planifier avec soin, à anticiper mes « périodes OFF » où les médicaments sont moins efficaces, à valoriser la qualité de chaque interaction plutôt que leur quantité.\n\nAujourd'hui, cinq ans après le diagnostic, j'ai reconstruit ma vie sur de nouvelles fondations. J'ai quitté l'entreprise pour devenir chroniqueur indépendant, écrivant sur la slow life et le minimalisme – des philosophies que ma maladie m'a forcé à adopter mais qui se sont révélées profondément épanouissantes. Je pratique la méditation de pleine conscience, non pas comme une mode mais comme une nécessité. Je marche en montagne chaque semaine – lentement, délibérément – pour maintenir ma mobilité et nourrir mon âme.\n\nLe Parkinson reste un compagnon exigeant et imprévisible. Il y a des jours sombres de douleur et de frustration. Mais étrangement, je ne suis pas certain de vouloir revenir à ma vie d'avant, même si c'était possible. Cette maladie m'a appris que la vraie richesse ne réside pas dans l'accumulation frénétique d'expériences, mais dans notre capacité à être pleinement présents dans celles que nous vivons.",
          author: {
            name: "Vincent P.",
            avatar: "/assets/avatars/avatar-6.png",
            bio: "Ancien cadre commercial, désormais chroniqueur et randonneur contemplatif"
          },
          date: "2 août 2023",
          readtime: "8 min",
          likes: 189,
          comments: 54,
          tags: ["Parkinson", "Résilience", "Philosophie"],
          icon: "user"
        },
        {
          id: crypto.randomUUID(),
          title: "Syndrome de Gilles de la Tourette : mes tics, ma force",
          excerpt: "Entre regards gênés et préjugés, j'ai appris à transformer mes tics en source de créativité et d'humour...",
          content: "La première fois que j'ai pris conscience que j'étais « différent », j'avais 7 ans. En plein milieu d'un cours de mathématiques, j'ai commencé à émettre un son aigu, comme un petit oiseau. Incontrôlable. Répétitif. Les autres enfants ont ri. L'enseignante m'a demandé d'arrêter de faire l'intéressant. Mais je ne pouvais pas arrêter, pas plus qu'on ne peut empêcher un éternuement.\n\nC'était le début de ma vie avec le syndrome de Gilles de la Tourette (SGT). Dans les années qui ont suivi, mes tics se sont diversifiés : clignements d'yeux intenses, haussements d'épaules, secousses de la tête, et parfois des mots ou des phrases qui sortaient sans mon consentement – heureusement rarement des obscénités, contrairement au stéréotype populaire. Chaque tic a sa propre personnalité, son intensité, son rythme. Certains sont discrets, d'autres impossibles à dissimuler.\n\nL'adolescence a été particulièrement difficile. Les tics s'intensifient souvent avec le stress, et quoi de plus stressant que d'être un adolescent différent ? Je me filmais pour analyser mes mouvements, espérant les contrôler par pure volonté. J'évitais les cinémas, les bibliothèques, tous ces lieux silencieux où mes sons involontaires devenaient des projecteurs braqués sur moi. Je rêvais d'invisibilité.\n\nLe tournant est venu grâce à mon professeur de théâtre au lycée. Alors que j'hésitais à rejoindre le club, convaincu que mes tics me disqualifiaient d'office, il m'a dit quelque chose que je n'oublierai jamais : « Le théâtre ne consiste pas à prétendre être quelqu'un d'autre, mais à trouver comment exprimer qui tu es vraiment. » Il m'a encouragé à explorer comment mon corps unique pouvait devenir un outil d'expression artistique.\n\nSur scène, quelque chose d'étonnant s'est produit. Lorsque j'incarnais un personnage avec toute mon attention, mes tics diminuaient considérablement. Cette découverte a été confirmée par la recherche médicale : une concentration intense peut temporairement réduire les manifestations du SGT. Le théâtre est devenu ma thérapie, mon refuge, et finalement, ma carrière.\n\nAujourd'hui, à 34 ans, je suis comédien professionnel et éducateur en santé mentale. Mes tics font partie de moi, mais ils ne me définissent plus. J'ai appris à les intégrer dans mon travail quand c'est approprié – certains de mes personnages comiques ont des tics, inspirés des miens mais distincts. J'utilise mon expérience pour sensibiliser le public au SGT à travers des spectacles éducatifs dans les écoles.\n\nLe SGT m'a également offert des dons inattendus : une conscience corporelle aiguë, une résilience face au jugement des autres, et une créativité née de la nécessité de constamment m'adapter. Ma neurologie particulière a façonné ma perception du monde d'une manière unique.\n\nBien sûr, tout n'est pas rose. Les jours de forte manifestation des tics sont épuisants. Certaines personnes restent mal à l'aise ou méfiantes. Les rendez-vous amoureux peuvent être des terrains minés d'anxiété. Mais j'ai découvert que l'humour et l'honnêteté sont mes meilleurs alliés. « Oui, je fais ces sons et ces mouvements. Non, je ne peux pas les contrôler complètement. Oui, c'est parfois gênant. Non, ce n'est pas contagieux ! »\n\nÀ tous ceux qui vivent avec le SGT ou qui aiment quelqu'un qui en est atteint : nos tics ne sont qu'une expression neurologique, comme un accent ou une empreinte digitale. Ils méritent accommodation, pas honte. Ils peuvent être difficiles, mais ils nous ont aussi rendus créatifs, résilients et profondément empathiques. Et dans un monde qui valorise de plus en plus l'authenticité, quelle meilleure leçon d'authenticité que d'apprendre à s'accepter tel qu'on est, tics compris ?",
          author: {
            name: "Gabriel M.",
            avatar: "/assets/avatars/avatar-4.png",
            bio: "Comédien, éducateur et ambassadeur pour le SGT"
          },
          date: "5 novembre 2023",
          readtime: "6 min",
          likes: 156,
          comments: 42,
          tags: ["Tourette", "Théâtre", "Acceptation"],
          icon: "zap"
        }
      ];

      // Format posts for Supabase
      const formattedPosts = newTestimonials.map(post => {
        return {
          id: post.id,
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          author: JSON.parse(JSON.stringify(post.author)),
          date: post.date,
          readtime: post.readtime,
          likes: post.likes,
          comments: post.comments,
          tags: post.tags,
          icon: post.icon
        };
      });

      // Insert new testimonials into Supabase
      const { error } = await supabase
        .from('blog_posts')
        .insert(formattedPosts);

      if (error) {
        console.error('Error adding new testimonials to Supabase:', error);
        toast.error("Erreur lors de l'ajout des nouveaux témoignages");
      } else {
        toast.success("Nouveaux témoignages ajoutés avec succès");
        window.location.reload();
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout des témoignages:", error);
      toast.error("Une erreur s'est produite");
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="mb-16 pb-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">Histoires vécues & Témoignages</h2>
          <p className="text-muted-foreground">Des récits humains et authentiques sur la neurodiversité</p>
        </div>
        <div className="flex gap-2">
          {isAdmin && (
            <>
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden md:flex items-center gap-2"
                onClick={addNewTestimonials}
                disabled={syncing}
              >
                <Download className="h-4 w-4" />
                {syncing ? 'Ajout en cours...' : 'Ajouter témoignages'}
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden md:flex items-center gap-2"
                onClick={syncLocalBlogsToSupabase}
                disabled={syncing}
              >
                <Download className="h-4 w-4" />
                {syncing ? 'Synchronisation...' : 'Sync Local Data'}
              </Button>
            </>
          )}
          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
            <Bookmark className="h-4 w-4" />
            Mes favoris
          </Button>
          {isAdmin ? (
            <Link to="/blog_article_import">
              <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
                <Book className="h-4 w-4" />
                Proposer un article
              </Button>
            </Link>
          ) : (
            <Button
              variant="outline" 
              size="sm" 
              className="hidden md:flex items-center gap-2"
              onClick={() => toast.info("Contactez un administrateur pour proposer un article")}
            >
              <Book className="h-4 w-4" />
              Proposer un article
            </Button>
          )}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <Button variant="default" size="sm">Tous</Button>
        <Button variant="outline" size="sm">TDAH</Button>
        <Button variant="outline" size="sm">Autisme</Button>
        <Button variant="outline" size="sm">Dyslexie</Button>
        <Button variant="outline" size="sm">Dyspraxie</Button>
        <Button variant="outline" size="sm">Dyscalculie</Button>
        <Button variant="outline" size="sm">Maladies neurodégénératives</Button>
      </div>
      
      <BlogPosts />
      
      <div className="flex md:hidden justify-center gap-4 mt-8">
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Bookmark className="h-4 w-4" />
          Mes favoris
        </Button>
        {isAdmin ? (
          <Link to="/blog_article_import">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              Proposer un article
            </Button>
          </Link>
        ) : (
          <Button
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2"
            onClick={() => toast.info("Contactez un administrateur pour proposer un article")}
          >
            <Book className="h-4 w-4" />
            Proposer un article
          </Button>
        )}
      </div>
    </div>
  );
};

export default BlogTab;
