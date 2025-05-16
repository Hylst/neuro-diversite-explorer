import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { FileText, Plus, Save, Trash2, PenLine } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
}

const NotesSection: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: 'Rendez-vous avec le spécialiste',
      content: 'Préparer les questions sur les stratégies d\'adaptation au travail. Apporter les résultats des tests précédents.',
      date: '2023-12-10'
    },
    {
      id: '2',
      title: 'Techniques de concentration',
      content: 'Méthode Pomodoro : 25 minutes de travail, 5 minutes de pause. Essayer la méditation guidée de 5 minutes avant les sessions de travail.',
      date: '2023-11-28'
    }
  ]);
  
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');

  const handleCreateNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: 'Nouvelle note',
      content: '',
      date: new Date().toISOString().split('T')[0]
    };
    
    setNotes([newNote, ...notes]);
    setActiveNote(newNote);
    setIsEditing(true);
    setEditedTitle(newNote.title);
    setEditedContent(newNote.content);
  };

  const handleEditNote = () => {
    if (!activeNote) return;
    
    setIsEditing(true);
    setEditedTitle(activeNote.title);
    setEditedContent(activeNote.content);
  };

  const handleSaveNote = () => {
    if (!activeNote) return;
    
    const updatedNotes = notes.map(note => 
      note.id === activeNote.id 
        ? { ...note, title: editedTitle, content: editedContent } 
        : note
    );
    
    setNotes(updatedNotes);
    setActiveNote({ ...activeNote, title: editedTitle, content: editedContent });
    setIsEditing(false);
  };

  const handleDeleteNote = () => {
    if (!activeNote) return;
    
    const updatedNotes = notes.filter(note => note.id !== activeNote.id);
    setNotes(updatedNotes);
    setActiveNote(updatedNotes.length > 0 ? updatedNotes[0] : null);
    setIsEditing(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Notes personnelles
              </CardTitle>
              <CardDescription>
                Gardez une trace de vos idées, rendez-vous et stratégies
              </CardDescription>
            </div>
            <Button 
              onClick={handleCreateNote}
              size="sm"
              className="transition-all duration-200 hover:scale-105"
            >
              <Plus className="h-4 w-4 mr-1" />
              Nouvelle note
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/3 border rounded-md overflow-hidden">
              <div className="bg-muted p-2 font-medium text-sm">Mes notes</div>
              <div className="h-[300px] overflow-y-auto p-1">
                <AnimatePresence>
                  {notes.length === 0 ? (
                    <div className="p-4 text-center text-muted-foreground">
                      Aucune note pour le moment
                    </div>
                  ) : (
                    <ul className="space-y-1">
                      {notes.map(note => (
                        <motion.li 
                          key={note.id}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          <Button
                            variant={activeNote?.id === note.id ? 'default' : 'ghost'}
                            className="w-full justify-start text-left h-auto py-2 px-3"
                            onClick={() => {
                              setActiveNote(note);
                              setIsEditing(false);
                            }}
                          >
                            <div className="truncate">
                              <div className="font-medium truncate">{note.title}</div>
                              <div className="text-xs text-muted-foreground">{note.date}</div>
                            </div>
                          </Button>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 border rounded-md overflow-hidden">
              {!activeNote ? (
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <FileText className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>Sélectionnez une note ou créez-en une nouvelle</p>
                  </div>
                </div>
              ) : isEditing ? (
                <div className="p-3 space-y-3 h-[300px] flex flex-col">
                  <Input
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    placeholder="Titre de la note"
                    className="font-medium"
                  />
                  <Textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    placeholder="Contenu de votre note..."
                    className="flex-1 resize-none"
                  />
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setIsEditing(false)}
                    >
                      Annuler
                    </Button>
                    <Button 
                      size="sm"
                      onClick={handleSaveNote}
                    >
                      <Save className="h-4 w-4 mr-1" />
                      Enregistrer
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="h-[300px] flex flex-col">
                  <div className="bg-muted p-2 flex justify-between items-center">
                    <h3 className="font-medium">{activeNote.title}</h3>
                    <div className="flex gap-1">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-7 w-7"
                        onClick={handleEditNote}
                      >
                        <PenLine className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-7 w-7 text-destructive"
                        onClick={handleDeleteNote}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-3 overflow-y-auto flex-1">
                    <div className="text-xs text-muted-foreground mb-2">
                      Créée le {activeNote.date}
                    </div>
                    <div className="whitespace-pre-wrap">{activeNote.content}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default NotesSection;