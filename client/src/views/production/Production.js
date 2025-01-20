import React from 'react'
import {
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'

const Production = () => {
  return (
    <CRow>
      <CTable bordered>
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell scope="col">Operate</CTableHeaderCell>
            <CTableHeaderCell scope="col">Disconnect</CTableHeaderCell>
            <CTableHeaderCell scope="col">Alarm</CTableHeaderCell>
            <CTableHeaderCell scope="col">Emergency</CTableHeaderCell>
            <CTableHeaderCell scope="col">Suspend</CTableHeaderCell>
            <CTableHeaderCell scope="col">Stop</CTableHeaderCell>
            <CTableHeaderCell scope="col">Manual</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableDataCell>11</CTableDataCell>
            <CTableDataCell>5</CTableDataCell>
            <CTableDataCell>0</CTableDataCell>
            <CTableDataCell>0</CTableDataCell>
            <CTableDataCell>1</CTableDataCell>
            <CTableDataCell>1</CTableDataCell>
            <CTableDataCell>1</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CRow>
  )
}

export default Production
