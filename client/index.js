import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'

import App from './pages/App'

import store from './redux/store'

// optional but good practice - how can you get webpack to listen to vars in your environment when built?
// checkout https://webpack.js.org/guides/production/
// https://www.npmjs.com/package/dotenv-webpack
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
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ChakraProvider>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
