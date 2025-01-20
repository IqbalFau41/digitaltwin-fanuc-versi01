import React from 'react'
import {
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CPagination,
  CPaginationItem,
} from '@coreui/react'

const History = () => {
  return (
    <CRow>
      <CTable bordered>
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell scope="col">Date and Time of Occurence</CTableHeaderCell>
            <CTableHeaderCell scope="col">Time Span</CTableHeaderCell>
            <CTableHeaderCell scope="col">Equipment Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Machine Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Alarm Type</CTableHeaderCell>
            <CTableHeaderCell scope="col">Alarm Number</CTableHeaderCell>
            <CTableHeaderCell scope="col">Alarm Message</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableDataCell>2022/08/10 13:44:21</CTableDataCell>
            <CTableDataCell>60</CTableDataCell>
            <CTableDataCell>OP-30A</CTableDataCell>
            <CTableDataCell>OP-30A</CTableDataCell>
            <CTableDataCell>EX</CTableDataCell>
            <CTableDataCell>11103</CTableDataCell>
            <CTableDataCell>EMERGENCY STOP</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
      <CPagination size="sm" align="center" aria-label="Page navigation example" color="primary">
        <CPaginationItem aria-label="Previous" disabled>
          <span aria-hidden="true">&laquo;</span>
        </CPaginationItem>
        <CPaginationItem active>1</CPaginationItem>
        <CPaginationItem>2</CPaginationItem>
        <CPaginationItem>3</CPaginationItem>
        <CPaginationItem aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </CPaginationItem>
      </CPagination>
    </CRow>
  )
}

export default History
