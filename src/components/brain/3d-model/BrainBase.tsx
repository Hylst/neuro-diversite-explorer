
import React from 'react';
import { Sphere } from '@react-three/drei';

const BrainBase: React.FC = () => {
  return (
    <>
      {/* Structure de base du cerveau */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshStandardMaterial color="#E5DEFF" transparent opacity={0.15} roughness={0.7} />
      </mesh>
      
      {/* Hémisphères cérébraux */}
      <mesh position={[0.55, 0, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#D6BCFA" wireframe transparent opacity={0.2} />
      </mesh>
      <mesh position={[-0.55, 0, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#D6BCFA" wireframe transparent opacity={0.2} />
      </mesh>
      
      {/* Gyrus et sillons */}
      <mesh position={[0, 0.05, 0]}>
        <sphereGeometry args={[1.05, 16, 16]} />
        <meshStandardMaterial color="#BBAAEF" wireframe transparent opacity={0.2} />
      </mesh>
    </>
  );
};

export default BrainBase;
