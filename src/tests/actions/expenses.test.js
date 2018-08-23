import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Should return remove expense action object', () => {
  const action = removeExpense({ id: 'test123' })

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'test123'
  })
})

test('Should return edit expense action object', () => {
  const action = editExpense('test123', { note: 'test note' })

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'test123',
    updates: {
      note: 'test note'
    }
  })
})

test('Should return addExpense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 7500,
    createdAt: 1000,
    note: 'This months rent'
  }
  const action = addExpense(expenseData)

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  })
})

test('Should return add Expense object with DEFAULT VALUES', () => {
  expect(addExpense()).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})
