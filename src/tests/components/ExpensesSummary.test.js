import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should render component correctly with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={2423} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render component correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={2423} />)
  expect(wrapper).toMatchSnapshot()
})
