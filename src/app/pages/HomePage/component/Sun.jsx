import React, { useRef } from 'react';
import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import sun from '../../../../asset/sun.jpg';
import { TextureLoader } from 'three';
const Sun = () => {
  const planet = useRef();

  const Texture = new TextureLoader();
  const sunTexture = Texture.load(sun);
  useFrame(() => {
    planet.current.rotation.y += 0.004;
  });
  return (
    <mesh ref={planet}>
      <sphereGeometry args={[16, 30, 30]} />
      <meshBasicMaterial map={sunTexture} />
    </mesh>
  );
};
export default Sun;
