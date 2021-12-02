import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Navigation from '../components/Navigation'
import Companies from './Companies'
// import Company from './Company'

function App () {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/companies' element={<Companies />} />
      </Routes>
    </>
  )
}

export default App
