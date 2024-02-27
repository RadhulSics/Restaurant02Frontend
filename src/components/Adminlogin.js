import React, { useState } from 'react'

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
        alert("Successfully submitted")
      }
  return (
    <div className='login'>
      <center>
        
      <form onSubmit={Onsubmitchange}>
      <h1>Admin Login</h1>
          <div class='user'> Username:<input type="text" placeholder="username" name="username" onChange={Handlechange} required/><br></br></div>
           <div class='pass'> password:<input type="password" placeholder="password"  onChange={Handlechange} required/><br></br></div>
           <div class='label'><input type="checkbox" name="condition" onChange={Handlechange} required></input>I accept Terms and condition</div>
           <div class='butt'><button>login</button></div>

      </form>
      </center>
      </div>
  )  
}