import expensesReducer from '../../reducers/expenses'
import { expenses, singleExpense } from '../fixtures/fixtures'

test('Should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })

  expect(state).toEqual([])
})

test('Should remove an expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual([ expenses[0], expenses[2] ])
})

test('Should NOT remove expenses if ID is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 'testID'
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual([ expenses[0], expenses[1], expenses[2] ])
})

test('Should ADD an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: singleExpense
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual([ ...expenses, singleExpense ])
})

test('Should edit an expense by ID', () => {
  const amount = 10000
  const description = 'NEW DESCRIPTION'
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: {
      description,
      amount
    }
  }
  const state = expensesReducer(expenses, action)

  expect(state[2].description).toEqual(description)
  expect(state[2].amount).toEqual(amount)
})

test('Should NOT EDIT expenses if ID is not found', () => {
  const amount = 10000
  const description = 'NEW DESCRIPTION'
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'testID',
    updates: {
      description,
      amount
    }
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual([ ...expenses ])
})
