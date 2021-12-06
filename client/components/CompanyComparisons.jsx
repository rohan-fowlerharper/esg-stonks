import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'

import CompanyComparison from './CompanyComparison'

function Comparison ({ stonks, activeStonks: activeSymbols }) {
  const activeStonk1 = stonks.find(stonk => stonk.stockSymbol === activeSymbols[0])
  const activeStonk2 = stonks.find(stonk => stonk.stockSymbol === activeSymbols[1])
  return (
    <SimpleGrid
      columns={2}
      gap={[2, 4, 6]}
      width='full'
    >
      {activeStonk1.stockSymbol && <CompanyComparison stonk={activeStonk1} />}
      {activeStonk2.stockSymbol && <CompanyComparison stonk={activeStonk2} />}
    </SimpleGrid>
  )
}

export default Comparison
