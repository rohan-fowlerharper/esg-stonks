import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Navigation from '../components/Navigation'
import Companies from './Companies'
// import Company from './Company'

import CompanyGoals from '../components/CompanyGoals'

import MyResponsivePie from '../components/ResponsivePie'

function App () {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/companies' element={<Companies />} />
      </Routes>
      <CompanyGoals stockSymbol='AAPL'/>
    </>
  )
}

export default App
