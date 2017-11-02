import { createStore } from 'redux'

// Action generators are functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = () => ({
  type: 'RESET'
})

const setCount = ({ count = 0 } = {}) => ({
  type: 'SET',
  count
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action - return an object
  // that represents the new state

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }

    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }

    case 'SET':
      return {
        count: action.count
      }

    case 'RESET':
      return {
        count: 0
      }

    default:
      return state
  }
}

const store = createStore(countReducer);

// Actions - just an object that gets sent to the store
store.subscribe(() => {
  console.log(store.getState())
})

// store.dispatch({
//   type: 'INCREMENT',
//   incremenetBy: 5
// })

store.dispatch(incrementCount({ incrementBy: 50 }))

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(resetCount())

store.dispatch(setCount({ count: 101 }))
