import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react'

function Infocard ({ stonk }) {
  return (
    <Table variant='simple'>
      <TableCaption>Last Processing Date: {stonk.lastProcessingDate}</TableCaption>
      <Thead>
        <Tr>
          <Th>Company Name</Th>
          <Th>Company Name</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>insert company name</Td>
          <Td>insert company name</Td>
        </Tr>
      </Tbody>
      <Thead>
        <Tr>
          <Th>Exchange Symbol</Th>
          <Th>Exchange Symbol</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>insert exchangeSymbol</Td>
          <Td>insert exchangeSymbol</Td>
        </Tr>
      </Tbody>
      <Thead>
        <Tr>
          <Th>Stock Symbol</Th>
          <Th>Stock Symbol</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>insert stockSymbol</Td>
          <Td>insert stockSymbol</Td>
        </Tr>
      </Tbody>
      <Thead>
        <Tr>
          <Th>Environment Grade</Th>
          <Th>Environment Grade</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>insert environmentGrade</Td>
          <Td>insert environmentGrade</Td>
        </Tr>
      </Tbody>
      <Thead>
        <Tr>
          <Th>Environment Level</Th>
          <Th>Environment Level</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>insert environmentLevel</Td>
          <Td>insert environmentLevel</Td>
        </Tr>
      </Tbody>
      <Thead>
        <Tr>
          <Th>Social Grade</Th>
          <Th>Social Grade</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>insert socialGrade</Td>
          <Td>insert socialGrade</Td>
        </Tr>
      </Tbody>
      <Thead>
        <Tr>
          <Th>Social Level</Th>
          <Th>Social Level</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>insert socialLevel</Td>
          <Td>insert socialLevel</Td>
        </Tr>
      </Tbody>
      <Thead>
        <Tr>
          <Th>Governance Grade</Th>
          <Th>Governance Grade</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>insert gorvernanceGrade</Td>
          <Td>insert gorvernanceGrade</Td>
        </Tr>
      </Tbody>
      <Thead>
        <Tr>
          <Th>Governance Level</Th>
          <Th>Governance Level</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>insert gorvernanceLevel</Td>
          <Td>insert gorvernanceLevel</Td>
        </Tr>
      </Tbody>
      <Thead>
        <Tr>
          <Th>Total Grade</Th>
          <Th>Total Grade</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>insert totalGrade</Td>
          <Td>insert totalGrade</Td>
        </Tr>
      </Tbody>
      <Thead>
        <Tr>
          <Th>Total Level</Th>
          <Th>Total Level</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>insert totalLevel</Td>
          <Td>insert totalLevel</Td>
        </Tr>
      </Tbody>
      {/* <Tr>
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
        </Tr>
        <Tr>
          <Td>yards</Td>
          <Td>metres (m)</Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
        </Tr>
      </Tfoot> */}
    </Table>
  )
}

export default Infocard
