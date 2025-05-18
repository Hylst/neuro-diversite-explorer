import React from 'react';

interface TroubleDefinitionProps {
  title: string;
  paragraphs: string[];
}

const TroubleDefinition: React.FC<TroubleDefinitionProps> = ({ 
  title, 
  paragraphs 
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
    </div>
  );
};

export default TroubleDefinition;