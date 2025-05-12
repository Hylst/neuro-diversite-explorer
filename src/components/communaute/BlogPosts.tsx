
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import blogPosts from './BlogData';
import BlogCard from './BlogCard';
import BlogPostDetail from './BlogPostDetail';
import BlogFilter from './BlogFilter';
import { BlogPost, getAuthorName, getAuthorAvatar } from './BlogTypes';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';

// Composant principal pour afficher la liste des articles
const BlogPosts: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAdmin(session?.user?.email === 'geoffroy.streit@gmail.com');
    };
    
    checkAdmin();
  }, []);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*');
        
        if (error) {
          console.error('Error fetching blog posts from Supabase:', error);
          // Fallback to local data
          console.log('Falling back to local blog data');
          setPosts(blogPosts);
        } else if (data && data.length > 0) {
          console.log('Successfully loaded', data.length, 'posts from Supabase');
          // Convert Supabase data to BlogPost type
          const formattedPosts = data.map(post => ({
            id: post.id,
            title: post.title,
            excerpt: post.excerpt,
            content: post.content,
            author: post.author,
            date: post.date,
            readtime: post.readtime,
            likes: post.likes || 0,
            comments: post.comments || 0,
            tags: post.tags,
            icon: post.icon,
            avatar_id: post.avatar_id,
            avatar_url: post.avatar_url
          })) as BlogPost[];
          setPosts(formattedPosts);
        } else {
          // If no data in Supabase, sync local data to Supabase
          console.log('No posts found in Supabase, syncing local data');
          await syncLocalDataToSupabase();
          setPosts(blogPosts);
        }
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
        // Fallback to local data
        setPosts(blogPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Function to sync local data to Supabase
  const syncLocalDataToSupabase = async () => {
    try {
      // Check if any of the local posts already exist in Supabase
      const { data: existingPosts } = await supabase
        .from('blog_posts')
        .select('id');
      
      const existingIds = existingPosts ? existingPosts.map(post => post.id) : [];
      
      // Filter out posts that already exist in Supabase
      const postsToInsert = blogPosts.filter(post => !existingIds.includes(post.id));
      
      if (postsToInsert.length === 0) {
        console.log('All local posts already exist in Supabase');
        return;
      }

      // Convert BlogPost[] to the format expected by Supabase
      const formattedPosts = postsToInsert.map(post => {
        // Use the helper functions to get avatar information
        const avatarPath = getAuthorAvatar(post.author);
        
        // Check if the avatar is from our predefined set
        const avatar_id = avatarPath.includes('/assets/avatars/') 
          ? avatarPath.split('/').pop()?.split('.')[0] 
          : null;
        
        // If not a local avatar, it might be a custom URL
        const avatar_url = !avatar_id && avatarPath && !avatarPath.includes('/assets/avatars/') 
          ? avatarPath : null;
        
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
          icon: post.icon,
          avatar_id,
          avatar_url
        };
      });

      // Insert local posts into Supabase
      const { error } = await supabase
        .from('blog_posts')
        .insert(formattedPosts);

      if (error) {
        console.error('Error syncing local blog posts to Supabase:', error);
        toast.error("Erreur lors de la synchronisation des articles de blog");
      } else {
        console.log('Successfully synced', postsToInsert.length, 'local blog posts to Supabase');
        toast.success(`${postsToInsert.length} articles de blog synchronisés avec succès`);
      }
    } catch (error) {
      console.error('Error in syncLocalDataToSupabase:', error);
    }
  };

  // Filtrer les articles par tag
  const filteredPosts = selectedTag 
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts;
  
  // Tags uniques pour le filtre
  const uniqueTags = Array.from(new Set(posts.flatMap(post => post.tags)));
  
  if (loading) {
    return <div className="text-center py-12">Chargement des articles...</div>;
  }
  
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <BlogFilter 
          tags={uniqueTags} 
          selectedTag={selectedTag} 
          onSelectTag={setSelectedTag} 
        />
        
        {isAdmin && (
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => syncLocalDataToSupabase()}
            >
              Sync Local Data
            </Button>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => navigate('/blog_article_import')}
            >
              <Shield className="mr-2 h-4 w-4" />
              Proposer un article
            </Button>
          </div>
        )}
      </div>
      
      {filteredPosts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {filteredPosts.slice(0, 3).map((post, index) => (
              <div key={post.id} className="h-full">
                <BlogCard 
                  post={post} 
                  index={index}
                  onClick={() => setSelectedPost(post)}
                />
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.slice(3).map((post, index) => (
              <div key={post.id} className="h-full">
                <BlogCard 
                  post={post} 
                  index={index + 3}
                  onClick={() => setSelectedPost(post)}
                />
              </div>
            ))}
          </div>
          
          {filteredPosts.length > 9 && (
            <div className="text-center mt-8">
              <Button variant="outline" className="rounded-full px-8">
                Voir plus d'articles
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">Aucun article ne correspond à votre recherche</p>
          <Button onClick={() => setSelectedTag(null)}>Voir tous les articles</Button>
        </div>
      )}
      
      {selectedPost && (
        <BlogPostDetail 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
        />
      )}
    </div>
  );
};

export default BlogPosts;
