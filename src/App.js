import React, { Component } from 'react'
import PreTestSurvey from './Surveys/PreTestSurvey'
import Footer from './Components/Footer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <PreTestSurvey />
        <Footer />
      </div>
    )
  }
}

export default App
