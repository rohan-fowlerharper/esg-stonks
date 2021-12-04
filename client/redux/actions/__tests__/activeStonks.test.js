import { addActiveStonk, removeActiveStonk } from '../activeStonks'

const stockSymbol = {
  stock_symbol: 'AQN'
}

describe('addActiveStonk', () => {
  it('adds the selected stonk symbol to the state when clicked', () => {
    const action = addActiveStonk(stockSymbol)
    expect(action).toEqual({ type: 'ADD_ACTIVE_STONK', stockSymbol: { stock_symbol: 'AQN' } })
    expect(action.type).toEqual('ADD_ACTIVE_STONK')
  })
})

describe('removes an active stonk symbol from state when clicked', () => {
  it('removes the selected stonk symbol from the state when clicked', () => {
    const action = removeActiveStonk(stockSymbol)
    expect(action).toEqual({ type: 'REMOVE_ACTIVE_STONK', stockSymbol: { stock_symbol: 'AQN' } })
    expect(action.type).toEqual('REMOVE_ACTIVE_STONK')
  })
})
