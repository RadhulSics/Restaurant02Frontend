<<<<<<< HEAD
=======

>>>>>>> 0dee4692489cb7838543219908af6218b58dc2ab
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

import StaffRegistarion from "./components/StaffRegistartion";

<<<<<<< HEAD
=======
import  CustomerRegistration from"./components/CustomerRegistration"
import "./components/CustomerRegistration.css"

import Stafflogin from "./components/Stafflogin";

import StaffForgotPass from "./components/StaffForgotPass";
>>>>>>> 0dee4692489cb7838543219908af6218b58dc2ab




function App() {
  return (
    <div className="App">

<<<<<<< HEAD
=======

>>>>>>> 0dee4692489cb7838543219908af6218b58dc2ab
     <BrowserRouter>
    <Landingpage/>
      <Routes>
<<<<<<< HEAD
       
        <Route path="/" element={<Landingpage1/>}/>
=======
>>>>>>> 0dee4692489cb7838543219908af6218b58dc2ab
        <Route path="/CustomerRegistration" element={<CustomerRegistration/>}/>
        <Route path="/CustomerForgotpass" element={<CustomerForgotPass/>}/>
        <Route path="/Customerlogin" element={<Customerlogin/>}/>
        <Route path="/Adminlogin" element={<Adminlogin/>}/>
<<<<<<< HEAD
        <Route path="/StaffRegistration" element={<StaffRegistarion/>}/> 
        
        

     </Routes>
     </BrowserRouter>

=======
        <Route path="/Stafflogin" element={<Stafflogin/>}/>
        <Route path="/StaffForgotPass" element={<StaffForgotPass/>}/>
     </Routes>
     </BrowserRouter>
>>>>>>> 0dee4692489cb7838543219908af6218b58dc2ab


      
    </div>
  );
}

export default App;
