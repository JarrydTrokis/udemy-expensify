import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import { singleExpense } from '../fixtures/fixtures'

test('Should render a single Expese List Item', () => {
  const wrapper = shallow(<ExpenseListItem {...singleExpense} />)
  expect(wrapper).toMatchSnapshot()
})
