import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStonks } from '../redux/actions/stonks'

import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'

function CompanyInfoCard () {
  const dispatch = useDispatch()
  const stonks = useSelector(state => state.stonks)
  const data = React.useMemo(() => [
    { name: stonks.companyName}
  ])

  useEffect(() => {
    dispatch(fetchStonks())
  }, [])
  return (
   
  )
}

export default CompanyInfoCard
