import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Navigation from '../components/Navigation'
import Companies from './Companies'

import CompanyGoals from '../components/CompanyGoals'
import CompanyInfoCard from '../components/CompanyInfoCard'

function App () {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/info' element={<CompanyInfoCard />} />
      </Routes>
      <CompanyGoals stockSymbol='AMC'/>
    </>
  )
}

export default App
