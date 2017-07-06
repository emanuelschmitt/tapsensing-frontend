import React, { Component } from 'react'
import Header from './Components/Header'
import Router from './Components/Router'
import Footer from './Components/Footer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Router />
        <Footer />
      </div>
    )
  }
}

export default App
