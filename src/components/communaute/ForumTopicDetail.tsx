import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, ThumbsUp, Flag, Share2, Reply, ArrowLeft, Bold, Italic, List, ListOrdered, AtSign, Link as LinkIcon, Image } from 'lucide-react';
import { toast } from 'sonner';
import { ForumTopicProps } from './ForumTopicItem';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ForumTopicDetailProps {
  topic: ForumTopicProps;
  onBack: () => void;
}

interface ForumReply {
  id: string;
  author: string;
  content: string;
  date: string;
  avatar?: string;
  isAuthor?: boolean;
  likes: number;
}

const ForumTopicDetail: React.FC<ForumTopicDetailProps> = ({ topic, onBack }) => {
  const [replyContent, setReplyContent] = useState('');
  const [showReplyForm, setShowReplyForm] = useState(false);
  
  // Exemple de réponses pour la démonstration
  const [replies, setReplies] = useState<ForumReply[]>([
    {
      id: 'reply1',
      author: 'Dr. Martin',
      content: 'Bonjour, je suis psychologue spécialisé dans la neurodiversité. Pour expliquer la neurodiversité à votre entourage, je vous conseille de commencer par des analogies simples. Par exemple, comparer le cerveau à un système d\'exploitation : certains fonctionnent avec Windows, d\'autres avec Mac OS ou Linux. Aucun n\'est défectueux, ils sont juste différents et ont chacun leurs forces et particularités.',
      date: '2025-05-08',
      avatar: '',
      isAuthor: true,
      likes: 8
    },
    {
      id: 'reply2',
      author: 'Sophie_TD',
      content: 'J\'ai trouvé très utile de partager des articles et vidéos courtes avec ma famille. Parfois, entendre les explications d\'une tierce personne est plus efficace que nos propres mots. J\'ai aussi organisé une soirée "questions-réponses" où chacun pouvait poser ses questions sans jugement.',
      date: '2025-05-09',
      avatar: '',
      likes: 5
    },
    {
      id: 'reply3',
      author: 'ParentCompréhensif',
      content: 'Ce qui a fonctionné pour nous, c\'est d\'expliquer les comportements spécifiques plutôt que les étiquettes. Par exemple, au lieu de dire "mon enfant est autiste", j\'explique "mon enfant est sensible aux bruits forts" ou "il a besoin de routines prévisibles pour se sentir en sécurité". Ça aide les gens à comprendre concrètement.',
      date: '2025-05-09',
      avatar: '',
      likes: 3
    }
  ]);

  const handleReplySubmit = () => {
    if (!replyContent.trim()) {
      toast.error("Votre réponse ne peut pas être vide");
      return;
    }
    
    // Ajouter la nouvelle réponse
    const newReply: ForumReply = {
      id: `reply${replies.length + 1}`,
      author: 'Vous',
      content: replyContent,
      date: new Date().toISOString().split('T')[0],
      isAuthor: false,
      likes: 0
    };
    
    setReplies([...replies, newReply]);
    setReplyContent('');
    setShowReplyForm(false);
    toast.success("Votre réponse a été publiée");
  };

  const handleLike = (replyId: string) => {
    setReplies(replies.map(reply => {
      if (reply.id === replyId) {
        return { ...reply, likes: reply.likes + 1 };
      }
      return reply;
    }));
    toast.success("Merci pour votre appréciation");
  };

  const addFormatting = (format: string) => {
    let formattedText = '';
    
    switch (format) {
      case 'bold':
        formattedText = `**texte en gras**`;
        break;
      case 'italic':
        formattedText = `*texte en italique*`;
        break;
      case 'list':
        formattedText = `\n- élément 1\n- élément 2\n- élément 3\n`;
        break;
      case 'ordered-list':
        formattedText = `\n1. premier élément\n2. deuxième élément\n3. troisième élément\n`;
        break;
      case 'link':
        formattedText = `[texte du lien](https://exemple.com)`;
        break;
      case 'mention':
        formattedText = `@utilisateur`;
        break;
      case 'image':
        formattedText = `![description](URL de l'image)`;
        break;
      default:
        formattedText = '';
    }
    
    setReplyContent(prev => prev + formattedText);
  };

  // Fonction pour obtenir les initiales d'un nom
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Fonction pour formater le contenu (simulation simple de Markdown)
  const formatContent = (content: string): string => {
    let formatted = content;
    
    // Remplacer les ** par des balises strong
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Remplacer les * par des balises em
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Remplacer les listes
    formatted = formatted.replace(/- (.*?)(?:\n|$)/g, '<li>$1</li>');
    formatted = formatted.replace(/\d+\. (.*?)(?:\n|$)/g, '<li>$1</li>');
    
    // Remplacer les liens
    formatted = formatted.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>');
    
    return formatted;
  };

  return (
    <div className="space-y-4">
      <Button variant="ghost" onClick={onBack} className="mb-2">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Retour aux discussions
      </Button>
      
      <Card>
        <CardHeader>
          <div className="flex items-start gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={topic.avatar} alt={topic.author} />
              <AvatarFallback>{getInitials(topic.author)}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <CardTitle className="text-xl">{topic.title}</CardTitle>
                {topic.isNew && (
                  <Badge variant="outline" className="text-xs bg-primary/10 text-primary">
                    Nouveau
                  </Badge>
                )}
              </div>
              
              <CardDescription className="mt-1">
                Posté par <span className="font-medium">{topic.author}</span> le {topic.date}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="prose prose-sm max-w-none">
            <p>
              Bonjour à tous,<br /><br />
              
              J'ai récemment reçu un diagnostic de TDAH et je cherche des conseils pour expliquer ma neurodiversité à ma famille et mes amis. Certains semblent sceptiques ou ne comprennent pas vraiment ce que cela signifie.<br /><br />
              
              Avez-vous des suggestions d'approches ou de ressources qui pourraient m'aider ? Comment avez-vous abordé ce sujet avec votre entourage ?<br /><br />
              
              Merci d'avance pour vos conseils !
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-6">
            <Button variant="outline" size="sm" className="text-xs">
              <ThumbsUp className="h-3.5 w-3.5 mr-1.5" />
              J'aime
            </Button>
            
            <Button variant="outline" size="sm" className="text-xs" onClick={() => setShowReplyForm(true)}>
              <Reply className="h-3.5 w-3.5 mr-1.5" />
              Répondre
            </Button>
            
            <Button variant="outline" size="sm" className="text-xs">
              <Share2 className="h-3.5 w-3.5 mr-1.5" />
              Partager
            </Button>
            
            <Button variant="outline" size="sm" className="text-xs">
              <Flag className="h-3.5 w-3.5 mr-1.5" />
              Signaler
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex items-center gap-2 mt-8 mb-4">
        <MessageCircle className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Réponses ({replies.length})</h3>
      </div>
      
      <ScrollArea className="h-[500px] pr-4">
        <div className="space-y-6">
          {replies.map((reply) => (
            <Card key={reply.id} className={reply.isAuthor ? "border-primary/30 bg-primary/5" : ""}>
              <CardHeader className="pb-2">
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={reply.avatar} alt={reply.author} />
                    <AvatarFallback>{getInitials(reply.author)}</AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{reply.author}</span>
                      {reply.isAuthor && (
                        <Badge variant="outline" className="text-xs bg-blue-100 text-blue-800">
                          Expert
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-xs">{reply.date}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: formatContent(reply.content) }} />
                
                <div className="flex items-center gap-3 mt-4">
                  <Button variant="ghost" size="sm" className="text-xs h-7 px-2" onClick={() => handleLike(reply.id)}>
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    {reply.likes > 0 ? reply.likes : "J'aime"}
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="text-xs h-7 px-2" onClick={() => setShowReplyForm(true)}>
                    <Reply className="h-3 w-3 mr-1" />
                    Répondre
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
      
      {showReplyForm ? (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-base">Votre réponse</CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="flex flex-wrap gap-1 mb-2">
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => addFormatting('bold')}>
                <Bold className="h-3.5 w-3.5" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => addFormatting('italic')}>
                <Italic className="h-3.5 w-3.5" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => addFormatting('list')}>
                <List className="h-3.5 w-3.5" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => addFormatting('ordered-list')}>
                <ListOrdered className="h-3.5 w-3.5" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => addFormatting('link')}>
                <LinkIcon className="h-3.5 w-3.5" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => addFormatting('mention')}>
                <AtSign className="h-3.5 w-3.5" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => addFormatting('image')}>
                <Image className="h-3.5 w-3.5" />
              </Button>
            </div>
            
            <Textarea
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              placeholder="Partagez votre expérience ou vos conseils..."
              className="min-h-[150px]"
            />
            
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setShowReplyForm(false)}>Annuler</Button>
              <Button onClick={handleReplySubmit}>Publier</Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Button 
          onClick={() => setShowReplyForm(true)} 
          className="w-full mt-4"
        >
          <Reply className="h-4 w-4 mr-2" />
          Répondre à cette discussion
        </Button>
      )}
    </div>
  );
};

export default ForumTopicDetail;