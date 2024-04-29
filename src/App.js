import React from "react";
import {BrowserRouter,Routes, Route } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import CustomerForgotPass from "./components/CustomerForgotpass";

import Customerlogin from "./components/CustomerLogin";

import Adminlogin from "./components/Adminlogin"

import  CustomerRegistration from"./components/CustomerRegistration"
import "./components/CustomerRegistration.css"



// import logo from './logo.svg';
// import './App.css';
// import Landingpage1 from"./components/Landingpage1"
// import "./components/Landingpage1.css"
// import Landingpage from "./components/Landingpage"
// import "./components/Landingpage.css"

// import HomePage from "./components/Homepage";
// import "./components/Homepage.css"



function App() {
  return (
    <div className="App">

     <BrowserRouter>
     
      <Routes>
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
