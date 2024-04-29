import React from "react";
import {BrowserRouter,Routes, Route } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import Landingpage from "./components/Landingpage"

import Landingpage1 from "./components/Landingpage1"

import  CustomerRegistration from"./components/CustomerRegistration";

import CustomerForgotPass from "./components/CustomerForgotpass";

import Customerlogin from "./components/CustomerLogin";

import Adminlogin from "./components/Adminlogin";








function App() {
  return (
    <div className="App">

     <BrowserRouter>
    <Landingpage/>
      <Routes>
       
        <Route path="/" element={<Landingpage1/>}/>
        <Route path="/CustomerRegistration" element={<CustomerRegistration/>}/>
        <Route path="/CustomerForgotpass" element={<CustomerForgotPass/>}/>
        <Route path="/Customerlogin" element={<Customerlogin/>}/>
        <Route path="/Adminlogin" element={<Adminlogin/>}/>
        
        

     </Routes>
     </BrowserRouter>


    </div>
  );
}

export default App;
