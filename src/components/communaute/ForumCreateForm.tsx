
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ForumCategoryProps } from './ForumCategory';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Bold, Italic, List, ListOrdered, AtSign, Link as LinkIcon, Image } from 'lucide-react';

interface ForumCreateFormProps {
  categories: ForumCategoryProps[];
}

const ForumCreateForm: React.FC<ForumCreateFormProps> = ({ categories }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    isAnonymous: false,
    notifyOnReplies: true,
    tags: ''
  });
  
  const [editorTab, setEditorTab] = useState('write');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.category || !formData.content) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
    
    // Simuler l'envoi des données au serveur
    setTimeout(() => {
      toast.success("Votre discussion a été créée avec succès");
      // Réinitialiser le formulaire
      setFormData({
        title: '',
        category: '',
        content: '',
        isAnonymous: false,
        notifyOnReplies: true,
        tags: ''
      });
      // Rediriger vers la nouvelle discussion (simulation)
      console.log("Données du formulaire:", formData);
    }, 1000);
  };

  const addFormatting = (format: string) => {
    let formattedText = '';
    
    switch (format) {
      case 'bold':
        formattedText = `**texte en gras**`;
        break;
      case 'italic':
        formattedText = `*texte en italique*`;
        break;
      case 'list':
        formattedText = `\n- élément 1\n- élément 2\n- élément 3\n`;
        break;
      case 'ordered-list':
        formattedText = `\n1. premier élément\n2. deuxième élément\n3. troisième élément\n`;
        break;
      case 'link':
        formattedText = `[texte du lien](https://exemple.com)`;
        break;
      case 'mention':
        formattedText = `@utilisateur`;
        break;
      case 'image':
        formattedText = `![description](URL de l'image)`;
        break;
      default:
        formattedText = '';
    }
    
    setFormData(prev => ({
      ...prev,
      content: prev.content + formattedText
    }));
  };

  const previewContent = () => {
    // Simulation simple de Markdown
    let preview = formData.content;
    
    // Remplacer les ** par des balises strong
    preview = preview.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Remplacer les * par des balises em
    preview = preview.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Remplacer les listes
    preview = preview.replace(/- (.*?)(?:\n|$)/g, '<li>$1</li>');
    preview = preview.replace(/\d+\. (.*?)(?:\n|$)/g, '<li>$1</li>');
    
    // Remplacer les liens
    preview = preview.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>');
    
    // Remplacer les sauts de ligne
    preview = preview.replace(/\n/g, '<br>');
    
    return preview;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Créer une nouvelle discussion</CardTitle>
        <CardDescription>
          Partagez vos questions ou expériences avec la communauté
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="topic-title">
              Titre <span className="text-destructive">*</span>
            </Label>
            <Input 
              id="topic-title"
              name="title"
              placeholder="Titre de votre discussion" 
              required
              aria-required="true"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="topic-category">
              Catégorie <span className="text-destructive">*</span>
            </Label>
            <select 
              id="topic-category"
              name="category"
              className="w-full p-2 border border-input rounded-md bg-background"
              aria-required="true"
              required
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="">Sélectionnez une catégorie</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="topic-content">
              Contenu <span className="text-destructive">*</span>
            </Label>
            
            <div className="border rounded-md">
              <div className="bg-muted p-1 border-b flex justify-between items-center">
                <div className="flex gap-1">
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => addFormatting('bold')} 
                    title="Texte en gras"
                  >
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => addFormatting('italic')} 
                    title="Texte en italique"
                  >
                    <Italic className="h-4 w-4" />
                  </Button>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => addFormatting('list')} 
                    title="Liste à puces"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => addFormatting('ordered-list')} 
                    title="Liste numérotée"
                  >
                    <ListOrdered className="h-4 w-4" />
                  </Button>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => addFormatting('link')} 
                    title="Ajouter un lien"
                  >
                    <LinkIcon className="h-4 w-4" />
                  </Button>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => addFormatting('mention')} 
                    title="Mentionner un utilisateur"
                  >
                    <AtSign className="h-4 w-4" />
                  </Button>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => addFormatting('image')} 
                    title="Insérer une image"
                  >
                    <Image className="h-4 w-4" />
                  </Button>
                </div>
                <Tabs value={editorTab} onValueChange={setEditorTab} className="w-32">
                  <TabsList className="grid grid-cols-2">
                    <TabsTrigger value="write">Écrire</TabsTrigger>
                    <TabsTrigger value="preview">Aperçu</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <TabsContent value="write" className="mt-0">
                <Textarea 
                  id="topic-content"
                  name="content"
                  placeholder="Décrivez votre sujet en détail..." 
                  className="min-h-[200px] border-none rounded-t-none focus-visible:ring-0"
                  aria-required="true"
                  required
                  value={formData.content}
                  onChange={handleInputChange}
                />
              </TabsContent>
              
              <TabsContent value="preview" className="mt-0">
                <div 
                  className="min-h-[200px] p-3 prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: previewContent() }}
                />
              </TabsContent>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="topic-tags">Tags (séparés par des virgules)</Label>
            <Input 
              id="topic-tags"
              name="tags"
              placeholder="Ex: tdah, école, adultes" 
              value={formData.tags}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 pt-2">
            <div className="flex items-center space-x-2">
              <Switch
                id="anonymous"
                checked={formData.isAnonymous}
                onCheckedChange={(checked) => handleSwitchChange('isAnonymous', checked)}
              />
              <Label htmlFor="anonymous">Publier anonymement</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                id="notify"
                checked={formData.notifyOnReplies}
                onCheckedChange={(checked) => handleSwitchChange('notifyOnReplies', checked)}
              />
              <Label htmlFor="notify">M'avertir des réponses</Label>
            </div>
          </div>
          
          <Button type="submit" className="w-full mt-2">
            Publier la discussion
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2 text-xs text-muted-foreground border-t pt-4">
        <p>
          En publiant cette discussion, vous acceptez de respecter les règles de la communauté.
        </p>
        <p>
          Cette discussion sera visible par tous les membres de la communauté.
        </p>
      </CardFooter>
    </Card>
  );
};

export default ForumCreateForm;
