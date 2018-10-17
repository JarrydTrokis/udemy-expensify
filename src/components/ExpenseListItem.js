import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { toGBP } from '../helpers/toGBP'

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {toGBP(amount)}
      -
      {moment(createdAt).format('Do MMMM, YYYY')}
    </p>
  </div>
)

export default ExpenseListItem
