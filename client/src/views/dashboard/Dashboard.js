// CORE UI
import { CCard, CCol, CRow, CCardHeader, CCardBody, CCardTitle, CCardText } from '@coreui/react'

// Three JS
import styled from 'styled-components'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, useProgress } from '@react-three/drei'
import ModelAnimasi from './Animationfanuc01'

// Chart
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
import 'chartjs-adapter-luxon'
import StreamingPlugin from 'chartjs-plugin-streaming'
import 'chartjs-plugin-streaming'
Chart.register(...registerables, StreamingPlugin)

export default function Dashboard() {
  function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % Loaded</Html>
  }

  const config = {
    data: {
      datasets: [
        {
          label: 'Temp',
          borderColor: 'rgba(0, 145, 255)',
          borderWidth: 2,
          fill: true,
        },
      ],
    },
    options: {
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      y: {
        // max: 5,
        min: 0,
      },
      scales: {
        x: {
          type: 'realtime',
          realtime: {
            delay: 2000,
            onRefresh: (chart) => {
              chart.data.datasets.forEach((dataset) => {
                dataset.data.push({
                  x: Date.now(),
                  y: Math.random(),
                })
              })
            },
          },
        },
      },
      elements: {
        line: {
          tension: 0.4,
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 2.5,
          hoverBorderWidth: 4,
        },
      },
    },
  }

  return (
    <>
      <Wrapper>
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.3} />
          <directionalLight position={[0, -40, 20]} />
          <Suspense fallback={<Loader />}>
            <ModelAnimasi scale={2.6} />
          </Suspense>
        </Canvas>
      </Wrapper>

      <CCard className="text-center">
        <CCardHeader component="h5">Summary Production</CCardHeader>
        <CCardBody>
          <CRow>
            <CCol>
              <CCardText>Fanuc No 2</CCardText>
              <CCardTitle>AUTO</CCardTitle>
            </CCol>
            <CCol>
              <CCardText>Cycle Time</CCardText>
              <CCardTitle>24.82 Sec/ 24 Sec</CCardTitle>
            </CCol>
            <CCol>
              <CCardText>Output Produksi</CCardText>
              <CCardTitle>32123 /Reject: 607 Pcs</CCardTitle>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      <br />

      <CRow>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>Chiller</CCardHeader>
            <CCardBody>
              <Line data={config.data} options={config.options} />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>Cooling</CCardHeader>
            <CCardBody>
              <Line data={config.data} options={config.options} />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>Temperature</CCardHeader>
            <CCardBody>
              <Line data={config.data} options={config.options} />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>Servo</CCardHeader>
            <CCardBody>
              <Line data={config.data} options={config.options} />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
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
