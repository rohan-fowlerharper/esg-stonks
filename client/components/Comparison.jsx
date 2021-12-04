import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'

import CompanyInfoCard from './CompanyInfoCard'

function Comparison ({ stonks, activeStonks: activeSymbols }) {
  // const stonks = useSelector(state => state.stonks)
  const activeStonk1 = stonks.find(stonk => stonk.stockSymbol === activeSymbols[0])
  const activeStonk2 = stonks.find(stonk => stonk.stockSymbol === activeSymbols[1])
  return (
    <SimpleGrid
      columns={2}
      gap={4}
      width='100%'
    >
      <CompanyInfoCard stonk={activeStonk1} />
      <CompanyInfoCard stonk={activeStonk2} />
    </SimpleGrid>
  )
}

export default Comparison
