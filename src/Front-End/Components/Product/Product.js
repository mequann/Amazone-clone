import React from 'react'
import"./Product.css"
import { useStateValue } from '../../Stateprovider/Stateprovider'
import { Link } from 'react-router-dom'

function Product({id,title,image,price,rating})
 {
   
  const [{basket},dispatch]=useStateValue()
  // console.log("this is the basket ",basket)
  //action that we take

  const addToBasket=()=>{
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        title,
        image,
        rating,
        price,
      }
    })
  }
  return (
    <div className='product'>
       <div className='product__info'>
<p>{title}</p>
<p className='product__price'> 
<small>$</small>
<strong>{price}</strong></p>
<div className='product__rating'>
{Array(rating)
.fill()
.map(()=>(<p>⭐</p>))
}
</div>
       </div>
       <img src={image}
alt=''/>
<button onClick={addToBasket}>Add to basket</button>
<Link to="/Checkout">Hello</Link>
    </div>
    
  )
}

export default Product