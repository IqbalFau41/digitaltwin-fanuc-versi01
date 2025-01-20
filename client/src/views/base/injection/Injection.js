// COREUI
import React, { Suspense, useEffect } from 'react'
import { CCard, CCardBody, CCol, CRow, CCardHeader, CCardTitle } from '@coreui/react'

// THREE 3D
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, useProgress } from '@react-three/drei'
import ModelInjeksi from './Animastiinjection01'

// DATABASE
import * as Realm from 'realm-web'

// CHART
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
import 'chartjs-adapter-luxon'
import StreamingPlugin from 'chartjs-plugin-streaming'
import 'chartjs-plugin-streaming'
Chart.register(...registerables, StreamingPlugin)

export default function Injection() {
  const REALM_APP_ID = 'digitaltwin01-jitaw'
  const email = 'spamiqbal@gmail.com'
  const password = '123456'
  let user = null
  // LOGIN
  useEffect(() => {
    const login = async () => {
      const app = new Realm.App({ id: REALM_APP_ID })
      const credentials = Realm.Credentials.emailPassword(email, password)
      try {
        user = await app.logIn(credentials)
        console.assert(user.id === app.currentUser.id)
        console.log('Successfully logged in!')
        return user
      } catch (err) {
        console.error('Failed to log in', err)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    user = login()
  }, [])
  // READING MAP DATABASE
  const getDatabase = async () => {
    try {
      const data = await user.functions.getOneData()
      console.log(data[0].temp)
      return data[0].temp
    } catch (err) {
      console.log(err)
    }
  }

  // READ
  function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % Loaded</Html>
  }

  // CONFIG HARTJS
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
        max: 80,
        min: 0,
      },
      scales: {
        x: {
          type: 'realtime',
          realtime: {
            duration: 20000,
            refresh: 1000, // onRefresh callback will be called every 1000 ms
            delay: 1000, // delay of 1000 ms, so upcoming values are known before plotting a line
            pause: false, // chart is not paused
            // ttl: undefined, // data will be automatically deleted as it disappears off the chart
            frameRate: 30, // data points are drawn 30 times every second
            onRefresh: (chart) => {
              const val = getDatabase()
              val.then((result) => {
                if (result === undefined) {
                  chart.data.datasets[0].data.push({
                    x: Date.now(),
                    y: 0,
                  })
                } else {
                  const a = result
                  chart.data.datasets[0].data.push({
                    x: Date.now(),
                    y: a,
                  })
                }
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
          <directionalLight position={[0, 0, 20]} />
          <Suspense fallback={<Loader />}>
            <ModelInjeksi scale={7} />
          </Suspense>
        </Canvas>
      </Wrapper>
      <CCardBody>
        <CCardTitle className="text-center">Signal Monitoring</CCardTitle>
      </CCardBody>
      <CRow>
        {/* M. Cushion */}
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>M. Cushion</CCardHeader>
            <CCardBody>
              <Line data={config.data} options={config.options} />
            </CCardBody>
          </CCard>
        </CCol>

        {/* Extrd. Start */}
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>Extrd. Start</CCardHeader>
            <CCardBody>
              <Line data={config.data} options={config.options} />
            </CCardBody>
          </CCard>
        </CCol>

        {/* Feed Th. */}
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>Feed Th.</CCardHeader>
            <CCardBody>
              <Line data={config.data} options={config.options} />
            </CCardBody>
          </CCard>
        </CCol>

        {/* Peak Pos */}
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>Peak Pos</CCardHeader>
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
