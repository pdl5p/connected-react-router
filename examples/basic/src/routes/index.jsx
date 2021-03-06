import * as React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
import CustomerSearch from '../components/CustomerSearch'
import Hello from '../components/Hello'
import Counter from '../components/Counter'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'
import Customer from '../components/Customer'

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/counter" component={Counter} />
      <Route path="/customersearch" component={CustomerSearch} />
      <Route path="/customer/new" component={Customer} />

      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
