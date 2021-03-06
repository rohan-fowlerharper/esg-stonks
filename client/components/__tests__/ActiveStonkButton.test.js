import '@testing-library/jest-dom'
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ActiveStonkButton from '../ActiveStonkButton'
import { Provider } from 'react-redux'

describe('<ActiveStonkButton />', () => {
  it('should render the ActiveStonkButton component in a clickable state', () => {
    const activeStonks = [
      'AAPL',
      null
    ]
    const fakeStore = {
      getState: () => ({ activeStonks }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    }
    render(
      <Provider store={fakeStore}>
        <ActiveStonkButton />
      </Provider>
    )
    const button = screen.getByRole('active-stonk-toggle')
    expect(button).toBeInTheDocument()
    expect(button.disabled).toBe(false)
  })
  it('should render a disabled button if activeStonks is full', () => {
    const activeStonks = [
      'AAPL',
      'TSLA'
    ]
    const fakeStore = {
      getState: () => ({ activeStonks }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    }
    render(
      <Provider store={fakeStore}>
        <ActiveStonkButton />
      </Provider>
    )
    const button = screen.getByRole('active-stonk-toggle')
    expect(button).toBeInTheDocument()
    expect(button.disabled).toBe(true)
  })
  it('should dispatch removeActiveStock when clicked', () => {
    const activeStonks = [
      'AAPL',
      'TSLA'
    ]
    const fakeStore = {
      getState: () => ({ activeStonks }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    }
    render(
      <Provider store={fakeStore}>
        <ActiveStonkButton stockSymbol='AAPL' />
      </Provider>
    )
    const button = screen.getByRole('active-stonk-toggle')
    fireEvent.click(button)
    expect(fakeStore.dispatch.mock.calls[0][0]).toEqual({ type: 'REMOVE_ACTIVE_STONK', stockSymbol: 'AAPL' })
  })
  it('should dispatch addActiveStock when clicked', () => {
    const activeStonks = [
      null,
      'TSLA'
    ]
    const fakeStore = {
      getState: () => ({ activeStonks }),
      dispatch: jest.fn(),
      subscribe: jest.fn()
    }
    render(
      <Provider store={fakeStore}>
        <ActiveStonkButton stockSymbol='AAPL' />
      </Provider>
    )
    const button = screen.getByRole('active-stonk-toggle')
    fireEvent.click(button)
    expect(fakeStore.dispatch.mock.calls[0][0]).toEqual({ type: 'ADD_ACTIVE_STONK', stockSymbol: 'AAPL' })
  })
})
