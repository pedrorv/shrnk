import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, browserHistory } from 'react-router'
import Main from 'Main'
import Home from 'Home'
import About from 'About'

require('./styles/app.scss')

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/shrtr" component={Main}>
      <Route path="about" component={About} />
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('app')
)