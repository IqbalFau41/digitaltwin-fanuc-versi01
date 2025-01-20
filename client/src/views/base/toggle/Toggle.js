import styled from 'styled-components'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ModelAnimasi from './Animationfanuc01'

export default function Toogle() {
  return (
    <>
      <Wrapper>
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.3} />
          <directionalLight position={[0, -40, 20]} />
          <Suspense fallback={null}>
            <ModelAnimasi scale={2.6} />
          </Suspense>
        </Canvas>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  position: relative;
  background: #ebedef;
  canvas {
    height: 300px;
  }
`
