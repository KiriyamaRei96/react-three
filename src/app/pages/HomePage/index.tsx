import React, { useRef, useEffect, useState } from 'react';
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
import mercury from '../../../asset/Mercury.jpg';
import earth from '../../../asset/earth.jpg';
import mars from '../../../asset/mars.jpg';
import neptune from '../../../asset/neptune.jpg';

import jupiter from '../../../asset/jupiter.jpg';
import pluto from '../../../asset/pluto.jpg';
import saturn from '../../../asset/saturn.jpg';
import uranus from '../../../asset/uranus.jpg';
import venus from '../../../asset/venus.jpg';

import {
  CubeTextureLoader,
  sRGBEncoding,
  TextureLoader,
  SpotLightHelper,
} from 'three';

import Sun from './component/Sun';
import Planet from './component/Planet';

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
  const planetArr = [
    {
      planetImg: mercury,
      orbitSpeed: 0.04,
      spinSpeed: 0.004,
      size: 3.2,
      position: 28,
    },
    {
      planetImg: venus,
      orbitSpeed: 0.015,
      spinSpeed: 0.002,
      size: 5.8,
      position: 44,
    },
    {
      planetImg: earth,
      orbitSpeed: 0.01,
      spinSpeed: 0.02,
      size: 6,
      position: 60,
    },
    {
      planetImg: mars,
      spinSpeed: 0.018,
      orbitSpeed: 0.001,
      size: 4,
      position: 78,
    },
    {
      planetImg: jupiter,
      spinSpeed: 0.04,
      orbitSpeed: 0.002,
      size: 12,
      position: 100,
    },
    {
      planetImg: saturn,
      spinSpeed: 0.038,
      orbitSpeed: 0.0009,
      size: 10,
      position: 138,
    },
    {
      planetImg: uranus,
      spinSpeed: 0.03,
      orbitSpeed: 0.004,
      size: 7,
      position: 176,
    },
    {
      planetImg: neptune,
      spinSpeed: 0.032,
      orbitSpeed: 0.0001,
      size: 7,
      position: 200,
    },
    {
      planetImg: pluto,
      spinSpeed: 0.008,
      orbitSpeed: 0.00007,
      size: 2.8,
      position: 216,
    },
  ];
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
          <ambientLight color={0x333333}></ambientLight>
          <pointLight
            color="0xFFFFFF"
            position={[0, 0, 0]}
            intensity={2}
            distance={0}
            decay={2}
          />
          <BackGround />
          <OrbitControls />
          <Sun />
          {planetArr.map(item => (
            <Planet
              planetImg={item.planetImg}
              orbitSpeed={item.orbitSpeed}
              spinSpeed={item.spinSpeed}
              size={item.size}
              position={item.position}
            />
          ))}

          <Stats />
        </Canvas>
      </div>
    </>
  );
}
