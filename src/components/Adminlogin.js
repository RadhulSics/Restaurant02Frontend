import React, { useState } from 'react'

import "../components/Adminlogin.css"

const username="Admin@123";
const password="@123";
export default function Form() {
    const[Form,setForm]=useState({
        username:"",
        password:"",
      })
      const Handlechange=(a)=>{
        setForm({...Form,[a.target.name]:a.target.value})
      }
      const Onsubmitchange=(event)=>{
        event.preventDefault()
        console.log(Form);
        if(username === Form.username && password === Form.password){
          alert("Login Successfully")
        }
        else if(Form.username !== username && Form.password !== password){
          alert("incorrect username")
        }
        else{
          alert("user not found")
        }
      }
  return (
    <div class="customerlogin">
      <div
        class="form-control d-flex mx-auto "
        style={{
          width: "37rem",
          height: "25rem",
          marginLeft: "35rem",
          marginTop:"20rem",
          backgroundColor: " rgba(0, 0, 0, 0.326)",
          
        }}
      >
        <form onSubmit={Onsubmitchange}>
          <div class="p-2 w-100">
            {" "}
            <h2
              class="text-center mt-3 mb-3"
              style={{
                marginLeft: "3rem",
                marginTop: "1.5rem",
                color: "white",
              }}
            >
            ADMIN LOGIN
            </h2>
          </div>

          <div class="d-flex p-2">
            <label
              class="form-label mt-2 w-50"
              style={{ marginLeft: "1rem", color: "white",fontSize:"1.5rem"}}
            >
              username
            </label>
            <input
              class="form-control"
              type="username"
              name="username"
              placeholder="Enter your valid username"
              onChange={Handlechange}
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "5rem",
                width:"22rem",
                backgroundColor:"rgba(240, 255, 255, 0.713)",
              }}
              required
            ></input>
          </div>
          <br />
          <div class="d-flex p-2">
            <label
              class="form-label mt-2 w-50"
              style={{ marginLeft: "1rem", color: "white" ,fontSize:"1.5rem"}}
            >
              Password:
            </label>
            <input
              class="form-control"
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={Handlechange}
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "5rem",
                width:"22rem",
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
              marginLeft: "15rem",
              color: "black",
              height:"2.5rem",
              width:"6rem",
            }}
          >
            Log in
          </button>
          <br/>
        </form>
      </div>
    </div>
  );
}