import React from 'react'
import './Checkout.css'
import Subtotal from '../Subtotal/Subtotal'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from './CheckoutProduct/CheckoutProduct'
function Checkout() {
    const [{basket, authUser}, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                    <img className='checkout_ad' src="https://www.crushpixel.com/big-static14/preview4/homemade-loaf-wheat-bread-baked-1757003.jpg" />
                <div> 
                    <h3>Hi, {authUser?.email.split("@")[0]}. This is your basket</h3>
                <Subtotal />
                    <h2 className='checkout_title'>Shopping Basket</h2>
                    {basket.map(item =>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                    ))}                   
                </div>
            </div>                            
        </div>
    )
}
export default Checkout
