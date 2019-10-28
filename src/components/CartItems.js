import React from "react"

const CartItems = ({ item, handleAddQuantity, handleSubtractQuantity, handleRemove }) => {

    return (
        <div className="card">
            <div className="quantity">
                <span onClick={() => { handleAddQuantity(item.id) }}>+</span>
                {item.quantity}
                <span onClick={() => { handleSubtractQuantity(item.id) }}>-</span>
            </div>
            <div className="image">
                <img src={item.img} alt={item.title} />
            </div>
            <div className="content">
                <h2>{item.title}</h2>
                <h3>{item.currency} {(item.quantity * item.price).toFixed(2)}</h3>
                <h4>{item.offer && item.quantity > 2 && item.offer === "Tree for two" ? "👍 Offer complete" : item.offer && item.quantity > 1 && item.offer === "2 for £1.00" ? "👍 Offer complete" : item.offer}</h4>
                <button onClick={() => { handleRemove(item.id) }}>x</button>
            </div>
        </div>
    )
}

export default CartItems