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


function App() {
  return (
    <div className="App">
      {/* <Landingpage1/>
      // {/* // <Landingpage/> */} 
      <CustomerRegistration/>    
      {/* <HomePage/> */}

    </div>
  );
}

export default App;
