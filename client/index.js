import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'

import App from './components/App'
import store from './redux/store'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>,
    document.getElementById('app')
  )
})
