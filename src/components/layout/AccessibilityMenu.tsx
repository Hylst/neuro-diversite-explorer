
import React, { useState } from 'react';
import { Settings, Type, ZoomIn, PanelLeft } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function AccessibilityMenu() {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);

  const updateFontSize = (value: number[]) => {
    const newSize = value[0];
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    if (newValue) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  const toggleReduceMotion = () => {
    const newValue = !reduceMotion;
    setReduceMotion(newValue);
    if (newValue) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  };

  const toggleDyslexicFont = () => {
    const newValue = !dyslexicFont;
    setDyslexicFont(newValue);
    if (newValue) {
      document.documentElement.classList.add('dyslexic-font');
    } else {
      document.documentElement.classList.remove('dyslexic-font');
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Paramètres d'accessibilité">
          <Settings className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Accessibilité</h3>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Type className="h-4 w-4" />
                <span>Taille du texte</span>
              </div>
              <span className="text-sm text-muted-foreground">{fontSize}%</span>
            </div>
            <Slider 
              value={[fontSize]} 
              min={75} 
              max={150} 
              step={5} 
              onValueChange={updateFontSize}
            />
          </div>

          <Separator />

          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center space-x-2">
              <ZoomIn className="h-4 w-4" />
              <Label htmlFor="high-contrast">Contraste élevé</Label>
            </div>
            <Switch 
              id="high-contrast" 
              checked={highContrast} 
              onCheckedChange={toggleHighContrast}
            />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center space-x-2">
              <PanelLeft className="h-4 w-4" />
              <Label htmlFor="reduce-motion">Réduire les animations</Label>
            </div>
            <Switch 
              id="reduce-motion" 
              checked={reduceMotion} 
              onCheckedChange={toggleReduceMotion}
            />
          </div>

          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center space-x-2">
              <Type className="h-4 w-4" />
              <Label htmlFor="dyslexic-font">Police pour dyslexie</Label>
            </div>
            <Switch 
              id="dyslexic-font" 
              checked={dyslexicFont} 
              onCheckedChange={toggleDyslexicFont}
            />
          </div>
          
          <p className="text-xs text-muted-foreground">
            Ces paramètres sont sauvegardés pour votre prochaine visite.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
