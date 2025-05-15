import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Tool } from './types';

interface ToolsSectionProps {
  tools: Tool[];
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const ToolsSection: React.FC<ToolsSectionProps> = ({
  tools,
  currentPage,
  itemsPerPage,
  onPageChange
}) => {
  // Calcul des outils à afficher sur la page actuelle
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tools.slice(indexOfFirstItem, indexOfLastItem);

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(tools.length / itemsPerPage);

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
        {currentItems.map((tool) => (
          <motion.div key={tool.id} variants={itemVariants}>
            <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-start gap-2">
                  <Bookmark className="h-5 w-5 mt-1 flex-shrink-0 text-neuro-red" />
                  <span>{tool.title}</span>
                </CardTitle>
                <CardDescription className="flex justify-between items-center">
                  <span>{tool.type}</span>
                  <span className="text-xs">{tool.platform}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                  {tool.thumbnail && (
                    <div className="mb-3 overflow-hidden rounded-md">
                      <img 
                        src={tool.thumbnail} 
                        alt={tool.title} 
                        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105" 
                      />
                    </div>
                  )}
                  <p className="text-sm mb-2">{tool.description}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    <span className="text-xs px-2 py-1 bg-muted rounded-full">{tool.audience}</span>
                    <span className="text-xs px-2 py-1 bg-muted rounded-full">{tool.price}</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-1"
                    asChild
                  >
                    <a href={tool.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Accéder
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

export default ToolsSection;