
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

import Stafflogin from "./components/Stafflogin";

import StaffForgotPass from "./components/StaffForgotPass";


import Adminaddmenu from "./components/Adminaddmenu";
import Admindashboard from "./components/Admindashboard";


import Adminviewmenu from "./components/Adminviewmenu";

import Viewfood from "./components/Viewfood";

import Editfood from "./components/Editfood";





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
        <Route path="/Adminaddmenu" element={<Adminaddmenu/>}/>
        <Route path="/Admindashbord" element={<Admindashboard/>}/>

        <Route path="/StaffRegistration" element={<StaffRegistarion/>}/> 
       
      
        <Route path="/Stafflogin" element={<Stafflogin/>}/>
        <Route path="/StaffForgotPass" element={<StaffForgotPass/>}/>
        <Route path="/Adminviewmenu" element={<Adminviewmenu/>}/>
        <Route path="/Editfood" element={<Editfood/>}/>
        

     </Routes>
     </BrowserRouter>



      
    </div>
  );
}

export default App;
