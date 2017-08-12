import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Survey from '../Pages/Survey'
import Dashboard from '../Pages/Dashboard'

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Survey} />
      <Route exact path='/dashboard' component={Dashboard} />
    </Switch>
  </main>
)

export default Router
