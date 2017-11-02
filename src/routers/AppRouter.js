import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditPage from '../components/EditPage'
import NotFoundPage from '../components/NotFoundPage'
import HelpPage from '../components/HelpPage'
import Header from '../components/Header'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ExpenseDashboardPage} />
        <Route exact path='/create' component={AddExpensePage} />
        <Route exact path='/edit/:id' component={EditPage} />
        <Route exact path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter