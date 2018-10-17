import selectExpensesTotal from '../../selectors/expenses-total'
import { expenses, singleExpense } from '../fixtures/expenses'

test('should return total 0 if no expenses', () => {
  const res = selectExpensesTotal([])
  expect(res).toBe(0)
})

test('should correctly return single expense total', () => {
  const res = selectExpensesTotal(singleExpense)
  expect(res).toBe(3000)
})

test('should correctly return multiple expense total', () => {
  const res = selectExpensesTotal(expenses)
  expect(res).toBe(14495)
})
