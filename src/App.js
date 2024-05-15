
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

import Editfood from "./components/Editfood";
 import Editfooddetails from "./components/Editfooddetails";

 import ViewOrders from "./components/ViewOrders";
import Customerorders from "./components/Customerorders";
 import Viewcart from "./components/Viewcart";
 import Stafforders from "./components/Stafforders";
import Viewfood from "./components/Viewfood";
import Addfood from "./components/Addfood";
import Staffviewfood from "./components/Staffviewfood";
import Payment from "./components/Payment"




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
        <Route path="/Editfooddetails/:id" element={<Editfooddetails/>}/>
        

         <Route path="/Editfood" element={<Editfood/>}/> 
         <Route path="/Editfooddetails:id" element={<Editfooddetails/>}/> 
        <Route path="/ViewOrders" element={<ViewOrders/>}/>
        <Route path="/Customerorders" element={<Customerorders/>}/>
        <Route path="/Viewcart" element={<Viewcart/>}/>
        <Route path="/Stafforders" element={<Stafforders/>}/>
        <Route path="/Viewfood" element={<Viewfood/>}/>
        <Route path="/Addfood" element={<Addfood/>}/>
        <Route path="/Staffviewfood" element={<Staffviewfood/>}/>
        <Route path="/Payment" element={<Payment/>}/>
     </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
