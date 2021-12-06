import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Image,
  Center,
  Box,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'

function CompanyInfoCard ({ stonk }) {
  const image = stonk.stockSymbol ? `https://s3.polygon.io/logos/${stonk.stockSymbol.toLowerCase()}/logo.png` : 'https://raw.githubusercontent.com/koehlersimon/fallback/master/Resources/Public/Images/placeholder.jpg'

  const toPrint = (({ companyName, exchangeSymbol, stockSymbol, environmentGrade, environmentLevel, socialGrade, socialLevel, governanceGrade, governanceLevel, totalGrade, totalLevel }) => ({ Name: companyName, Exchange: exchangeSymbol, Symbol: stockSymbol, Environment_Grade: environmentGrade, Environment_Level: environmentLevel, Social_Grade: socialGrade, Social_Level: socialLevel, Governance_Grade: governanceGrade, Governance_Level: governanceLevel, Overall_Grade: totalGrade, Overall_Level: totalLevel }))(stonk)

  return (
    <Box
      boxShadow='base'
      rounded='lg'
    >
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
        <TableCaption
          color={useColorModeValue('gray.600', 'gray.400')}
        >Last Processing Date: {stonk.lastProcessingDate}</TableCaption>

        {Object.entries(toPrint).map(([key, value]) => {
          return useBreakpointValue({
            base: (
              <>
                <Thead key={`${stonk.id}-${key}`}>
                  <Tr>
                    <Th>{key.replace('_', ' ')}</Th>
                  </Tr>
                </Thead>

                <Tbody key={`${stonk.id}-${key}-${value}`}>
                  <Tr>
                    <Td><b>{value}</b></Td>
                  </Tr>
                </Tbody>
              </>

            ),
            md: (
              <Tbody key={`${stonk.id}-${key}`}>
                <Tr>
                  <Th minW='40%'>{key.replace('_', ' ')}</Th>
                  <Td><b>{value}</b></Td>
                </Tr>
              </Tbody>
            )
          })
        })}
      </Table>
    </Box>
  )
}

export default CompanyInfoCard
