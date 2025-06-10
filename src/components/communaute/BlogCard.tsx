
// src/components/communaute/BlogCard.tsx
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, ThumbsUp, Clock } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogPost, getAuthorName, getAuthorAvatar } from './BlogTypes';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  onClick: () => void;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index = 0, onClick, className }) => {
  // Animation variants pour l'apparition des cartes
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };
  
  // Obtenir le nom de l'auteur et l'avatar de façon sûre
  const authorName = getAuthorName(post.author);
  const avatarSrc = getAuthorAvatar(post.author);

  // Obtenir l'icône correspondante depuis Lucide
  const getIconComponent = () => {
    if (!post.icon) return null;
    
    const iconsMap: Record<string, any> = {
      heart: LucideIcons.Heart,
      brain: LucideIcons.Brain,
      book: LucideIcons.Book,
      user: LucideIcons.User,
      zap: LucideIcons.Zap,
      "message-square": LucideIcons.MessageSquare,
      "file-text": LucideIcons.FileText,
      eye: LucideIcons.Eye,
      lightbulb: LucideIcons.Lightbulb,
      puzzle: LucideIcons.Puzzle,
      music: LucideIcons.Music,
      "book-open": LucideIcons.BookOpen,
      sparkles: LucideIcons.Sparkles,
      stars: LucideIcons.Stars,
      cloud: LucideIcons.Cloud
    };
    
    const IconComponent = iconsMap[post.icon];
    return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
  };
  
  return (
    <motion.div
      className="h-full flex"
      custom={index}
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <Card 
        className={`w-full h-full flex flex-col cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] dark:hover:shadow-primary/20 border-0 bg-gradient-to-br from-background to-muted/30 backdrop-blur-sm ${className || ''}`}
        onClick={onClick}
      >
        {/* Header avec gradient et icône améliorée */}
        <CardHeader className="pb-3 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-50" />
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10 ring-2 ring-primary/20">
                <AvatarImage src={avatarSrc} alt={authorName} />
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-semibold">
                  {authorName?.[0] || '?'}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold leading-none">{authorName}</p>
                <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
              </div>
            </div>
            
            {getIconComponent() && (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <div className="text-primary">
                  {getIconComponent()}
                </div>
              </div>
            )}
          </div>
        </CardHeader>
        
        {/* Contenu principal avec meilleure typographie */}
        <CardContent className="pb-4 flex-grow">
          <CardTitle className="text-lg mb-3 line-clamp-2 font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            {post.title}
          </CardTitle>
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </CardContent>
        
        {/* Footer avec design amélioré */}
        <CardFooter className="flex justify-between items-center pt-0 mt-auto border-t border-border/50 bg-muted/20">
          <div className="flex items-center space-x-4 text-muted-foreground">
            <div className="flex items-center text-xs hover:text-primary transition-colors">
              <ThumbsUp className="h-3.5 w-3.5 mr-1" />
              <span className="font-medium">{post.likes}</span>
            </div>
            <div className="flex items-center text-xs hover:text-primary transition-colors">
              <MessageSquare className="h-3.5 w-3.5 mr-1" />
              <span className="font-medium">{post.comments}</span>
            </div>
            <div className="flex items-center text-xs hover:text-primary transition-colors">
              <Clock className="h-3.5 w-3.5 mr-1" />
              <span className="font-medium">{post.readtime}</span>
            </div>
          </div>
          
          {/* Tags avec design amélioré */}
          <div className="flex flex-wrap justify-end gap-1 max-w-[150px]">
            {post.tags.slice(0, 2).map((tag, i) => (
              <Badge 
                key={i} 
                variant="secondary" 
                className="text-xs bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 hover:from-primary/20 hover:to-secondary/20 transition-all"
              >
                {tag}
              </Badge>
            ))}
            {post.tags.length > 2 && (
              <Badge 
                variant="secondary" 
                className="text-xs bg-gradient-to-r from-muted to-muted/80 border-border hover:from-primary/10 hover:to-secondary/10 transition-all"
              >
                +{post.tags.length - 2}
              </Badge>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
