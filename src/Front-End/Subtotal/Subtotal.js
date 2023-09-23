import React from 'react'
import CurrencyFormat from 'react-currency-format';
import"./Subtotal.css"
import { useStateValue } from '../Stateprovider/Stateprovider';

function Subtotal() {
  // const [{basket},dispatch]=useStateValue()
  // function getBasketTotlal(basket){
  //   basket?.reduce((amount,item)=>item.price+amount,0)
  // }
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(
            <div className=''>
                <p>
                {/* Subtotal({basket.length} items):<strong>{value}</strong> */}
                </p>
                <small className='subtotal__gift'>
                <input type="checkbox"/>This order contains a gift
                </small>
               
            </div>
              
        )
    }
      
         decimalScale={2}
        //  value={getBasketTotlal(basket)}
         displayType={'text'}
         thousandSeparator={true}
         prefix={"$"}
        />
        <button> proceed to checkout</button>
    </div>
  )
}

export default Subtotal