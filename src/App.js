import React from "react";
import {BrowserRouter,Routes, Route } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import CustomerForgotPass from "./components/CustomerForgotpass";

import Customerlogin from "./components/CustomerLogin";

import Adminlogin from "./components/Adminlogin"

import  CustomerRegistration from"./components/CustomerRegistration"
import "./components/CustomerRegistration.css"

import Stafflogin from "./components/Stafflogin";

import StaffForgotPass from "./components/StaffForgotPass";





function App() {
  return (
    <div className="App">

     <BrowserRouter>
     
      <Routes>
        <Route path="/CustomerRegistration" element={<CustomerRegistration/>}/>
        <Route path="/CustomerForgotpass" element={<CustomerForgotPass/>}/>
        <Route path="/Customerlogin" element={<Customerlogin/>}/>
        <Route path="/Adminlogin" element={<Adminlogin/>}/>
        <Route path="/Stafflogin" element={<Stafflogin/>}/>
        <Route path="/StaffForgotPass" element={<StaffForgotPass/>}/>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
