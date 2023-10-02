

import "./App.css";
import Header from "./Front-End/Components/Header/Header";
import Home from "./Front-End/Components/Home/Home";

import Checkout from "./Front-End/Check-Out_page/Checkout";
import { Route,  Routes } from "react-router-dom";
import LogIn from "./Front-End/LogIn/LogIn";
import Payment from "./Front-End/Payment/Payment";
import {loadStripe} from"@stripe/stripe-js"
import {Elements} from'@stripe/react-stripe-js'
import Orders from "./Front-End/Orders/Orders";
import { useStateValue } from "./Front-End/Stateprovider/Stateprovider";
import { useEffect } from "react";
import { auth } from "./Firebase/Firebase";
// import Product from './Front-End/Components/Product/Product';
const promise=loadStripe('pk_test_51NvcAgD6gAjDZKAk2c5Jh9qFcIoeChOlaY6hXmurjN6I96zI2So0wJDNvlfiNJRPXJf4E5Wvb2EXnan0eXBvvLrM00ii2CohCR')
function App() {
  const [{},dispatch]=useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser) {
        dispatch({
          type:'SET_USER',
          user:authUser,
        })
        
      }
      else{
       dispatch({
        type:'SET_USER',
        user:null,
       })
      }
    })
  },[])
  return (
 
<div className="App">
    <Header />
        <Routes >
        
        <Route path="/"  element={<Home/>} />
        <Route path="Checkout" element={<Checkout/>}/>
        <Route path="LogIn" element={<LogIn/>}/>
        <Route path="Orders" element={<Orders/>}/>
        <Route path="/Payment" element={<Elements stripe={promise}><Payment/></Elements>}/>
          </Routes>
    </div>
  
  );
}

export default App;
