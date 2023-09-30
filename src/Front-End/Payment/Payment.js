import React from "react";
import "./Payment.css";
import { useStateValue } from "../Stateprovider/Stateprovider";
import { Link, useNavigate } from "react-router-dom";
// import Checkout from "../Check-Out_page/Checkout";
import CheckoutProduct from "../ChechoutProduct/CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { useState,useEffect  } from "react";
import axios from "../axios";
import {db} from'../../Firebase/Firebase'

const baseUrl= "http://127.0.0.1:5001/clone-9e0f3/us-central1/api"

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate=useNavigate()
  const Elements = useElements();
  const stripe = useStripe();
  const [error, setError] = useState(null);
  const [disabled, setDisapled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setprocessing] = useState("");
  const [clientSecret,setClientSecret]=useState(true)
  function getBasketTotlal(basket) {
    basket?.reduce((amount, item) => item.price + amount, 0);
    // console.log( basket?.reduce((amount,item)=>item.price+amount,0))
  }
  useEffect(()=>{
    const getClientSecret=async()=>{
        const response=await fetch({
            method:"post",
        url:baseUrl+`/payments/create?total=${getBasketTotlal(basket)*100}`
        })
        setClientSecret(response.clientSecret)
      };
      getClientSecret();
  },[basket])
  console.log('theclientSecret is',clientSecret)


  const haldleSubmit = async(e) => {
    e.preventDefault()
    setprocessing(true)
    const payload = await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:Elements.getElement(CardElement)
        }
    }).then(({paymentIntent})=>{//payment intent=payment confirmetion
        setSucceeded(true);
        setError(null);
        setprocessing(false);
        db.collection('users')
        .doc(user?.id)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket:basket,
          amount:paymentIntent.amount,
          created:paymentIntent.created,

        })
        dispatch({
          type:"EMPTY_BASKET"
        })
        navigate("/order")
    })

  }
 
  const haldleChange = (event) => {
    setDisapled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment__section">
      <div className="payment__container">
        <h1>
          checkout(<Link to="/Checkout">{basket?.length} ithems</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>1234 React App </p>
            <p>A.A Ethiopia </p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3> Review items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket?.map((item) => (
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
        <div className="payment__section">
          <div className="payment__title">
            <h3> payment Method</h3>
            <div className="payment__details">
              <form onSubmit={haldleSubmit}>
                <CardElement onChange={haldleChange} />
                <div className="payment__container">
                  <CurrencyFormat
                    renderText={(value) => <h3>Order Total: {value} </h3>}
                    decimalScale={2}
                    value={getBasketTotlal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button disabled={processing || disabled || succeeded} >
                    <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                  </button>
                </div>
                {error &&<div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
