import {  Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./Front-End/Components/Header/Header";
import Home from "./Front-End/Components/Home/Home";
import Check_out from"./Front-End/Check-Out_page/Check_out";


// import Product from './Front-End/Components/Product/Product';

function App() {
  return (
   

    <div className="App">
    <Header />
        <Routes>
        
        <Route path="/" element={<Home/>} />
          
        <Route path="Check_out" element={<Check_out/>}/>
         
       
        </Routes>
    </div>
    
  );
}

export default App;
