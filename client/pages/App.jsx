import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'

import { fetchUserFavourites } from '../redux/actions/favouriteStonks'

import Home from './Home'
import Companies from './Companies'
import UserProfile from './UserProfile'

import Navigation from '../components/Navigation'
import CompanyInfoCard from '../components/CompanyInfoCard'
import EditProfile from '../components/EditProfile'
import Footer from '../components/Footer'

function App () {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently()
          dispatch(fetchUserFavourites(token))
        } catch (err) {
          console.error(err)
        }
      }
    })()
  }, [isAuthenticated])

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
