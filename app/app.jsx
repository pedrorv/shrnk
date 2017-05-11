import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

import Main from './components/Main'
import LinkShortener from './components/LinkShortener'
import NotFound from './components/NotFound'
import LinkRedirect from './components/LinkRedirect'

import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

require('./styles/app.scss')


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/shrnk" component={Main}>
        <Route path="not-found" component={NotFound} />
        <Router path=":id" component={LinkRedirect} />
        <IndexRoute component={LinkShortener} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)