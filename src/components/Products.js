import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import Item from './Item'

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            added: false
        }
    }
    handleClick = id => {
        this.props.addToCart(id);
        this.setState({ added: true })
        this.added = setTimeout(
            () => this.setState({ added: false }),
            3000
        )
    }
    render() {
        const { items } = this.props
        const { added } = this.state
        const itemList = items.map(item => {
            return (
                <Item key={item.id}
                    handleClick={this.handleClick}
                    item={item} />
            )
        })
        return (
            <div className="products">
                <div className={added ? "added active" : "added"}>Item added to shoping cart</div>
                {itemList}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
        addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)