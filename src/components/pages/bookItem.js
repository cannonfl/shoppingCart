'use strict'
import React from 'react'
import {connect} from 'react-redux'
import {Row, Col, Well, Button} from 'react-bootstrap'
import {bindActionCreators} from 'redux'
import {addToCart, updateCart} from '../../actions/cartAction'

class BookItem extends React.Component {
  handleCart () {
    const book = [...this.props.cart,
      {
        id: this.props.id,
        title: this.props.title,
        description: this.props.description,
        price: this.props.price,
        quantity: 1
      }
    ]
    if (this.props.cart && this.props.cart.length > 0) {
      let id = this.props.id
      let index = this.props.cart.findIndex(cartItem => {
        return cartItem.id === id
      })
      if (index === -1) {
        this.props.addToCart(book)
      } else {
        this.props.updateCart(id, 1)
      }
    } else {
      this.props.addToCart(book)
    }
  }
  render () {
    return (
      <Well>
        <Row>
          <Col xs={12}>
            <h6>{this.props.title}</h6>
            <h6>{this.props.description}</h6>
            <h6>{this.props.price}</h6>
            <Button onClick={() => this.handleCart()} bsStyle='primary'>Buy now</Button>
          </Col>
        </Row>
      </Well>
    )
  }
}

function mapStateToProps (state) {
  return {
    cart: state.cart.cart
  }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({ addToCart, updateCart }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem)
