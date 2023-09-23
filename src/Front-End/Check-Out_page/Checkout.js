import React from 'react'
import"./Check-out.css"
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from '../ChechoutProduct/CheckoutProduct';
import { useStateValue } from '../Stateprovider/Stateprovider';
function Checkout() {
  // const[{basket},dispatch]=useStateValue()
  return (
    <div className="checkout">
        <div className="checkout__left">
      <img  className="checkout__ad"   
      src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
      <h1>Hello</h1>
      <h3 className="checkout__title">Your shoping Basket</h3>
     {
// basket.map((item)=>(
//   <CheckoutProduct
//   id={item.id}
//   title={item.title}
//   image={item.image}
//   price={item.price}
//   rating={item.rating}
//   />
// ))
     }
     </div>
     <div className="checkout__right">
     <Subtotal />

     </div>
     

    </div>
  )
}

export default Checkout





