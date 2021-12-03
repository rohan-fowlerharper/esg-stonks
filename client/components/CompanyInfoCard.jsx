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
    <Table size='sm' variant='simple'>
      <TableCaption>Last Processing Date: {stonk.lastProcessingDate}</TableCaption>
      <Thead>
        <Tr>
          <Th>Company Name</Th>
          <Th>Company Name</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{stonk.companyName}</Td>
          <Td>{stonk.companyName}</Td>
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
          <Td>{stonk.exchangeSymbol}</Td>
          <Td>{stonk.exchangeSymbol}</Td>
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
          <Td>{stonk.stockSymbol} </Td>
          <Td>{stonk.stockSymbol} </Td>
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
          <Td>{stonk.environmentGrade}</Td>
          <Td>{stonk.environmentGrade}</Td>
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
          <Td>{stonk.environmentLevel}</Td>
          <Td>{stonk.environmentLevel}</Td>
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
          <Td>{stonk.socialGrade}</Td>
          <Td>{stonk.socialGrade}</Td>
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
          <Td>{stonk.socialLevel}</Td>
          <Td>{stonk.socialLevel}</Td>
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
          <Td>{stonk.governanceGrade}</Td>
          <Td>{stonk.governanceGrade}</Td>
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
          <Td>{stonk.governanceLevel}</Td>
          <Td>{stonk.governanceLevel}</Td>
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
          <Td>{stonk.totalGrade}</Td>
          <Td>{stonk.totalGrade}</Td>
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
          <Td>{stonk.totalLevel}</Td>
          <Td>{stonk.totalLevel}</Td>
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
