import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
  <div>
    <br />
    <ExpenseListFilters />
    <br />
    <ExpenseList />
  </div>
)

export default ExpenseDashboardPage
