import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Download, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Document } from './types';

interface DocumentsSectionProps {
  documents: Document[];
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const DocumentsSection: React.FC<DocumentsSectionProps> = ({
  documents,
  currentPage,
  itemsPerPage,
  onPageChange
}) => {
  // Calcul des documents à afficher sur la page actuelle
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = documents.slice(indexOfFirstItem, indexOfLastItem);

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(documents.length / itemsPerPage);

  // Animation pour les cartes
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="space-y-6">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {currentItems.map((document) => (
          <motion.div key={document.id} variants={itemVariants}>
            <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-start gap-2">
                  <FileText className="h-5 w-5 mt-1 flex-shrink-0 text-neuro-blue" />
                  <span>{document.title}</span>
                </CardTitle>
                <CardDescription className="flex justify-between items-center">
                  <span>{document.type}</span>
                  <span className="text-xs">{document.size}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-sm mb-2">{document.description}</p>
                  <p className="text-xs text-muted-foreground mb-4">
                    {document.author}, {document.date}
                  </p>
                </div>
                <div className="flex justify-end">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-1"
                    asChild
                  >
                    <a href={document.link} target="_blank" rel="noopener noreferrer">
                      {document.link.startsWith('http') ? (
                        <ExternalLink className="h-4 w-4" />
                      ) : (
                        <Download className="h-4 w-4" />
                      )}
                      {document.link.startsWith('http') ? 'Consulter' : 'Télécharger'}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    onPageChange(currentPage - 1);
                  }} 
                />
              </PaginationItem>
            )}
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink 
                  href="#" 
                  isActive={page === currentPage}
                  onClick={(e) => {
                    e.preventDefault();
                    onPageChange(page);
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    onPageChange(currentPage + 1);
                  }} 
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default DocumentsSection;