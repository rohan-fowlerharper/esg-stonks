import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Companies from './Companies'
import UserProfile from './UserProfile'

import Navigation from '../components/Navigation'
import CompanyInfoCard from '../components/CompanyInfoCard'
import EditProfile from '../components/EditProfile'
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
        <Route path='/edit-profile' element={<EditProfile />} />
      </Routes>
      <Footer mt={48} />
    </>
  )
}

export default App
