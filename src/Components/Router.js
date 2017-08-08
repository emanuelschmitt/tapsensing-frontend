import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PreTestSurvey from '../Pages/PreTestSurvey'
import FinalSurvey from '../Pages/FinalSurvey'
import Dashboard from '../Pages/Dashboard'

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={FinalSurvey} />
      <Route exact path='/pretest' component={PreTestSurvey} />
      <Route exact path='/dashboard' component={Dashboard} />
    </Switch>
  </main>
)

export default Router
