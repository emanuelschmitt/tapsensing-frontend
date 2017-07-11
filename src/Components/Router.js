import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PreTestSurvey from '../Pages/PreTestSurvey'
import Dashboard from '../Pages/Dashboard'

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={PreTestSurvey} />
      <Route exact path='/dashboard' component={Dashboard} />
    </Switch>
  </main>
)

export default Router
