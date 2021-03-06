import React from 'react'
import { Container, SimpleGrid, Box, Heading, Center, Text, useColorModeValue } from '@chakra-ui/react'

import CompanyRadar from './CompanyRadar'
import CompanyInfoCard from './CompanyInfoCard'
import CompanyPie from './CompanyPie'
import CompanyGoals from './CompanyGoals'

function Comparison ({ stonks, activeStonks: activeSymbols }) {
  const activeStonk1 = stonks.find(stonk => stonk.stockSymbol === activeSymbols[0])
  const activeStonk2 = stonks.find(stonk => stonk.stockSymbol === activeSymbols[1])

  return (
    <>
      {activeStonk1.stockSymbol && activeStonk2.stockSymbol && <Box>
        <SimpleGrid
          columns={2}
          gap={[2, 4, 6]}
          width='full'
        >
          <CompanyInfoCard stonk={activeStonk1} />
          <CompanyInfoCard stonk={activeStonk2} />

          <CompanyPie stonk={activeStonk1} />
          <CompanyPie stonk={activeStonk2} />
        </SimpleGrid>

        <Container>
          <CompanyRadar stonk1={activeStonk1} stonk2={activeStonk2} width='full' height='500px' />
        </Container>

        <Center>
          <Heading as='h2'>
          SASB &amp; SDG Goals
          </Heading>
        </Center>
        <br/>
        <Center>
          <Text mb={4} fontSize='xl' color={useColorModeValue('gray.800', 'gray.300')}>
        Sustainability goals pledged by companies are used to evaluate the above ESG scores
          </Text>
        </Center>
        <br/>
        <SimpleGrid
          columns={2}
          gap={[2, 4, 6]}
          width='full'
        >
          <CompanyGoals stockSymbol={activeStonk1.stockSymbol} />
          <CompanyGoals stockSymbol={activeStonk2.stockSymbol} />
        </SimpleGrid>
      </Box> }
    </>
  )
}

export default Comparison
