import React from 'react';
import RessourcesApprentissage from './RessourcesApprentissage';

const RessourcesSection: React.FC<{ ressourcesRef: React.RefObject<HTMLDivElement> }> = ({ ressourcesRef }) => {
  return (
    <div ref={ressourcesRef}>
      <RessourcesApprentissage />
    </div>
  );
};

export default RessourcesSection;