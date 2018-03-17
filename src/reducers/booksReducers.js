'use strict'

module.exports.booksReducers = (
  state = {
    books: [{
      id: '1',
      title: 'title',
      description: 'description',
      price: 30.00
    },
    {
      id: '2',
      title: 'title 2',
      description: 'description 2',
      price: 10.00
    }]
  },
  action
) => {
  let currentBooks
  let index = 0
  switch (action.type) {
    case 'GET_BOOKS':
      return {...state, books: [ ...state.books ]}
    case 'POST_BOOK':
      return {books: [...state.books, action.payload]} // concat arrays using spread op; return updated state
    case 'DELETE_BOOK':
      currentBooks = [...state.books]
      index = currentBooks.findIndex(book => {
        return book.id === action.payload
      })
      return {books: [...currentBooks.slice(0, index),
        ...currentBooks.slice(index + 1)]}
    case 'UPDATE_BOOK':
      currentBooks = [...state.books]
      index = currentBooks.findIndex(book => {
        return book.id === action.payload.id
      })
      const updatedBook = {...currentBooks[index], ...action.payload}
      return {books: [...currentBooks.slice(0, index), updatedBook,
        ...currentBooks.slice(index + 1)]}
  }
  return state
}
