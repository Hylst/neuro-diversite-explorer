
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageSquare, Share2, Bookmark, Calendar, Clock, X } from 'lucide-react';
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
          className="absolute right-4 top-4 z-10 hover:bg-destructive/10 hover:text-destructive transition-colors rounded-full"
        >
          <X className="h-4 w-4" />
        </Button>
        
        <div 
          ref={contentRef}
          className="p-6 md:p-8 max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
        >
          {/* Header with tags and icon */}
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            {post.tags && post.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                {tag}
              </Badge>
            ))}
            <IconComponent className="h-5 w-5 text-primary ml-auto" />
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-foreground">{post.title}</h1>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 p-4 bg-muted/30 rounded-lg border border-border/50">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                <img 
                  src={getAuthorAvatar(post.author)} 
                  alt={getAuthorName(post.author)} 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://i.pravatar.cc/150?u=default";
                  }}
                />
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">{getAuthorName(post.author)}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{getAuthorBio(post.author)}</p>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-3 text-sm text-muted-foreground bg-background/50 px-3 py-2 rounded-md">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <span className="text-border">•</span>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readtime}</span>
              </div>
            </div>
          </div>
          
          {/* Article content with improved formatting */}
          <article className="prose prose-sm md:prose-lg max-w-none dark:prose-invert">
            <div className="space-y-4">
              {post.content && (() => {
                // Enhanced content processing for better formatting
                const processContent = (content: string) => {
                  // Handle different types of line breaks and formatting
                  return content
                    .split(/\n\s*\n/) // Split on double line breaks (paragraphs)
                    .filter(paragraph => paragraph.trim()) // Remove empty paragraphs
                    .map((paragraph, index) => {
                      // Handle single line breaks within paragraphs
                      const lines = paragraph.split('\n').map(line => line.trim()).filter(line => line);
                      
                      return (
                        <div key={index} className="mb-6">
                          {lines.map((line, lineIndex) => {
                            // Check if line looks like a title/header (starts with capital, short, no punctuation at end)
                            const isTitle = line.length < 100 && 
                                          /^[A-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞŸ]/.test(line) && 
                                          !line.endsWith('.') && !line.endsWith('!') && !line.endsWith('?') &&
                                          !line.includes(',');
                            
                            // Check if line is a list item
                            const isListItem = /^[-•*]\s/.test(line) || /^\d+\.\s/.test(line);
                            
                            if (isTitle && lines.length > 1) {
                              return (
                                <h3 key={lineIndex} className="text-lg font-semibold text-foreground mb-3 mt-6 first:mt-0">
                                  {line}
                                </h3>
                              );
                            } else if (isListItem) {
                              return (
                                <li key={lineIndex} className="ml-4 mb-2 leading-relaxed text-foreground/90">
                                  {line.replace(/^[-•*]\s/, '').replace(/^\d+\.\s/, '')}
                                </li>
                              );
                            } else {
                              return (
                                <p key={lineIndex} className="leading-relaxed text-foreground/90 mb-3">
                                  {line}
                                </p>
                              );
                            }
                          })}
                        </div>
                      );
                    });
                };
                
                return processContent(post.content);
              })()}
            </div>
          </article>
          
          {/* Enhanced action bar */}
          <div className="mt-12 pt-6 border-t border-border/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="rounded-full gap-2 hover:bg-red-50 hover:text-red-600 hover:border-red-200 dark:hover:bg-red-950 dark:hover:text-red-400 transition-all duration-200">
                  <Heart className="h-4 w-4" />
                  <span className="font-medium">{post.likes}</span>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full gap-2 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 dark:hover:bg-blue-950 dark:hover:text-blue-400 transition-all duration-200">
                  <MessageSquare className="h-4 w-4" />
                  <span className="font-medium">{post.comments}</span>
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="rounded-full gap-2 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200 dark:hover:bg-amber-950 dark:hover:text-amber-400 transition-all duration-200">
                  <Bookmark className="h-4 w-4" />
                  <span className="hidden sm:inline">Enregistrer</span>
                </Button>
                <Button variant="outline" size="sm" className="rounded-full gap-2 hover:bg-green-50 hover:text-green-600 hover:border-green-200 dark:hover:bg-green-950 dark:hover:text-green-400 transition-all duration-200">
                  <Share2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Partager</span>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Enhanced keyboard navigation hint */}
          <div className="mt-6 pt-4 border-t border-border/30 text-xs text-muted-foreground text-center">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              <span>💡 Navigation :</span>
              <kbd className="px-2 py-1 bg-muted rounded-md text-xs font-mono border border-border/50">ESC</kbd>
              <span>fermer</span>
              <span>•</span>
              <kbd className="px-2 py-1 bg-muted rounded-md text-xs font-mono border border-border/50">↑↓</kbd>
              <span>défiler</span>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogPostDetail;
