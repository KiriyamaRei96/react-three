import React, { useRef } from 'react';
import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber';

import { TextureLoader } from 'three';
import { Interface } from 'readline';

interface planetProps {
  planetImg: string;
  orbitSpeed: number;
  spinSpeed: number;
  size: number;
  position: number;
  ring?: boolean;
}
const Planet = ({
  planetImg,
  orbitSpeed,
  spinSpeed,
  size,
  position,
  ring,
}: planetProps) => {
  const orbit: any = useRef(null);
  const planet: any = useRef(null);

  const Texture = new TextureLoader();
  const planetTexture = Texture.load(planetImg);
  useFrame(() => {
    if (orbit.current && planet.current) {
      orbit.current.rotation.y += orbitSpeed;
      planet.current.rotation.y += spinSpeed;
    }
  });
  return (
    <mesh ref={orbit} position={[0, 0, 0]}>
      <mesh ref={planet} position={[position, 0, 0]}>
        <sphereGeometry args={[size, 30, 30]}></sphereGeometry>
        <meshStandardMaterial map={planetTexture} />
      </mesh>
    </mesh>
  );
};
export default Planet;
