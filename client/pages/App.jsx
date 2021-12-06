import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Navigation from '../components/Navigation'
import Companies from './Companies'
import CompanyInfoCard from '../components/CompanyInfoCard'
import UserProfile from './UserProfile'
import Footer from '../components/Footer'

function App () {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/info' element={<CompanyInfoCard />} />
        <Route path='/profile' element={<UserProfile />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
