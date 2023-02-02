import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Canvas, useThree, useLoader } from '@react-three/fiber';
import {
  Stats,
  OrbitControls,
  useCubeTexture,
  useHelper,
} from '@react-three/drei';
import * as THREE from 'three';
import starBackground from '../../../asset/photo-1616712134411-6b6ae89bc3ba.jpg';
import sun from '../../../asset/sun.jpg';

import {
  CubeTextureLoader,
  sRGBEncoding,
  TextureLoader,
  SpotLightHelper,
} from 'three';
import Mercury from './component/Mercury';
const Camera = () => {
  const { camera } = useThree();
  // const {  } = useThree();

  camera.position.set(0, 50, 100);
  return null;
};
function BackGround() {
  const { scene } = useThree();

  const envMap = useCubeTexture(
    [
      starBackground,
      starBackground,
      starBackground,
      starBackground,
      starBackground,
      starBackground,
    ],
    { path: '' },
  );
  envMap.encoding = sRGBEncoding;
  scene.background = envMap;

  return null;
}
export function HomePage() {
  const Texture = new TextureLoader();
  const sunTexture = Texture.load(sun);
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div style={{ height: '100vh', width: '100vw' }} id="canvas-container">
        <Canvas
          camera={{ position: [0, 40, 40] }}
          dpr={window.devicePixelRatio}
        >
          <spotLight color="white" position={[0, 0, 0]} />
          <BackGround />
          <OrbitControls />
          <mesh scale={[10, 10, 10]}>
            <sphereGeometry />
            <meshBasicMaterial map={sunTexture} />
          </mesh>
          <Mercury />
          <Stats />
        </Canvas>
      </div>
    </>
  );
}
