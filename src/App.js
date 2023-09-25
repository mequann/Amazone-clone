

import "./App.css";
import Header from "./Front-End/Components/Header/Header";
import Home from "./Front-End/Components/Home/Home";

import Checkout from "./Front-End/Check-Out_page/Checkout";
import { Route,  Routes } from "react-router-dom";
import LogIn from "./Front-End/LogIn/LogIn";
// import Product from './Front-End/Components/Product/Product';

function App() {
  return (
 
<div className="App">
    <Header />
        <Routes >
        
        <Route path="/"  element={<Home/>} />
        <Route path="Checkout" element={<Checkout/>}/>
        <Route path="LogIn" element={<LogIn/>}/>
          </Routes>
    </div>
  
  );
}

export default App;
