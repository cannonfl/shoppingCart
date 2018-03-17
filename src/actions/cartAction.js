'use strict'

module.exports.addToCart = (book) => {
  return {
    type: 'ADD_TO_CART',
    payload: book
  }
}
module.exports.deleteCartItem = (cart) => {
  return {
    type: 'DELETE_CART_ITEM',
    payload: cart
  }
}
module.exports.updateCart = (id, unit) => {
  return {
    type: 'UPDATE_CART',
    payload: {id, unit}
  }
}
