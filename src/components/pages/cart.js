'use strict'
import React from 'React'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import uuidv1 from 'uuid/v1'
import {Modal, Panel, Row, Col, Button, ButtonGroup, Label} from 'react-bootstrap'
import {deleteCartItem, updateCart} from '../../actions/cartAction'

class Cart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }
  open () {
    this.setState({
      showModal: true
    })
  }
  close () {
    this.setState({
      showModal: false
    })
  }
  onIncrement (id) {
    this.props.updateCart(id, 1)
  }
  onDecrement (id, quantity) {
    if (quantity > 1) {
      this.props.updateCart(id, -1)
    }
  }
  deleteItem (id) {
    const cart = this.props.cart
    const indexToDelete = cart.findIndex(cart => {
      return cart.id === id
    })
    let cartAfterDelete = [...cart.slice(0, indexToDelete), ...cart.slice(indexToDelete + 1)]
    this.props.deleteCartItem(cartAfterDelete)
  }
  renderEmpty () {
    return (
      <div />
    )
  }
  renderCart () {
    const cartItemsList = this.props.cart.map((item) => {
      return (
        <Panel key={uuidv1()}>
          <Panel.Body>
            <Row>
              <Col xs={12} sm={4}>
                <h6>{item.title}</h6>
              </Col>
              <Col xs={12} sm={2}>
                <h6>usd. {item.price}</h6>
              </Col>
              <Col xs={12} sm={2}>
                <h6>gty. <Label bsStyle='success'>{item.quantity}</Label></h6>
              </Col>
              <Col xs={6} sm={2}>
                <ButtonGroup style={{minWidth: '300px'}}>
                  <Button onClick={() => this.onDecrement(item.id, item.quantity)} bsStyle='default' bsSize='small'>-</Button>
                  <Button onClick={() => this.onIncrement(item.id)} bsStyle='default' bsSize='small'>+</Button>
                  <Button onClick={() => this.deleteItem(item.id)} bsStyle='danger' bsSize='small'>DELETE</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Panel.Body>
        </Panel>
      )
    })
    return (
      <Panel header='Cart' bsStyle='primary'>
        <Panel.Heading>
          <Panel.Title componentClass='h3'>Cart</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          {cartItemsList}
          <Row>
            <Col xs={4} xsOffset={8}>
              <h6>Total amount: {this.props.totalAmount}</h6>
              <Button onClick={() => this.open()} bsStyle='success' bsSize='small'>
                Proceed to Checkout
              </Button>
            </Col>
          </Row>
          <Modal show={this.state.showModal} onHide={() => this.close()}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h6>Your order has been saved</h6>
              <p>You will receive an email confirmation</p>
            </Modal.Body>
            <Modal.Footer>
              <Col xs={6}>
                <h6>Total $: {this.props.totalAmount}</h6>
              </Col>
              <Button onClick={() => this.close()}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Panel.Body>
      </Panel>
    )
  }
  render () {
    if (this.props.cart && this.props.cart.length > 0) {
      return this.renderCart()
    } else {
      return this.renderEmpty()
    }
  }
}

function mapStateToProps (state) {
  console.log('state = ', state)
  return {
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount,
    totalQuantity: state.cart.totalQuantity
  }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({deleteCartItem, updateCart}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
