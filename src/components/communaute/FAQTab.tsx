
import React from 'react';
import FAQ from './FAQ';

const FAQTab = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">Foire Aux Questions</h2>
          <p className="text-muted-foreground">Réponses aux questions fréquentes sur la neurodiversité</p>
        </div>
      </div>
      
      <FAQ />
    </div>
  );
};

export default FAQTab;
