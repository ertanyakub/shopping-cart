import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFromCart, addQuantity, subtractQuantity } from '../actions'
import CartItems from './CartItems'

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkout: false
        }
    }
    handleRemove = id => {
        this.props.removeFromCart(id);
    }
    handleAddQuantity = id => {
        this.props.addQuantity(id);
    }
    handleSubtractQuantity = id => {
        this.props.subtractQuantity(id);
    }
    handleCheckoutClick() {
        this.setState({ checkout: true })
    }
    render() {
        const { items } = this.props
        const { error, loading } = this.props
        if (loading) {
            return (
                <div className="loading">
                    <span>Loading...</span>
                </div>
            )
        }
        if (error) {
            return (
                <div className="error">
                    <span>Error! {error.message}</span>
                </div>

            )
        }
        const addedItems = items.length ?
            (items.map((item, index) => {
                return (
                    <CartItems key={item.id}
                        handleRemove={this.handleRemove}
                        handleAddQuantity={this.handleAddQuantity}
                        handleSubtractQuantity={this.handleSubtractQuantity}
                        item={item}
                        index={index} />
                )
            })
            ) :
            (
                <div className="empty-cart">
                    <span>Empty Cart</span>
                </div>
            )
        return (
            <div className="cart">
                <h1>Shopping Cart</h1>
                {addedItems}
                {items.length ?
                    (<div className="checkout">
                        <h3>Sub Total:  £ {this.props.total.toFixed(2)}</h3>
                        <h3>Discount:  £ {this.props.discount.toFixed(2)}</h3>
                        <h2>Total:  £ {(this.props.total - this.props.discount).toFixed(2)}</h2>
                        <button onClick={() => { this.handleCheckoutClick() }}>CHECK OUT</button>

                        {this.state.checkout ? 
                            <div className="payment">
                                <a href="https://google.com" target="_blank" rel="noopener noreferrer">Sign In </a>
                                <span>or</span>
                                <a href="https://google.com" target="_blank" rel="noopener noreferrer">Sign Up</a>
                            </div> : null}
                    </div>
                    
                    ) : null}

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        total: state.total,
        discount: state.discount,
        loading: state.loading,
        error: state.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => { dispatch(removeFromCart(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)