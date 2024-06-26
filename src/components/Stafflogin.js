import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function stafflogin() {
 const navigate=useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function Change(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function submit(e) {
    e.preventDefault();
    const result = await axios.post(

      "http://localhost:4000/Stafflogin",

      data
    );
    console.log(result);
    if (result.data.status === 200) {
      alert("Login successful");
      navigate('/')
      console.log("user data",result.data.data);
      localStorage.setItem('staffid',result.data.data._id)
      localStorage.setItem('firstname',result.data.data.firstname)
    
    } else {
      alert("Login failed");
    }
    console.log("result", result);
  }

  return (
    <div class="customerlogin">
      <div
        class="form-control d-flex mx-auto "
        style={{
          width: "33rem",
          height: "28rem",
          marginLeft: "35rem",
          marginTop:"20rem",
          backgroundColor: " rgba(0, 0, 0, 0.326)",
          
        }}
      >
        <form onSubmit={submit}>
          <div class="p-2 w-100">
            {" "}
            <h2
              class="text-center mt-3 mb-3"
              style={{
                marginLeft: "3rem",
                marginTop: "1.5rem",
                color: "white",
                fontFamily:"Acme"
              }}
            >
              LOG IN
            </h2>
          </div>

          <div class="d-flex p-2">
            <label
              class="form-label mt-2 w-50"
              style={{ marginLeft: "1rem", color: "white",fontSize:"1.5rem",fontFamily:"Slabo 27px"}}
            >
              Email:
            </label>
            <input
              class="form-control"
              type="email"
              name="email"
              placeholder="Enter your valid email"
              onChange={Change}
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "5rem",
                width:"18rem",
                backgroundColor:"rgba(240, 255, 255, 0.713)",
              }}
              required
            ></input>
          </div>
          <br />
          <div class="d-flex p-2">
            <label
              class="form-label mt-2 w-50"
              style={{ marginLeft: "1rem", color: "white" ,fontSize:"1.5rem",fontFamily:"Slabo 27px"}}
            >
              Password:
            </label>
            <input
              class="form-control"
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={Change}
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "5rem",
                width:"18rem",
                backgroundColor:"rgba(240, 255, 255, 0.713)",
              }}
              required
            ></input>
          </div>
          <br />

          <br />
          <button
            style={{
              backgroundColor: "Red",
              marginLeft: "14rem",
              color: "black",
              height:"2.5rem",
              width:"6rem",
            }}
          >
            Log in
          </button>
          <br />
          <p style={{ marginLeft: "12rem", marginBottom:"2rem" }}>
            <a href="/StaffForgotPass">Forgot your Password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default stafflogin;