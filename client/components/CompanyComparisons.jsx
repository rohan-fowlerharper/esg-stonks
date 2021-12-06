import React from 'react'
import { Container, SimpleGrid } from '@chakra-ui/react'

import CompanyComparison from './CompanyComparison'
import CompanyRadar from './CompanyRadar'

function Comparison ({ stonks, activeStonks: activeSymbols }) {
  const activeStonk1 = stonks.find(stonk => stonk.stockSymbol === activeSymbols[0])
  const activeStonk2 = stonks.find(stonk => stonk.stockSymbol === activeSymbols[1])
  return (
    <>
      <SimpleGrid
        columns={2}
        gap={[2, 4, 6]}
        width='full'
      >
        {activeStonk1.stockSymbol && <CompanyComparison stonk={activeStonk1} />}
        {activeStonk2.stockSymbol && <CompanyComparison stonk={activeStonk2} />}

      </SimpleGrid>
      <Container>
        {activeStonk1 && activeStonk2 &&
        <CompanyRadar stonk1={activeStonk1} stonk2={activeStonk2} width='full' height='500px' />}
      </Container>
    </>
  )
}

export default Comparison
