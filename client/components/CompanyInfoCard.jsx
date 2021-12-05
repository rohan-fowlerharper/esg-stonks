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

function CompanyInfocard ({ stonk }) {
  return (
    <Table
      size='sm'
      variant='striped'
      colorScheme='gray'
    >
      <TableCaption>Last Processing Date: {stonk.lastProcessingDate}</TableCaption>
      <Thead>
        <Tr>
          <Th>Company Name</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{stonk.companyName}</Td>
        </Tr>
      </Tbody>

      <Thead>
        <Tr>
          <Th>Exchange Symbol</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{stonk.exchangeSymbol}</Td>
        </Tr>
      </Tbody>

      <Thead>
        <Tr>
          <Th>Stock Symbol</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{stonk.stockSymbol} </Td>
        </Tr>
      </Tbody>

      <Thead>
        <Tr>
          <Th>Environment Grade</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{stonk.environmentGrade}</Td>
        </Tr>
      </Tbody>

      <Thead>
        <Tr>
          <Th>Environment Level</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{stonk.environmentLevel}</Td>
        </Tr>
      </Tbody>

      <Thead>
        <Tr>
          <Th>Social Grade</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{stonk.socialGrade}</Td>
        </Tr>
      </Tbody>

      <Thead>
        <Tr>
          <Th>Social Level</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{stonk.socialLevel}</Td>
        </Tr>
      </Tbody>

      <Thead>
        <Tr>
          <Th>Governance Grade</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{stonk.governanceGrade}</Td>
        </Tr>
      </Tbody>

      <Thead>
        <Tr>
          <Th>Governance Level</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{stonk.governanceLevel}</Td>
        </Tr>
      </Tbody>

      <Thead>
        <Tr>
          <Th>Total Grade</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{stonk.totalGrade}</Td>
        </Tr>
      </Tbody>

      <Thead>
        <Tr>
          <Th>Total Level</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>{stonk.totalLevel}</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default CompanyInfocard
