import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import RegularLayout from '../layouts/RegularLayout'

import EditProfile from '../components/EditProfile'

function UserProfile () {
  const { user, isAuthenticated } = useAuth0()

  return (
    <RegularLayout>
      <h1>User Profile</h1>
      {isAuthenticated && (
        <>
          <img src={user.picture} alt="Profile" />
          <h2>Welcome, {user.name}!</h2>
          <p>{user.email}</p>
          {/* // If button is clicked, render EditProfile component */}
          <button onClick={() => {
            console.log('clicked')
          }}>Edit Profile</button>
          <EditProfile />
          {!isAuthenticated && <p>Please log in to view profile</p>}
        </>
      )}
    </RegularLayout>
  )
}

export default UserProfile
