
import React from 'react'
import './Product.css'
import { useStateValue } from '../../StateProvider'
function Product({id, title, description, price, image}) {
const [{basket, sum}, dispatch]=useStateValue()
        const addToBasket = () => {
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id:id,
                    title:title,
                    image:image,
                    price:price,
                    description:description
                }
            })
            alert("Item added to basket")
        }
    return (
        <div className="product">
            <div className="product_info">
            <strong><p>{title}</p></strong>   
                <p className="prodcut_price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <p className="desc">{description}</p>
            </div>
                <div className='product_image' style={{backgroundImage:`url(${image})`}}>
                </div>
                <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}
export default Product

