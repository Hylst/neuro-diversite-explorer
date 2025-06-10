
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageSquare, Share2, Bookmark, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { BlogPost, getAuthorName, getAuthorAvatar, getAuthorBio } from './BlogTypes';

interface BlogPostDetailProps {
  post: BlogPost;
  onClose: () => void;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post, onClose }) => {
  const IconComponent = post.icon ? Calendar : Calendar;
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowUp':
          event.preventDefault();
          if (contentRef.current) {
            contentRef.current.scrollBy({ top: -100, behavior: 'smooth' });
          }
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (contentRef.current) {
            contentRef.current.scrollBy({ top: 100, behavior: 'smooth' });
          }
          break;
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  
  // Handle click outside to close
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  
  return (
    <motion.div
      ref={modalRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-start overflow-y-auto py-4 md:py-10"
      onClick={handleBackdropClick}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-background rounded-xl shadow-2xl max-w-4xl w-full mx-4 relative border border-border/50"
        onClick={(e) => e.stopPropagation()}
      >
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose} 
          className="absolute right-4 top-4 z-10 hover:bg-destructive/10 hover:text-destructive transition-colors"
        >
          ✕
        </Button>
        
        <div 
          ref={contentRef}
          className="p-6 md:p-8 max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
        >
          <div className="flex items-center gap-2 mb-6">
            {post.tags && post.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-secondary/20">
                {tag}
              </Badge>
            ))}
            <IconComponent className="h-5 w-5 text-primary ml-auto" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{post.title}</h2>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <img 
                  src={getAuthorAvatar(post.author)} 
                  alt={getAuthorName(post.author)} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://i.pravatar.cc/150?u=default";
                  }}
                />
              </Avatar>
              <div>
                <p className="font-medium">{getAuthorName(post.author)}</p>
                <p className="text-sm text-muted-foreground">{getAuthorBio(post.author)}</p>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {post.date}
              <span className="mx-1">•</span>
              <Clock className="h-4 w-4" />
              {post.readtime}
            </div>
          </div>
          
          <div className="prose prose-sm md:prose-lg max-w-none dark:prose-invert">
            {post.content && post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-foreground/90">{paragraph}</p>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="rounded-full gap-2 hover:bg-primary/10 hover:text-primary transition-colors">
                <Heart className="h-4 w-4" />
                {post.likes}
              </Button>
              <Button variant="outline" size="sm" className="rounded-full gap-2 hover:bg-primary/10 hover:text-primary transition-colors">
                <MessageSquare className="h-4 w-4" />
                {post.comments}
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="rounded-full gap-2 hover:bg-primary/10 hover:text-primary transition-colors">
                <Bookmark className="h-4 w-4" />
                Enregistrer
              </Button>
              <Button variant="outline" size="sm" className="rounded-full gap-2 hover:bg-primary/10 hover:text-primary transition-colors">
                <Share2 className="h-4 w-4" />
                Partager
              </Button>
            </div>
          </div>
          
          {/* Keyboard navigation hint */}
          <div className="mt-4 pt-4 border-t border-border/30 text-xs text-muted-foreground text-center">
            <p>💡 Utilisez <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">ESC</kbd> pour fermer • <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">↑↓</kbd> pour faire défiler</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogPostDetail;
