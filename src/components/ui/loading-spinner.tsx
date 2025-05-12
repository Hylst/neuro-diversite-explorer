
import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = "md", 
  text = "Chargement en cours..." 
}) => {
  const sizeClasses = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <div className="relative">
        <div className={`${sizeClasses[size]} border-4 border-muted rounded-full opacity-30`}></div>
        <div className={`${sizeClasses[size]} border-4 border-t-neuro-purple border-muted-foreground/30 rounded-full animate-spin absolute top-0 left-0`}></div>
      </div>
      {text && <p className="text-muted-foreground text-sm">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
