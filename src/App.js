import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from'./components/Navbar';
import Addfood from './components/Addfood';
import Viewfood from './components/Viewfood';
import StafReg from'./components/StafReg';
import Reg from'./components/Reg.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Addfood/>
      <Viewfood/>
      <StafReg/>
      {/* <Staffregister/> */}
      <BrowserRouter>
      <Routes> 
        
        <Route path="/Navbar" element={<Navbar/>}/>
         <Route path="/Addfood" element={<Addfood/>}/> 
         <Route path="/Viewfood" element={<Viewfood/>}/>
         <Route path="/StafReg"element={<StafReg/>}/> 
</Routes>
</BrowserRouter>
      
    </div>
  );
}

export default App;
