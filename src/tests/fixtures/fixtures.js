import moment from 'moment'

export const expenses = [
  {
    id: '1',
    description: 'gum',
    note: '',
    amount: 195,
    createdAt: 0
  },
  {
    id: '2',
    description: 'rent',
    note: '',
    amount: 10000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '3',
    description: 'credit card',
    note: '',
    amount: 4300,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
]

export const singleExpense = {
  id: '4',
  description: 'food shopping',
  note: 'Bought food for the week',
  amount: 3000,
  createdAt: moment(0).add(1, 'days').valueOf()
}
