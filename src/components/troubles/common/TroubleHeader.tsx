import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TroubleIcon, { TroubleIconType } from './TroubleIcon';

interface TroubleHeaderProps {
  title: string;
  description: string;
  trouble: TroubleIconType;
  iconColor?: string;
  backLink?: string;
  onBackClick?: () => void;
}

const TroubleHeader: React.FC<TroubleHeaderProps> = ({
  title,
  description,
  trouble,
  iconColor,
  backLink = '/troubles',
  onBackClick
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
      <Button 
        variant="ghost" 
        size="icon" 
        asChild={!onBackClick} 
        className="w-fit"
        onClick={onBackClick}
      >
        {onBackClick ? (
          <ArrowLeft className="h-6 w-6" />
        ) : (
          <Link to={backLink}>
            <ArrowLeft className="h-6 w-6" />
          </Link>
        )}
      </Button>
      <div>
        <h1 className="text-4xl font-bold flex items-center gap-2">
          <TroubleIcon trouble={trouble} className="h-8 w-8" color={iconColor} />
          <span>{title}</span>
        </h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default TroubleHeader;