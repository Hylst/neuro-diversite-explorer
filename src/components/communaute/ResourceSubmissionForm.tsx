
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const resourceFormSchema = z.object({
  name: z.string().min(3, "Le nom doit contenir au moins 3 caractères"),
  type: z.string().min(1, "Veuillez sélectionner un type"),
  region: z.string().min(1, "Veuillez sélectionner une région"),
  description: z.string().min(10, "La description doit contenir au moins 10 caractères"),
  website: z.string().url("Veuillez entrer une URL valide"),
  email: z.string().email("Veuillez entrer une adresse email valide").optional(),
  phone: z.string().optional(),
});

type ResourceFormValues = z.infer<typeof resourceFormSchema>;

const ResourceSubmissionForm = () => {
  const [open, setOpen] = React.useState(false);
  
  const form = useForm<ResourceFormValues>({
    resolver: zodResolver(resourceFormSchema),
    defaultValues: {
      name: "",
      type: "",
      region: "",
      description: "",
      website: "https://",
      email: "",
      phone: "",
    },
  });

  function onSubmit(data: ResourceFormValues) {
    // In a real application, this would send data to a backend
    console.log("Resource submission:", data);
    toast.success("Ressource soumise avec succès!", {
      description: "Merci pour votre contribution. Elle sera examinée par notre équipe."
    });
    setOpen(false);
    form.reset();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Ajouter une ressource</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Ajouter une nouvelle ressource</DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom de la ressource</FormLabel>
                  <FormControl>
                    <Input placeholder="Nom de l'organisation ou du service" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
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
                        <SelectItem value="association">Association</SelectItem>
                        <SelectItem value="professionnel">Professionnel</SelectItem>
                        <SelectItem value="communaute">Communauté</SelectItem>
                        <SelectItem value="service">Service en ligne</SelectItem>
                        <SelectItem value="etablissement">Établissement</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="region"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Région</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner une région" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="national">National</SelectItem>
                        <SelectItem value="idf">Île-de-France</SelectItem>
                        <SelectItem value="aura">Auvergne-Rhône-Alpes</SelectItem>
                        <SelectItem value="paca">PACA</SelectItem>
                        <SelectItem value="nouvelle-aquitaine">Nouvelle-Aquitaine</SelectItem>
                        <SelectItem value="occitanie">Occitanie</SelectItem>
                        <SelectItem value="hauts-de-france">Hauts-de-France</SelectItem>
                        <SelectItem value="grand-est">Grand Est</SelectItem>
                        <SelectItem value="normandie">Normandie</SelectItem>
                        <SelectItem value="bretagne">Bretagne</SelectItem>
                        <SelectItem value="pays-de-la-loire">Pays de la Loire</SelectItem>
                        <SelectItem value="centre-val-de-loire">Centre-Val de Loire</SelectItem>
                        <SelectItem value="bourgogne-franche-comte">Bourgogne-Franche-Comté</SelectItem>
                        <SelectItem value="en-ligne">En ligne</SelectItem>
                        <SelectItem value="international">International</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Décrivez brièvement cette ressource et ses services" 
                      className="resize-none h-24"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Site web</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email de contact (optionnel)</FormLabel>
                    <FormControl>
                      <Input placeholder="contact@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Téléphone (optionnel)</FormLabel>
                    <FormControl>
                      <Input placeholder="01 23 45 67 89" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-end gap-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setOpen(false)}
              >
                Annuler
              </Button>
              <Button type="submit">Soumettre</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ResourceSubmissionForm;
