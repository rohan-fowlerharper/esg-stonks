import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStonks } from '../redux/actions/stonks'

function Companies () {
  const dispatch = useDispatch()
  const stonks = useSelector(state => state.stonks)

  useEffect(() => {
    dispatch(fetchStonks())
  }, [])

  return (
    <>
      {stonks.map(stonk => {
        return <div key={stonk.esg_id}>{stonk.company_name}</div>
      })}
    </>
  )
}

export default Companies
