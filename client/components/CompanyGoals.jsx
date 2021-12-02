import React, { useEffect, useState } from 'react'

import { getGoals } from '../apis/stonks'

const CompanyGoals = ({ stockSymbol }) => {
  const [goals, setGoals] = useState([])

  useEffect(() => {
    getGoals(stockSymbol)
      .then(goals => setGoals(goals))
      .catch(err => console.error(err))
  }, [stockSymbol])

  return (
    <div>
      {stockSymbol}
      {goals.map((goal, idx) => {
        return <p key={`goal-${stockSymbol}-${idx}`}>{goal.sasb}{goal.sdg}</p>
      })}
    </div>
  )
}

export default CompanyGoals
