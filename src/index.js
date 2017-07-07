import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.css'

const RoutableApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(<RoutableApp />, document.getElementById('root'))
registerServiceWorker()
