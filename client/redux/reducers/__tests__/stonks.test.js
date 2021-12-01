import stonks from '../stonks'

it('has correct initial state', () => {
  expect(stonks(undefined, { type: '@@INIT' })).toEqual([])
})

describe('SET_STONKS', () => {
  const action = {
    type: 'SET_STONKS',
    stonks: [{
      id: 1,
      company_name: 'Stonk 1'
    },
    {
      id: 2,
      company_name: 'Stonk 2'
    }]
  }

  it('sets the stonks', () => {
    expect(stonks([], action)).toEqual(action.stonks)
  })
})

describe('CLEAR_STONKS', () => {
  const action = {
    type: 'CLEAR_STONKS'
  }

  it('clears the stonks', () => {
    expect(stonks([], action)).toEqual([])
  })
})
