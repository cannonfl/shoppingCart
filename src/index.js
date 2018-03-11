'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import BooksList from './components/pages/booksList'
import reducers from './reducers'
import {addToCart} from './actions/cartAction'
import booksAction from './actions/booksAction'

const storeWithMiddleware = applyMiddleware(logger)(createStore)
const store = storeWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <BooksList />
  </Provider>,
  document.getElementById('root'))

/* store.dispatch(
  booksAction.postToBooks(
    [{
      id: 1,
      title: 'title',
      description: 'description',
      price: 30.00
    },
    {
      id: 2,
      title: 'title 2',
      description: 'description 2',
      price: 10.00
    }]
  )
)

store.dispatch(
  booksAction.updateBook({
    id: 2,
    title: 'You are a jerk!'
  })
)

store.dispatch(
  booksAction.deleteBook({
    id: 1
  })
)

store.dispatch(
  addToCart([{
    id: 2
  }])
) */
