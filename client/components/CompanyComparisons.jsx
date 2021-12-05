import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'

import CompanyComparison from './CompanyComparison'

function Comparison ({ stonks, activeStonks: activeSymbols }) {
  const activeStonk1 = stonks.find(stonk => stonk.stockSymbol === activeSymbols[0])
  const activeStonk2 = stonks.find(stonk => stonk.stockSymbol === activeSymbols[1])
  // if activeStonk1 or 2 is undefined then the companycomparison components below will blow up on stonk.symbol
  return (
    <SimpleGrid
      columns={2}
      gap={6}
      width='full'
    >
      {activeStonk1.stockSymbol && <CompanyComparison stonk={activeStonk1} />}
      {activeStonk2.stockSymbol && <CompanyComparison stonk={activeStonk2} />}
    </SimpleGrid>
  )
}

export default Comparison
