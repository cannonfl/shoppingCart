'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import logger from 'redux-logger'

import reducers from './reducers'
import BooksList from './components/pages/booksList'
import Cart from './components/pages/cart'
import BooksForm from './components/pages/booksForm'
import Main from './main'

const storeWithMiddleware = applyMiddleware(logger)(createStore)
const store = storeWithMiddleware(reducers)

const Routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={BooksList} />
        <Route path='/admin' component={BooksForm} />
        <Route path='/cart' component={Cart} />
      </Route>
    </Router>
  </Provider>
)

render(
  Routes, document.getElementById('root')
)
