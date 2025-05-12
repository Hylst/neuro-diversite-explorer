
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const newsletterSchema = z.object({
  email: z.string().email("Veuillez entrer une adresse email valide"),
  interests: z.array(z.string()).min(1, "Veuillez sélectionner au moins un intérêt"),
});

const NewsletterSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const form = useForm({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
      interests: [] as string[],
    },
  });

  const handleSubmit = async (data: any) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Newsletter signup:', data);
      
      toast({
        title: "Inscription réussie",
        description: "Vous recevrez bientôt des nouvelles de notre communauté !",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Une erreur est survenue",
        description: "Impossible de traiter votre inscription pour le moment.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Restez informé</CardTitle>
        <CardDescription>
          Inscrivez-vous à notre newsletter pour recevoir les dernières actualités sur la neurodiversité.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Adresse email</Label>
            <Input
              id="email"
              type="email"
              placeholder="votre@email.com"
              {...form.register("email")}
            />
            {form.formState.errors.email && (
              <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label>Centres d'intérêt</Label>
            <div className="grid grid-cols-2 gap-4">
              {[
                { id: 'autisme', label: 'Autisme' },
                { id: 'tdah', label: 'TDAH' },
                { id: 'dys', label: 'Troubles DYS' },
                { id: 'events', label: 'Événements' },
                { id: 'research', label: 'Recherche' },
                { id: 'advocacy', label: 'Défense des droits' }
              ].map((interest) => (
                <div className="flex items-center space-x-2" key={interest.id}>
                  <Checkbox
                    id={interest.id}
                    {...form.register("interests")}
                    value={interest.id}
                    onCheckedChange={(checked) => {
                      const currentInterests = form.getValues("interests");
                      if (checked) {
                        form.setValue("interests", [...currentInterests, interest.id]);
                      } else {
                        form.setValue(
                          "interests",
                          currentInterests.filter((i) => i !== interest.id)
                        );
                      }
                    }}
                  />
                  <Label htmlFor={interest.id}>{interest.label}</Label>
                </div>
              ))}
            </div>
            {form.formState.errors.interests && (
              <p className="text-sm text-red-500">{form.formState.errors.interests.message}</p>
            )}
          </div>
          
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Inscription en cours..." : "S'inscrire à la newsletter"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewsletterSignup;
