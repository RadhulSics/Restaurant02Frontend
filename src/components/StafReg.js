import axios from 'axios'
import React, { useState } from "react";

function Projectreg() {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
    email: "",
    gender: "",
    condition: "",
  });
  function Change(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }
 async function Submit(e) {
    e.preventDefault();
    console.log(state);
    if (state.password !== state.confirmpassword) {
      alert("Password not matched");
    } else {
      alert("You registered succesfully");
      const result=await axios.post("http://localhost:3000/Register",state)
      console.log("result",result);
    }
  }
  return (
    <div class=" Projectregmaindiv ">
    <div class=" container1   ">
      <form onSubmit={Submit}>
      <h1>Create Your Account</h1>
        <div class="label">
          <label class="form-label mt-2 w-50">Firstname:</label>
          <input
            class="form-control"
            type="text"
            name="firstname"
            onChange={Change}
            required
          ></input>
        
          <label class="form-label mt-2 w-50">Lastname:</label>
          <input
            class="form-control"
            type="text"
            name="lastname"
            onChange={Change}
            required
          ></input>
       
          <label class="form-label mt-2 w-50">Password:</label>
          <input
            class="form-control"
            type="password"
            name="password"
            onChange={Change}
            required
          ></input>
        
          <label class="form-label mt-2 w-50">ConfirmPassword:</label>
          <input
            class="form-control"
            type="password"
            name="confirmpassword"
            onChange={Change}
            required
          ></input>
          <label class="form-label mt-2 w-50">Email:</label>
          <input
            class="form-control"
            type="email"
            name="email"
            onChange={Change}required></input>
          <label class="d-flex p-2">Gender:</label>
          <label class="gender">Male<input type="radio" name="gender" onChange={Change}required></input>{" "}</label>
         <label class="gender">Female<input type="radio" name="gender" onChange={Change}required></input>{" "}</label> 
        </div>
        <div class="text-center mt-3 mb-3">
          <input
            type="checkbox"
            name="condition"
            onChange={Change}
            required
          ></input>
          <label>I accept Terms and condition</label><br/>
          <button  onClick={Change} className='btn btn-primary' type="Register">Register</button><br/>
          <p>already have an account?<a href="/Customerlogin">Log in</a></p>
        </div>
      </form>
    </div>
    </div>
  );
}
export default Projectreg;