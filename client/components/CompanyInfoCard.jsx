import React from 'react'
import {
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Image,
  Center,
  Box,
  useBreakpointValue
} from '@chakra-ui/react'

function Infocard ({ stonk }) {
  const image = `https://s3.polygon.io/logos/${stonk.stockSymbol.toLowerCase()}/logo.png`

  const toPrint = (({ companyName, exchangeSymbol, stockSymbol, environmentGrade, environmentLevel, socialGrade, socialLevel, governanceGrade, governanceLevel, totalGrade, totalLevel }) => ({ Name: companyName, Exchange: exchangeSymbol, Symbol: stockSymbol, Environment_Grade: environmentGrade, Environment_Level: environmentLevel, Social_Grade: socialGrade, Social_Level: socialLevel, Governance_Grade: governanceGrade, Governance_Level: governanceLevel, Overall_Grade: totalGrade, Overall_Level: totalLevel }))(stonk)

  return (
    <>
      <Box
        roundedTop='lg'
        h={36}
        bg='white'
        p={4}
      >
        <Center w='full' h='full'>
          <Image
            rounded={'sm'}
            maxHeight='full'
            width='auto'
            src={image}
            alt={stonk.stockSymbol}
          />
        </Center>
      </Box>
      <Table
        size='sm'
        variant='striped'
        colorScheme='gray'
      >
        <TableCaption>Last Processing Date: {stonk.lastProcessingDate}</TableCaption>

        {Object.entries(toPrint).map(([key, value]) => {
          return useBreakpointValue({
            base: (
              <>
                <Th>{key.replace('_', ' ')}</Th>
                <Tbody key={`${stonk.id}-${key}`}>
                  <Tr>
                    <Td><b>{value}</b></Td>
                  </Tr>
                </Tbody>
              </>

            ),
            md: (
              <Tbody key={`${stonk.id}-${key}`}>
                <Tr>
                  <Th>{key.replace('_', ' ')}</Th>
                  <Td><b>{value}</b></Td>
                </Tr>
              </Tbody>
            )
          })
        })}
      </Table>
    </>
  )
}

export default Infocard
