import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Survey from './Components/Survey'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Survey/>
      </div>
    );
  }
}

export default App;
