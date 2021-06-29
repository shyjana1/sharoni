import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../../../StateProvider'
function CheckoutProduct({id, image, title, price,rating, }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
    <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} />
        <div className="checkoutProduct__info">
            <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <button onClick={removeFromBasket}>Remove Item</button>
        </div>
    </div>
    )
}

export default CheckoutProduct
