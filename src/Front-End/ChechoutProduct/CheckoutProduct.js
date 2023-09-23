import React from 'react'
import"./CheckoutProduct.css"
import { useStateValue } from '../Stateprovider/Stateprovider'

function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch]=useStateValue()
    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BSKET",
            id:id
        })
        }

    
  return (
    <div className='checkoutProduct'>
        <img src={image} alt='' className='checkoutProduct__image'/>
        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <button onClick={removeFromBasket}>move from basket</button>

        </div>
        <div className='checkoutProduct__rating'>
            {Array(rating).fill()
            .map(()=>(
                <p>⭐</p>
            )
            )}
        </div>
       
    </div>
  )
}

export default CheckoutProduct