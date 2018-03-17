'use strict'

module.exports.cartReducers = (state = {cart: []}, action) => {
  let total
  switch (action.type) {
    case 'ADD_TO_CART':
      total = totals(action.payload)
      return {
        ...state,
        cart: action.payload,
        totalAmount: total.amount,
        totalQuantity: total.quantity
      }
    case 'UPDATE_CART':
      const currentCart = [...state.cart]
      const index = currentCart.findIndex(cart => {
        return cart.id === action.payload.id
      })
      const updatedCart = {...currentCart[index], quantity: currentCart[index].quantity + action.payload.unit}
      const cartUpdate = [...currentCart.slice(0, index), updatedCart, ...currentCart.slice(index + 1)]
      total = totals(cartUpdate)
      return {
        ...state,
        cart: cartUpdate,
        totalAmount: total.amount,
        totalQuantity: total.quantity
      }
    case 'DELETE_CART_ITEM':
      total = totals(action.payload)
      return {
        ...state,
        cart: action.payload,
        totalAmount: total.amount,
        totalQuantity: total.quantity
      }
  }
  return state
}

export function totals (payloadArr) {
  const totalAmount = payloadArr.map(payload => {
    return payload.price * payload.quantity
  }).reduce((a, b) => {
    return a + b
  }, 0)

  const totalQuantity = payloadArr.map(payload => {
    return payload.quantity
  }).reduce((a, b) => {
    return a + b
  }, 0)

  return {amount: totalAmount.toFixed(2), quantity: totalQuantity}
}
