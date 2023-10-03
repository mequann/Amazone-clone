import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "../Stateprovider/Stateprovider";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const navigate = useNavigate();
  const getBasketTotlal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
    // console.log( basket?.reduce((amount,item)=>item.price+amount,0))
  };

  return (
    <div className="subtotal">
      {/* {console.log(getBasketTotlal(basket))} */}

      <CurrencyFormat
        renderText={(value) => (
          <div className="">
            <p>
              Subtotal({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotlal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => navigate("/Payment")}>
        {" "}
        proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
