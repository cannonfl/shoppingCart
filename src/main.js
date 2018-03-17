'use strict'
import React from 'react'
import {connect} from 'react-redux'
import Menu from './components/pages/menu'
import Footer from './components/pages/footer'

class Main extends React.Component {
  render () {
    console.log('this.props.totalQty ', this.props.totalQty)
    return (
      <div>
        <Menu cartItemsNumber={this.props.totalQty} />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    totalQty: state.cart.totalQuantity
  }
}
export default connect(mapStateToProps)(Main)
