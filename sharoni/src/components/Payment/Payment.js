import React, { useState, useEffect} from 'react'
import './Payment.css'
import { useStateValue } from '../../StateProvider'
import CheckoutProduct from '../Checkout/CheckoutProduct/CheckoutProduct'
import { Link, useHistory } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from '../../reducer'
import axios from '../../axios'
function Payment() {
    const [{basket, user}, dispatch] = useStateValue()
    const history = useHistory();
    const stripe = useStripe()
    const elements = useElements();
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)
    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])
    console.log("the secret is ... ", clientSecret);
    const handleSubmit = async (event) => {
        // stripe
        event.preventDefault()
        setProcessing(true)
        const payload = await stripe.confirmCardPayment(clientSecret,{ 
            payment_method :{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            // paymentIntent = payment confirmation
            setSucceeded(true)
            setError(null)
            setProcessing(false)
            history.replace('/orders')
        })
    }
    const handleChange = event => { 
    // listens to changes in the cardElement
    // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError=(event.error ? event.error.message : "")
    }
    return (
        <div className="payment">
            <div className="payment_container">
            <h1>
                Checkout (<Link to='/checkout'>{basket?.length} Items</Link>)
            </h1>
                {/* Payment section - delivery address */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                        <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>665 Manor Drive</p>
                        <p>Pacifica, CA</p>
                    </div>
                    </div>
                </div>

            </div>

            <div className="payment_section">
                <div className="payment_title">
                    <h3>Review Item and Delivery</h3>
                </div>
                <div className="payment_items">
                    {basket.map((item) => (
                        <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment_details">
                    {/* Stripe */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className="payment_priceContainer">
                        <CurrencyFormat renderText={(value)=>(
                <>
                    <p>
                        Subtotal ({basket?.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" />This Order contains a gift 
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />
            <button disabled={processing || disabled || succeeded}><span> {processing? <p>Processing</p>: "Buy Now" }</span></button>
            </div>
            {/* errors */}
            {error && <div>{error}</div>}
            </form>
            </div>    
            </div>    
        </div>
    )
}

export default Payment
