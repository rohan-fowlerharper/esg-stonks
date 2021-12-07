import React from 'react'
import { Container, SimpleGrid } from '@chakra-ui/react'

import CompanyRadar from './CompanyRadar'
import CompanyInfoCard from './CompanyInfoCard'
import CompanyPie from './CompanyPie'
import CompanyGoals from './CompanyGoals'

function Comparison ({ stonks, activeStonks: activeSymbols, stonk }) {
  const activeStonk1 = stonks.find(stonk => stonk.stockSymbol === activeSymbols[0])
  const activeStonk2 = stonks.find(stonk => stonk.stockSymbol === activeSymbols[1])

  return (
    <>
      <SimpleGrid
        columns={2}
        gap={[2, 4, 6]}
        width='full'
      >
        {activeStonk1.stockSymbol && <CompanyInfoCard stonk={activeStonk1} />}
        {activeStonk2.stockSymbol && <CompanyInfoCard stonk={activeStonk2} />}

        {activeStonk1.stockSymbol &&
        <CompanyPie stonk={activeStonk1} />}
        {activeStonk2.stockSymbol &&
        <CompanyPie stonk={activeStonk2} />}
      </SimpleGrid>

      <Container>
        {activeStonk1 && activeStonk2 &&
        <CompanyRadar stonk1={activeStonk1} stonk2={activeStonk2} width='full' height='500px' />}
      </Container>

      <SimpleGrid
        columns={2}
        gap={[2, 4, 6]}
        width='full'
      >
        {activeStonk1.stockSymbol && <CompanyGoals stockSymbol1={activeStonk1.stockSymbol} />}
        {activeStonk2.stockSymbol && <CompanyGoals stockSymbol={activeStonk2.stockSymbol} />}
      </SimpleGrid>
    </>
  )
}

export default Comparison
