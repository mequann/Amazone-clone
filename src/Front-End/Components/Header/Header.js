import React from "react";
import "./Header.css";
// import logo from"../imagges/Amazon-Logo.png"
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Stateprovider/Stateprovider";
import { auth } from "../../../Firebase/Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/" className="header__clearLink">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/logIn"} className="header__clearLink">
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello {user ? user?.email : "Gust"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Signout" : "Sign in"}
            </span>
          </div>
        </Link>

        <Link to="/orders" className="header__clearLink">
          <div className="header__option">
            <span className="header__optionLineOne">Returnes</span>
            <span className="header__optionLineTwo">&Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout" className="header__clearLink">
          <div className="header__optionbasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketcount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
//http://pngimg.com/uploads/amazon/amazon_PNG11.png
