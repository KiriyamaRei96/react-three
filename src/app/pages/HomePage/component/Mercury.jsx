import React, { useRef } from 'react';
import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber';
const Mercury = () => {
  const planet = useRef();

  useFrame(() => {
    planet.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={planet} position={[0, 0, 0]}>
      <mesh position={[20, 0, 0]}>
        <sphereGeometry></sphereGeometry>
        <meshStandardMaterial color="white" />
      </mesh>
    </mesh>
  );
};
export default Mercury;
