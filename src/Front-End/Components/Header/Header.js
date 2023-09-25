import React from "react";
import "./Header.css";
// import logo from"../imagges/Amazon-Logo.png"
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link} from "react-router-dom";
import { useStateValue } from "../../Stateprovider/Stateprovider";

function Header() {
  const [{ basket}, dispatch] = useStateValue();
  return (
    <div className="header">
     <Link to="/">
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
        <div className="header__option">
          <span className="header__optionLineOne">Hello Gust</span>
          <span className="header__optionLineTwo">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returnes</span>
          <span className="header__optionLineTwo">&Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="Check_out">
          <div className="header__optionbasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketcount">{basket.length}</span>
          </div>
        </Link>
        
      </div>
    </div>
  );
}

export default Header;
//http://pngimg.com/uploads/amazon/amazon_PNG11.png
