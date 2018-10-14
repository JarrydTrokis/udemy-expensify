import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'

export class EditExpensePage extends Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  }

  onClick = (expense) => {
    this.props.removeExpense({ id: expense.id })
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button
          onClick={() => { this.onClick(this.props.expense) }}>
          REMOVE
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: expense => dispatch(removeExpense({ id: expense.id }))
})

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
