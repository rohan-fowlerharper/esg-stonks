import React, { useEffect } from 'react'
import { Heading } from '@chakra-ui/react'

import { useDispatch, useSelector } from 'react-redux'

import { fetchStonks } from '../redux/actions/stonks'

function App () {
  const dispatch = useDispatch()
  const stonks = useSelector(state => state.stonks)

  useEffect(() => {
    dispatch(fetchStonks())
  }, [])

  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <Heading as='h1'>Welcome to ESG stonks</Heading>
        {stonks.map(stonk => {
          return <div key={stonk.esg_id}>{stonk.company_name}</div>
        })}

      </section>
    </>
  )
}

export default App
