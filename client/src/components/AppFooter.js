import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        Tugas Akhir
        <span className="ms-1">&copy; 2022 Polman Bandung.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        Iqbal Fau
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
