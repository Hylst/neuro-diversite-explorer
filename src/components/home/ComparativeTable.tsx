
import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ComparativeTableProps {
  title?: string;
  description?: string;
}

const ComparativeTable = ({ 
  title = "Tableau comparatif des troubles", 
  description = "Aperçu des principaux troubles neuro-atypiques et de leurs caractéristiques" 
}: ComparativeTableProps) => {
  const disorders = [
    { 
      name: "Dyslexie", 
      age: "6-8 ans", 
      prevalence: "8-12%", 
      brainArea: "Temporale gauche", 
      symptoms: ["Difficultés de lecture", "Confusion lettres", "Orthographe"], 
      tools: ["Polices adaptées", "Correcteur", "Lecture assistée"],
      severity: "medium"
    },
    { 
      name: "TDAH", 
      age: "6-12 ans", 
      prevalence: "5-7%", 
      brainArea: "Préfrontale", 
      symptoms: ["Inattention", "Hyperactivité", "Impulsivité"], 
      tools: ["Méthode Pomodoro", "Timer visuel", "Planning structuré"],
      severity: "high" 
    },
    { 
      name: "TSA (Autisme)", 
      age: "2-4 ans", 
      prevalence: "1-2%", 
      brainArea: "Connectivité globale", 
      symptoms: ["Interactions sociales", "Intérêts restreints", "Sensorialité"], 
      tools: ["Routines visuelles", "Casque anti-bruit", "Communication alternative"],
      severity: "high"
    },
    { 
      name: "Dyspraxie", 
      age: "5-11 ans", 
      prevalence: "5-6%", 
      brainArea: "Cervelet", 
      symptoms: ["Coordination motrice", "Graphisme", "Organisation spatiale"], 
      tools: ["Stylos ergonomiques", "Clavier adapté", "Outils numériques"],
      severity: "medium"
    },
    { 
      name: "Dyscalculie", 
      age: "6-8 ans", 
      prevalence: "3-7%", 
      brainArea: "Pariétale", 
      symptoms: ["Calcul mental", "Sens des nombres", "Raisonnement mathématique"], 
      tools: ["Matériel concret", "Tables de calcul", "Applications spécifiques"],
      severity: "medium"
    }
  ];

  const renderSeverityBadge = (severity: string) => {
    switch(severity) {
      case 'low':
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">Faible</Badge>;
      case 'medium':
        return <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-200">Modéré</Badge>;
      case 'high':
        return <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">Important</Badge>;
      default:
        return <Badge variant="outline">Varié</Badge>;
    }
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>
        
        <div className="rounded-xl border shadow-sm overflow-hidden">
          <Table>
            <TableCaption>
              Source: Données basées sur les recherches actuelles en neurosciences et psychologie.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Trouble</TableHead>
                <TableHead>
                  Âge diagnostic
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="ml-1 h-3 w-3 inline-block text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Âge moyen auquel le diagnostic est généralement posé</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableHead>
                <TableHead>Prévalence</TableHead>
                <TableHead>Région cérébrale</TableHead>
                <TableHead>Symptômes principaux</TableHead>
                <TableHead>Outils d'adaptation</TableHead>
                <TableHead>Impact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {disorders.map((disorder) => (
                <TableRow key={disorder.name}>
                  <TableCell className="font-medium">{disorder.name}</TableCell>
                  <TableCell>{disorder.age}</TableCell>
                  <TableCell>{disorder.prevalence}</TableCell>
                  <TableCell>{disorder.brainArea}</TableCell>
                  <TableCell>
                    <ul className="list-disc ml-5 text-sm">
                      {disorder.symptoms.map((symptom, index) => (
                        <li key={index}>{symptom}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc ml-5 text-sm">
                      {disorder.tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell>{renderSeverityBadge(disorder.severity)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default ComparativeTable;
