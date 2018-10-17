import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import { singleExpense } from '../fixtures/expenses'

test('Should render a single Expense List Item', () => {
  const wrapper = shallow(<ExpenseListItem {...singleExpense} />)
  expect(wrapper).toMatchSnapshot()
})
