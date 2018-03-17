'use strict'

let getBooks = (books) => {
  return {
    type: 'GET_BOOKS'
  }
}

let postBooks = (books) => {
  return {
    type: 'POST_BOOK',
    payload: books
  }
}

let updateBook = (book) => {
  return {
    type: 'UPDATE_BOOK',
    payload: book
  }
}

let deleteBook = (book) => {
  return {
    type: 'DELETE_BOOK',
    payload: book
  }
}

module.exports = {
  getBooks: getBooks,
  postBooks: postBooks,
  updateBook: updateBook,
  deleteBook: deleteBook
}
