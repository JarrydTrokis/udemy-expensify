import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import { singleExpense } from '../fixtures/fixtures'

let editExpenseSpy, removeExpenseSpy, historySpy, wrapper

beforeEach(() => {
  removeExpenseSpy = jest.fn()
  editExpenseSpy = jest.fn()
  historySpy = { push: jest.fn() }
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpenseSpy}
      removeExpense={removeExpenseSpy}
      history={historySpy}
      expense={singleExpense}
    />
  )
})

test('should render EditExpense Page correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(singleExpense)
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
  expect(editExpenseSpy).toHaveBeenLastCalledWith(singleExpense.id, singleExpense)
})

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click')
  expect(historySpy.push).toHaveBeenLastCalledWith('/')
  expect(removeExpenseSpy).toHaveBeenLastCalledWith({ id: singleExpense.id })
})
