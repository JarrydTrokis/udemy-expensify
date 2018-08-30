import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import { singleExpense } from '../fixtures/fixtures'

test('Should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={singleExpense} />)
  expect(wrapper).toMatchSnapshot()
})
