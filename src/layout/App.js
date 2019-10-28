import React, { Component } from "react"
import Products from "../components/Products"
import Cart from "../components/Cart"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchProducts } from '../actions'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }
  render() {
    return (
      <>
        <h1 className="name">React - Redux Shopping Cart</h1>
        <div className="container">
          <Products />
          <Cart />
        </div>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts
}, dispatch)
export default connect(mapDispatchToProps)(App);