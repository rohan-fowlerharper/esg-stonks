import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './components/App'

import store from './redux/store'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      domain={'aihe-2021-rohan.au.auth0.com'}
      clientId={'DDUWwCPWe0koZS9fWF6N0HT88XHFBHPL'}
      redirectUri={window.location.origin}
      audience={'https://esg-stonks/users'}
    >
      <Provider store={store}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
