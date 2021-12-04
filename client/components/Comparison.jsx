import React from 'react'

import CompanyInfoCard from './CompanyInfoCard'

function Comparison ({ stonks, activeStonks: activeSymbols }) {
  // const stonks = useSelector(state => state.stonks)
  const activeStonk1 = stonks.find(stonk => stonk.stockSymbol === activeSymbols[0])
  const activeStonk2 = stonks.find(stonk => stonk.stockSymbol === activeSymbols[1])
  return (
    <>
      <CompanyInfoCard stonk={activeStonk1} />
      <CompanyInfoCard stonk={activeStonk2} />
    </>
  )
}

export default Comparison
