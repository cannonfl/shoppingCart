'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import {getBooks} from '../../actions/booksAction'
import BookItem from './bookItem'
import BooksForm from './booksForm'

class BooksList extends React.Component {
  componentDidMount () {
    // Dispatch Action
    this.props.getBooks()
  }
  render () {
    const booksList = this.props.books.map(book => {
      return (
        <Col xs={12} sm={6} md={4} key={book.id}>
          <BookItem
            id={book.id}
            title={book.title}
            description={book.description}
            price={book.price}
          />
        </Col>
      )
    })
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6}>
            <BooksForm />
          </Col>
          {booksList}
        </Row>
      </Grid>
    )
  }
}
function mapStateToProps (state) {
  return {
    books: state.books.books
  }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      getBooks: getBooks
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
