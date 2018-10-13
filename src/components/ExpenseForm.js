import React, { Component } from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

class ExpenseForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      errorMessage: ''
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  onAmountChange = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { description, amount, createdAt, note } = this.state

    if (!description || !amount) {
      this.setState(() => ({ errorMessage: 'Please provide description and amount.' }))
    } else {
      this.setState(() => ({ errorMessage: '' }))
      this.props.onSubmit({
        description: description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note: note
      })
    }
  }

  render () {
    return (
      <div>
        {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type='number'
            placeholder='Amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            onDateChange={this.onDateChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm
