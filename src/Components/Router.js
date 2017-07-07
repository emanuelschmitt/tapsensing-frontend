import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PreTestSurvey from '../Pages/PreTestSurvey'

const Router = (props) => (
  <main>
    <Switch>
      <Route exact path='/' component={PreTestSurvey} />
    </Switch>
  </main>
)

export default Router
