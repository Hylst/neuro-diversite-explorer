
import React, { useState } from 'react';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Le titre doit contenir au moins 3 caractères."
  }),
  type: z.string().min(1, {
    message: "Veuillez sélectionner un type de ressource."
  }),
  link: z.string().url({
    message: "Veuillez entrer une URL valide."
  }),
  description: z.string().min(10, {
    message: "La description doit contenir au moins 10 caractères."
  }),
});

const ResourceForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      type: "article",
      link: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      console.log("Données soumises:", values);
      
      // Vous pouvez ajouter l'envoi des données à Supabase ici
      // en utilisant le client Supabase existant
      
      toast({
        title: "Ressource proposée avec succès",
        description: "Merci pour votre contribution à la communauté.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Erreur lors de l'envoi",
        description: "Veuillez réessayer ultérieurement.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titre de la ressource</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Guide pratique sur le TDAH" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type de ressource</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="article">Article</SelectItem>
                  <SelectItem value="video">Vidéo</SelectItem>
                  <SelectItem value="livre">Livre</SelectItem>
                  <SelectItem value="podcast">Podcast</SelectItem>
                  <SelectItem value="outil">Outil</SelectItem>
                  <SelectItem value="formation">Formation</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lien vers la ressource</FormLabel>
              <FormControl>
                <Input placeholder="https://exemple.com/ressource" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Une brève description de cette ressource et de son intérêt..." 
                  className="min-h-[120px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Envoi en cours..." : "Proposer cette ressource"}
        </Button>
      </form>
    </Form>
  );
};

export default ResourceForm;
