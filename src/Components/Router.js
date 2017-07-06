import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PreTestSurvey from '../Pages/PreTestSurvey'
import Footer from './Footer'

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={PreTestSurvey}/>
    </Switch>
  </main>
)

export default Router