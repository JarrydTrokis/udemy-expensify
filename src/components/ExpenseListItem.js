import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {(amount / 100).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}
      -
      {moment(createdAt).format('Do MMMM, YYYY')}
    </p>
  </div>
)

export default ExpenseListItem
