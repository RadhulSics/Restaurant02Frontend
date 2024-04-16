<<<<<<< HEAD
// import logo from './logo.svg';
// import './App.css';
import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
// import Landingpage1 from"./components/Landingpage1"
// import "./components/Landingpage1.css"
// import Landingpage from "./components/Landingpage"
// import "./components/Landingpage.css"
import  CustomerRegistration from"./components/CustomerRegistration"
import "./components/CustomerRegistration.css"
// import HomePage from "./components/Homepage";
// import "./components/Homepage.css"
=======
import React from "react";
import {BrowserRouter,Routes, Route } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import CustomerForgotPass from "./components/CustomerForgotpass";

import Customerlogin from "./components/CustomerLogin";

import Adminlogin from "./components/Adminlogin"



>>>>>>> 424746d3c52afca12b712d0cfc7da9bcbbbfa9ca


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Landingpage1/>
      // {/* // <Landingpage/> */} 
      <CustomerRegistration/>    
      {/* <HomePage/> */}
=======
     <BrowserRouter>
     
      <Routes>
        <Route path="/CustomerForgotpass" element={<CustomerForgotPass/>}/>
        <Route path="/Customerlogin" element={<Customerlogin/>}/>
        <Route path="/Adminlogin" element={<Adminlogin/>}/>
     </Routes>
     </BrowserRouter>
>>>>>>> 424746d3c52afca12b712d0cfc7da9bcbbbfa9ca

    </div>
  );
}

export default App;
