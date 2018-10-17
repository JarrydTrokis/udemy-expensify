import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import { toGBP } from '../helpers/toGBP'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expensePlural = expenseCount === 1 ? 'expense' : 'expenses'

  return (
    <header>
      <h1>Viewing {expenseCount} {expensePlural} totalling {toGBP(expensesTotal)}</h1>
    </header>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)

  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
