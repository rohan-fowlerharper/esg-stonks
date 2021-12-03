import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStonks } from '../redux/actions/stonks'
import DataTable from 'react-data-table-component'
// import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'
// import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
// import { useTable, useSortBy } from 'react-table'

function CompanyInfoCard () {
  const dispatch = useDispatch()
  const stonks = useSelector(state => state.stonks)

  useEffect(() => {
    dispatch(fetchStonks())
  }, [])

  const columns = [
    {
      name: stonks.companyName,
      selector: row => row.title
    },
    {
      name: 'Year',
      selector: row => row.year
    }
  ]

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988'
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984'
    }
  ]
  return (
    <DataTable
      columns={columns}
      data={data}
    />
  )
}

export default CompanyInfoCard
