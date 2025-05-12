
export type BrainViewMode = '3d' | 'lateral' | 'medial' | 'superior' | 'inferior';

export interface BrainRegion {
  id: string;
  name: string;
  description: string;
  color: string;
  meshName?: string;
  position?: [number, number, number];
  coordinates?: {
    x: number;
    y: number;
    z: number;
  };
  functions?: string[];
  disorders?: string[];
}

// Add Custom JSX namespace declaration to support Three.js elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      sphereGeometry: any;
      boxGeometry: any;
      cylinderGeometry: any;
      torusGeometry: any;
      planeGeometry: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      meshPhongMaterial: any;
      ambientLight: any;
      pointLight: any;
      spotLight: any;
      directionalLight: any;
      color: any;
    }
  }
}
