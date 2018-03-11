'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import {getBooks} from '../../actions/booksAction'

class BooksList extends React.Component {
  componentDidMount () {
    // Dispatch Action
    this.props.getBooks()
  }
  render () {
    const booksList = this.props.books.map(book => {
      return (
        <div key={book.id}>
          <h2>Title: {book.title}</h2>
          <h2>Description: {book.description}</h2>
          <h2>Price: {book.price}</h2>
          <Button bsStyle='primary'>Buy Now</Button>
        </div>
      )
    })
    return (
      <Grid>
        <Row>
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
