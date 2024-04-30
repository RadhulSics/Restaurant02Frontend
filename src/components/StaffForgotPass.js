import axios from "axios";
import React, { useState } from "react";



function StaffForgotPass() {
  const [Data, setData] = useState({
    email: "",
    newpassword: "",
    confirmnewpassword: "",
  });
  const handleChange = (a) => {
    setData({ ...Data, [a.target.name]: a.target.value });
  };
  
  const handleSubmit = (a) => {
    a.preventDefault();
    console.log(Data);
    if (Data.newpassword !== Data.confirmnewpassword) {
      alert("Password and Confirm password must be same");
    } else {
      axios
      .post("http://localhost:3000/staffForgotPass",Data)
      .then((res)=>{
        console.log(res);
        if(res.data.status === 200){
        alert(res.data.msg);
        }
        else{
          alert(res.data.msg);
        }
      })
      .catch((err)=>{
        console.log(err);
      });
    }
  };
  return (
    <div class="forgotpasswordmaindiv" >
    <div
      class="form-control d-flex mx-auto "
      style={{
        width: "45rem",
        height: "32rem",
        marginLeft: "35rem",
        marginTop:"16rem",
        backgroundColor: "rgba(0, 0, 0, 0.326)",
        fontSize:"1.5rem"
      }}
    >
      
      <form onSubmit={handleSubmit}>
        <div class="p-2 w-100">
          {" "}
          <h2
            class="text-center mt-3 mb-3"
            style={{ marginLeft: "3rem", marginBottom: "3rem",color:"white",fontFamily:"Acme"}}
          >
           Staff Reset Password
          </h2>
        </div>

        <div class="d-flex p-2">
          <label
            class="form-label mt-2 w-50"
            style={{ marginLeft: "1rem" ,color:"white",fontFamily:"Slabo 27px"}}
          >
            Email:
          </label>
          <input
            class="form-control"
            type="email"
            name="email"
            placeholder="Enter your valid email"
            onChange={handleChange}
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "5rem",
              width:"26rem",
              backgroundColor:"rgba(240, 255, 255, 0.713)",
            }}
            required
          ></input>
        </div>
        <br />
        <div class="d-flex p-2">
          <label
            class="form-label mt-2 w-50"
            style={{ marginLeft: "1rem" ,color:"white",fontFamily:"Slabo 27px"}}
          >
            Set New Password:
          </label>
          <input
            class="form-control"
            type="password"
            name="newpassword"
            placeholder="Enter your new password"
            onChange={handleChange}
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "5rem",
              width:"26rem",
              backgroundColor:"rgba(240, 255, 255, 0.713)",
            }}
            required
          ></input>
        </div>
        <br />

        <div class="d-flex p-2">
          <label
            class="form-label mt-2 w-50"
            style={{ marginLeft: "1rem" ,color:"white",fontFamily:"Slabo 27px"}}
          >
            Confirm New Password:
          </label>
          <input
            class="form-control"
            type="password"
            name="confirmnewpassword"
            placeholder="Re-enter your new password"
            onChange={handleChange}
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "5rem",
              width:"26rem",
              backgroundColor:"rgba(240, 255, 255, 0.713)",
            }}
            required
          ></input>
        </div>
        <br />
        <button
          style={{
            backgroundColor: "Red",
            marginLeft: "18rem",
            marginTop:"1rem",
            color: "black",
            height:"3rem"
          }}
        >
          Change
        </button>
        <br />
      </form>
    </div>
    </div>
  );
}

export default StaffForgotPass;