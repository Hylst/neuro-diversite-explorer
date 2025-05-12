
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
  index: number;
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index, onClick }) => {
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
        className="w-full h-full flex flex-col cursor-pointer transition-all hover:shadow-md dark:hover:shadow-primary/10"
        onClick={onClick}
      >
        <CardHeader className="pb-3 flex flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={avatarSrc} alt={authorName} />
              <AvatarFallback>{authorName?.[0] || '?'}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{authorName}</p>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </div>
          </div>
          
          {getIconComponent() && (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
              {getIconComponent()}
            </div>
          )}
        </CardHeader>
        
        <CardContent className="pb-3 flex-grow">
          <CardTitle className="text-lg mb-2 line-clamp-2">{post.title}</CardTitle>
          <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </CardContent>
        
        <CardFooter className="flex justify-between items-center pt-0 mt-auto">
          <div className="flex items-center space-x-4 text-muted-foreground">
            <div className="flex items-center text-xs">
              <ThumbsUp className="h-3.5 w-3.5 mr-1" />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center text-xs">
              <MessageSquare className="h-3.5 w-3.5 mr-1" />
              <span>{post.comments}</span>
            </div>
            <div className="flex items-center text-xs">
              <Clock className="h-3.5 w-3.5 mr-1" />
              <span>{post.readtime}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-end gap-1 max-w-[150px]">
            {post.tags.slice(0, 2).map((tag, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {post.tags.length > 2 && (
              <Badge variant="outline" className="text-xs">
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
