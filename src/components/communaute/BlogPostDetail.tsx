
import React from 'react';
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
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex justify-center items-start overflow-y-auto py-10"
    >
      <div className="bg-background rounded-lg shadow-lg max-w-3xl w-full mx-4 relative">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose} 
          className="absolute right-4 top-4 z-10"
        >
          ✕
        </Button>
        
        <div className="p-6 md:p-8">
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
          
          <div className="prose prose-sm md:prose-base max-w-none">
            {post.content && post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="rounded-full gap-2">
                  <Heart className="h-4 w-4" />
                  {post.likes}
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="rounded-full gap-2">
                  <MessageSquare className="h-4 w-4" />
                  {post.comments}
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="rounded-full gap-2">
                <Bookmark className="h-4 w-4" />
                Enregistrer
              </Button>
              <Button variant="outline" size="sm" className="rounded-full gap-2">
                <Share2 className="h-4 w-4" />
                Partager
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostDetail;
