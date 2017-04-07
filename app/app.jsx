import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

import Main from 'Main'
import Shrtr from 'Shrtr'
import NotFound from 'NotFound'
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

require('./styles/app.scss')


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/shrtr" component={Main}>
        <Route path="not-found" component={NotFound} />
        <IndexRoute component={Shrtr} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)