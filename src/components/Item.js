import React from "react"

const Item = ({ item, handleClick }) => {

    return (
        <div className="product fadeInUp" >
            {item.offer ? <div className="offer">offer</div> : null}
            <div className="image">
                <h2>{item.title}</h2>
                <img src={item.img} alt={item.title} />
            </div>
            <div className="content">
                <h4>{item.offer ? item.offer : null}</h4>
                <p>{item.description}</p>
                <h3>{item.currency} {item.price}</h3>
                <button onClick={() => { handleClick(item.id) }}>Add to Cart</button>
            </div>
        </div>
    );
};


export default Item