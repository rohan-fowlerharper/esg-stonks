import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'

import CompanyComparison from './CompanyComparison'

function Comparison ({ stonks, activeStonks: activeSymbols }) {
  // const stonks = useSelector(state => state.stonks)
  const activeStonk1 = stonks.find(stonk => stonk.stockSymbol === activeSymbols[0])
  const activeStonk2 = stonks.find(stonk => stonk.stockSymbol === activeSymbols[1])
  return (
    <SimpleGrid
      columns={2}
      gap={6}
      width='full'
    >
      <CompanyComparison stonk={activeStonk1} />
      <CompanyComparison stonk={activeStonk2} />
    </SimpleGrid>
  )
}

export default Comparison
