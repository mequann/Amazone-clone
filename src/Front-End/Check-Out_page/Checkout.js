import React from 'react'
import"./Check-out.css"
import Subtotal from "../Subtotal/Subtotal";
function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout__left">
      <img  className="checkout__ad"   
      src="https://m.media-amazon.com/images/I/61cL+M-SN+L._AC_SX355_.jpg" alt=""/>
      <h1>Hello</h1>
      <h3 className="checkout__title">Your shoping Basket</h3>
     </div>
     <div className="checkout__right">
     <Subtotal  renderText/>

     </div>

    </div>
  )
}

export default Checkout





