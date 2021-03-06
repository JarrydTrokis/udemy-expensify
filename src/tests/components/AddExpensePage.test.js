import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import { singleExpense } from '../fixtures/expenses'

let addExpenseSpy, historySpy, wrapper

beforeEach(() => {
  addExpenseSpy = jest.fn()
  historySpy = { push: jest.fn() }
  wrapper = shallow(<AddExpensePage addExpense={addExpenseSpy} history={historySpy} />)
})

test('should render AddExpense page correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(singleExpense)
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
  expect(addExpenseSpy).toHaveBeenLastCalledWith(singleExpense)
})
