import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Navigation from '../components/Navigation'
import Companies from './Companies'

function App () {
  return (
    <>
      <Navigation />
      <Route path='/' element={<Home />} />
      <Route path='/companies' element={<Companies />} />
    </>
  )
}

export default App
