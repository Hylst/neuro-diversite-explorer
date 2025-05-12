
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { toast } from 'sonner';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CalendarIcon, Book, FileText, Tag, User, Clock, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { IconSelector } from '@/components/blog/IconSelector';
import { AvatarSelector } from '@/components/blog/AvatarSelector';
import { supabase } from '@/integrations/supabase/client';

// Schéma de validation avec Zod
const formSchema = z.object({
  title: z.string().min(3, { message: 'Le titre doit contenir au moins 3 caractères' }),
  author: z.string().min(2, { message: "Le nom de l'auteur est requis" }),
  authorBio: z.string().min(10, { message: "La description de l'auteur doit contenir au moins 10 caractères" }),
  date: z.date({ required_error: 'La date de parution est requise' }).optional(),
  customDate: z.string().optional(),
  readtime: z.string().min(1, { message: 'Le temps de lecture est requis' }),
  tags: z.string().min(3, { message: 'Ajoutez au moins un mot-clé' }),
  icon: z.string().optional(),
  excerpt: z.string().min(10, { message: "L'accroche doit contenir au moins 10 caractères" }),
  content: z.string().min(100, { message: "L'article doit contenir au moins 100 caractères" }),
  password: z.string().refine(val => val === 'NeuroPass', {
    message: 'Mot de passe incorrect',
  }),
  avatarType: z.enum(['gallery', 'upload', 'url']),
  avatarUrl: z.string().optional(),
  avatarId: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const BlogArticleImport = () => {
  const navigate = useNavigate();
  const [selectedIcon, setSelectedIcon] = useState<string>('brain');
  const [selectedAvatar, setSelectedAvatar] = useState<string>('/assets/avatars/avatar-1.png');
  const [selectedAvatarId, setSelectedAvatarId] = useState<string>('avatar-1');
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null);
  const [customAvatarUrl, setCustomAvatarUrl] = useState<string>('');
  const [avatarType, setAvatarType] = useState<'gallery' | 'upload' | 'url'>('gallery');
  const [useCustomDate, setUseCustomDate] = useState<boolean>(false);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  
  // Vérifier si l'utilisateur est autorisé à accéder à cette page
  useEffect(() => {
    const checkAuthorization = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session?.user?.email === 'geoffroy.streit@gmail.com') {
        setIsAuthorized(true);
      } else {
        // Vérifier si l'utilisateur a fourni le mot de passe correct dans l'URL
        const queryParams = new URLSearchParams(window.location.search);
        const accessCode = queryParams.get('code');
        
        if (accessCode === 'neuro2025') {
          setIsAuthorized(true);
        } else {
          toast.error("Vous n'êtes pas autorisé à accéder à cette page");
          setTimeout(() => {
            navigate('/communaute?tab=blog');
          }, 2000);
        }
      }
    };
    
    checkAuthorization();
  }, [navigate]);
  
  // Initialiser le formulaire avec useForm et le schéma de validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      author: '',
      authorBio: '',
      tags: '',
      icon: 'brain',
      excerpt: '',
      content: '',
      password: 'NeuroPass', // Fixed: Changed from empty string to 'NeuroPass' to match the type constraint
      readtime: '',
      customDate: '',
      avatarType: 'gallery',
      avatarId: 'avatar-1',
      avatarUrl: '',
    }
  });

  const onSubmit = async (values: FormValues) => {
    try {
      // Préparer les données pour l'enregistrement
      const tagsArray = values.tags.split(',').map(tag => tag.trim());
      
      // Déterminer la date à utiliser (personnalisée ou sélectionnée)
      let formattedDate: string;
      if (useCustomDate && values.customDate) {
        formattedDate = values.customDate;
      } else if (values.date) {
        formattedDate = format(values.date, 'dd MMMM yyyy', { locale: fr });
      } else {
        formattedDate = format(new Date(), 'dd MMMM yyyy', { locale: fr });
      }
      
      // Génération d'un ID unique pour l'article
      const id = crypto.randomUUID();
      
      // Déterminer quelle source d'avatar utiliser
      let avatar_id = null;
      let avatar_url = null;
      
      if (avatarType === 'gallery') {
        avatar_id = selectedAvatarId;
      } else if (avatarType === 'upload' && uploadedAvatar) {
        avatar_url = uploadedAvatar;
      } else if (avatarType === 'url' && customAvatarUrl) {
        avatar_url = customAvatarUrl;
      }
      
      // Création de l'objet article
      const newArticle = {
        id,
        title: values.title,
        excerpt: values.excerpt,
        content: values.content,
        author: {
          name: values.author,
          avatar: selectedAvatar, // Pour la compatibilité avec le format existant
          bio: values.authorBio
        },
        date: formattedDate,
        readtime: values.readtime,
        likes: 0,
        comments: 0,
        tags: tagsArray,
        icon: selectedIcon,
        avatar_id,
        avatar_url
      };

      // Enregistrer l'article dans la base de données
      const { error } = await supabase
        .from('blog_posts')
        .insert({
          ...newArticle,
          author: JSON.parse(JSON.stringify(newArticle.author)) // Convert to Json properly
        });

      if (error) {
        console.error("Erreur d'enregistrement:", error);
        toast.error("Erreur lors de l'enregistrement de l'article");
        return;
      }

      // Afficher un message de succès
      toast.success("L'article a été enregistré avec succès");
      
      // Rediriger vers la page du blog
      setTimeout(() => {
        navigate('/communaute?tab=blog');
      }, 2000);
      
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      toast.error("Une erreur s'est produite lors de l'enregistrement");
    }
  };

  const handleAvatarChange = (avatar: string, type: 'gallery' | 'upload' | 'url', id?: string) => {
    setSelectedAvatar(avatar);
    setAvatarType(type);
    
    if (type === 'gallery' && id) {
      setSelectedAvatarId(id);
      form.setValue('avatarId', id);
    } else if (type === 'upload') {
      setUploadedAvatar(avatar);
      form.setValue('avatarUrl', avatar);
    } else if (type === 'url') {
      setCustomAvatarUrl(avatar);
      form.setValue('avatarUrl', avatar);
    }
    
    form.setValue('avatarType', type);
  };

  if (!isAuthorized) {
    return (
      <>
        <div className="container max-w-4xl py-12 flex flex-col items-center justify-center min-h-[50vh]">
          <h1 className="text-2xl font-bold mb-4">Accès restreint</h1>
          <p className="text-muted-foreground">Vous n'êtes pas autorisé à accéder à cette page</p>
          <Button 
            onClick={() => navigate('/communaute?tab=blog')} 
            className="mt-4"
          >
            Retourner au blog
          </Button>
        </div>      </>
    );
  }

  return (
    <>
      <div className="container max-w-4xl py-12">
        <Card className="bg-card dark:bg-gray-950">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Import d'Article de Blog</CardTitle>
            <CardDescription>
              Remplissez le formulaire pour ajouter un nouvel article au blog
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Titre */}
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Titre
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Titre de l'article" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Extrait / Accroche */}
                <FormField
                  control={form.control}
                  name="excerpt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Accroche (extrait court)
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Court résumé de l'article (sera affiché sur la carte)" 
                          className="min-h-[60px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Auteur */}
                <FormField
                  control={form.control}
                  name="author"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Auteur
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nom de l'auteur" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Avatar de l'auteur */}
                <FormField
                  control={form.control}
                  name="avatarType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Avatar de l'auteur
                      </FormLabel>
                      <FormControl>
                        <AvatarSelector 
                          selectedAvatar={selectedAvatar}
                          onSelectAvatar={(avatar, type, id) => {
                            handleAvatarChange(avatar, type as 'gallery' | 'upload' | 'url', id);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Description de l'auteur */}
                <FormField
                  control={form.control}
                  name="authorBio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Descriptif auteur
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Courte biographie de l'auteur" 
                          className="min-h-[80px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Sélection du mode de saisie de la date */}
                <div className="flex items-center space-x-2">
                  <Button
                    type="button"
                    variant={!useCustomDate ? "default" : "outline"}
                    size="sm"
                    onClick={() => setUseCustomDate(false)}
                  >
                    Sélectionner une date
                  </Button>
                  <Button
                    type="button"
                    variant={useCustomDate ? "default" : "outline"}
                    size="sm"
                    onClick={() => setUseCustomDate(true)}
                  >
                    Saisir une date
                  </Button>
                </div>

                {/* Date de parution - Calendrier ou Saisie manuelle */}
                {!useCustomDate ? (
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4" />
                          Date de parution
                        </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "dd MMMM yyyy", { locale: fr })
                                ) : (
                                  <span>Sélectionner une date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date > new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ) : (
                  <FormField
                    control={form.control}
                    name="customDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4" />
                          Date de parution (format: JJ mois AAAA)
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Ex: 15 avril 2025" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Entrez la date au format "JJ mois AAAA" (ex: 15 avril 2025)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {/* Temps de lecture */}
                <FormField
                  control={form.control}
                  name="readtime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Temps de lecture
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: 5 min" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Mots clés */}
                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        Mots clés
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Mots clés séparés par des virgules" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Sélection d'icône */}
                <FormField
                  control={form.control}
                  name="icon"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Book className="h-4 w-4" />
                        Icône
                      </FormLabel>
                      <FormControl>
                        <IconSelector 
                          selectedIcon={selectedIcon} 
                          onSelectIcon={(icon) => {
                            setSelectedIcon(icon);
                            field.onChange(icon);
                          }} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Contenu de l'article */}
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Book className="h-4 w-4" />
                        Article complet
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Contenu de l'article" 
                          className="min-h-[200px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Mot de passe */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Mot de passe
                      </FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Entrez le mot de passe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <CardFooter className="px-0 pb-0">
                  <Button type="submit" className="w-full">
                    Soumettre l'article
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>    </>
  );
};

export default BlogArticleImport;
