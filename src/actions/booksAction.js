'use strict'

let getBooks = (books) => {
  return {
    type: 'GET_BOOKS'
  }
}

let postToBooks = (books) => {
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
  postToBooks: postToBooks,
  updateBook: updateBook,
  deleteBook: deleteBook
}
