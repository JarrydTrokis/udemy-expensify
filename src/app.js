import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 42, createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Rent', amount: 1095 }))

const appBootstrap = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(appBootstrap, document.getElementById('app'))
