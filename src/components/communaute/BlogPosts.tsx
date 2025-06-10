
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
import { Shield, MessageSquare, Calendar } from 'lucide-react';

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
    const fetchBlogPosts = async () => {
      setLoading(true);
      
      // Start with local data immediately
      setPosts(blogPosts);
      
      try {
        // Create a timeout promise
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Timeout')), 5000)
        );
        
        // Race between fetch and timeout
        const { data: supabasePosts, error } = await Promise.race([
          supabase
            .from('blog_posts')
            .select('*')
            .order('created_at', { ascending: false }),
          timeoutPromise
        ]) as any;
        
        if (error) throw error;
        
        if (supabasePosts && supabasePosts.length > 0) {
          // Create a map of existing posts by title to avoid duplicates
          const existingTitles = new Set(blogPosts.map(post => post.title.toLowerCase().trim()));
          
          // Filter out Supabase posts that have the same title as local posts
          const uniqueSupabasePosts = supabasePosts.filter((post: any) => 
            !existingTitles.has(post.title?.toLowerCase().trim() || '')
          );
          
          const allPosts = [...blogPosts, ...uniqueSupabasePosts];
          
          // Sort posts: Geoffroy S. first, then by date
          const sortedPosts = allPosts.sort((a, b) => {
            const authorA = getAuthorName(a.author);
            const authorB = getAuthorName(b.author);
            
            // Prioritize Geoffroy S. articles
            const isGeoffroyA = authorA.toLowerCase().includes('geoffroy s.') || authorA.toLowerCase().includes('geoffroy streit');
            const isGeoffroyB = authorB.toLowerCase().includes('geoffroy s.') || authorB.toLowerCase().includes('geoffroy streit');
            
            if (isGeoffroyA && !isGeoffroyB) return -1;
            if (!isGeoffroyA && isGeoffroyB) return 1;
            
            // Then sort by date (newest first)
            const dateA = new Date(a.date || a.created_at);
            const dateB = new Date(b.date || b.created_at);
            return dateB.getTime() - dateA.getTime();
          });
          
          setPosts(sortedPosts);
          
          if (uniqueSupabasePosts.length > 0) {
            toast.success(`${allPosts.length} articles chargés (${blogPosts.length} locaux + ${uniqueSupabasePosts.length} Supabase)`);
          } else {
            toast.success(`${blogPosts.length} articles locaux chargés`);
          }
        } else {
          // Sort local posts: Geoffroy S. first, then by date
          const sortedLocalPosts = [...blogPosts].sort((a, b) => {
          const authorA = getAuthorName(a.author);
          const authorB = getAuthorName(b.author);
            
            // Prioritize Geoffroy S. articles
            const isGeoffroyA = authorA.toLowerCase().includes('geoffroy s.') || authorA.toLowerCase().includes('geoffroy streit');
            const isGeoffroyB = authorB.toLowerCase().includes('geoffroy s.') || authorB.toLowerCase().includes('geoffroy streit');
            
            if (isGeoffroyA && !isGeoffroyB) return -1;
            if (!isGeoffroyA && isGeoffroyB) return 1;
            
            // Then sort by date (newest first)
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB.getTime() - dateA.getTime();
          });
          
          setPosts(sortedLocalPosts);
          toast.success(`${blogPosts.length} articles locaux chargés`);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des articles:', error);
        // Sort local posts even on error
        const sortedLocalPosts = [...blogPosts].sort((a, b) => {
          const authorA = getAuthorName(a.author);
          const authorB = getAuthorName(b.author);
          
          // Prioritize Geoffroy S. articles
          const isGeoffroyA = authorA.toLowerCase().includes('geoffroy s.') || authorA.toLowerCase().includes('geoffroy streit');
          const isGeoffroyB = authorB.toLowerCase().includes('geoffroy s.') || authorB.toLowerCase().includes('geoffroy streit');
          
          if (isGeoffroyA && !isGeoffroyB) return -1;
          if (!isGeoffroyA && isGeoffroyB) return 1;
          
          // Then sort by date (newest first)
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB.getTime() - dateA.getTime();
        });
        
        setPosts(sortedLocalPosts);
        toast.success(`${blogPosts.length} articles locaux chargés (Supabase indisponible)`);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogPosts();
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
      {/* Header avec statistiques et filtres */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 border border-border/50">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Articles de Blog
            </h2>
            <p className="text-sm text-muted-foreground">
              {filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''} 
              {selectedTag ? ` dans "${selectedTag}"` : ' au total'}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
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
                  className="bg-background/50 backdrop-blur-sm"
                >
                  Sync Local Data
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  onClick={() => navigate('/blog_article_import')}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Proposer un article
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {filteredPosts.length > 0 ? (
        <>
          {/* Section vedette */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-primary">Article en vedette</h3>
            {(() => {
              // Find featured article by title or use first article as fallback
              const featuredArticle = filteredPosts.find(post => 
                post.title.toLowerCase().includes('marre d\'apprendre') ||
                post.title.toLowerCase().includes('clé de toutes les aventures')
              ) || filteredPosts[0];
              
              return featuredArticle && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-xl border border-primary/10 shadow-lg">
                  <div className="space-y-4">
                    <BlogCard 
                      post={featuredArticle} 
                      onClick={() => setSelectedPost(featuredArticle)}
                      className="border-0 shadow-lg bg-background/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto shadow-lg">
                         <Calendar className="h-10 w-10 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-lg">Article vedette</h4>
                        <p className="text-muted-foreground max-w-sm leading-relaxed">
                          Découvrez cet article exceptionnel sélectionné par notre équipe pour sa pertinence et son impact sur la communauté neurodivergente.
                        </p>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-primary">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        <span>Lecture recommandée</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()} 
          </div>
          
          {/* Grille des autres articles */}
          {filteredPosts.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {(() => {
                // Find featured article to exclude it from the main grid
                const featuredArticle = filteredPosts.find(post => 
                  post.title.toLowerCase().includes('marre d\'apprendre') ||
                  post.title.toLowerCase().includes('clé de toutes les aventures')
                ) || filteredPosts[0];
                
                // Filter out the featured article from the main grid
                const remainingPosts = filteredPosts.filter(post => post.id !== featuredArticle?.id);
                
                return remainingPosts.map((post, index) => (
                  <motion.div 
                    key={post.id} 
                    className="h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                  >
                    <BlogCard 
                      post={post} 
                      index={index + 1}
                      onClick={() => setSelectedPost(post)}
                    />
                  </motion.div>
                ));
              })()} 
            </div>
          )}
          
          {(() => {
            // Calculate remaining posts excluding featured article
            const featuredArticle = filteredPosts.find(post => 
              post.title.toLowerCase().includes('marre d\'apprendre') ||
              post.title.toLowerCase().includes('clé de toutes les aventures')
            ) || filteredPosts[0];
            
            const remainingPosts = filteredPosts.filter(post => post.id !== featuredArticle?.id);
            
            return remainingPosts.length > 9 && (
              <motion.div 
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/5"
                >
                  Voir plus d'articles
                </Button>
              </motion.div>
            );
          })()}
        </>
      ) : (
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Aucun article trouvé</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              {selectedTag 
                ? `Aucun article trouvé pour le tag "${selectedTag}". Essayez un autre filtre.`
                : 'Aucun article disponible pour le moment.'
              }
            </p>
            {selectedTag && (
              <Button 
                variant="outline" 
                onClick={() => setSelectedTag(null)}
                className="mt-4"
              >
                Voir tous les articles
              </Button>
            )}
          </div>
        </motion.div>
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
