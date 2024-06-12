import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Stafforderconfirm() {
  const [state, setState] = useState({});
  let stafid = localStorage.getItem("staffid");
  const navigate = useNavigate();
  const foodId=useParams()

  const [staffcartdata, setStaffcartdata] = useState({
    customername: "",
  });
console.log(state)
  const fetchstaffCart = async () => {
    const response = await axios.post(
      `http://localhost:4000/viewmenuById/${foodId.id}`
    );
    console.log(response.data.result);
    setState(response.data.result);
  };
  useEffect(() => {
    fetchstaffCart();
  },[]);

  const handleCancel = (id) => {
    axios
      .post(`http://localhost:4000/staffdeletecartitem/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          alert("Payment Cancelled");
          navigate("/staffviewfood");
        } else {
          console.log(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePlaceorder = (id) => {
    if(staffcartdata.customername){
        axios
        .post(`http://localhost:4000/staffaddorder/${staffcartdata.customername}`,{state:state})
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            alert(res.data.msg)
          } else {
            alert(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
        axios
        .post(`http://localhost:4000/staffdeletecartitem/${id}`)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            alert("Order successfull");
            navigate("/staffviewfood");
          } else {
            console.log(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else{
        alert("Invalid Customer name")
    }   
  };

  return (
    <div className="mt-5">
        <ul
          style={{ listStyleType: "none", width: "30rem" }}
          className="p-5 pt-0 mx-auto"
        >
          <h4 className="text-center">Ordered Details</h4>
            <div>
              <li
                className="justify-content-center shadow-lg p-3 bg-body-tertiary rounded mb-4 container-fluid"
              >
                <div className="d-flex mb-3 justify-content-center">
                  <label className="form-label mt-1 fw-semibold">
                    {/* Customer name :{ state.customername} */}
                  </label>
                  <input
                    className="form-control ms-1"
                    placeholder="Enter Customer name"
                    style={{ width: "13rem" }}
                    name="customername"
                    count="count"
                    onChange={(a) =>
                        setStaffcartdata({
                            ...staffcartdata,
                            [a.target.name]: a.target.value,
                          })
                    }
                  ></input>
                </div>
                <img
                  src={`http://localhost:4000/${state.image}`}
                  className="img-fluid"
                  alt="..."
                  style={{ width: "100%", height: "14rem" }}
                />
                <div>
                  <h3 className="mt-3 text-center">
                    Foodname: {state.foodname}
                  </h3>
                  <div className=" mt-3">
                    <h5 className="text-center">
                      Quantity: <span className=""><select
                    name="count"
                    onChange={(a) => {
                        setStaffcartdata({
                            ...staffcartdata,
                            [a.target.name]: a.target.value,
                          });
                      state.amount=state.price*a.target.value;
                    }}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </select></span>
                    </h5>
                    {/* <h5 className=" text-center">
                      Food price:{" "}
                      <span className="ms-1">
                        {state.amount} x {state.price} = {"\u20B9"}
                        {state.amount * state.price}
                      </span>
                    </h5> */}
                  </div>
                </div>
              </li>
              <div>
                <p className="mt-3 mb-3 text-center fs-5 fw-semibold">
                  Total :{""}
                  <span>
                    {"\u20B9"} 
                    {(state.amount)?(state.amount):(state.price)}
                  </span>
                </p>
                <div className="d-grid mb-3 justify-content-center">
                  <button
                    className="btn btn-success"
                    onClick={() => handlePlaceorder(state._id)}
                  >
              
                    Place Order
                  </button>
                  
                </div>
                <div className="d-grid justify-content-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleCancel(state._id)}
                  >
                    Cancel order
                  </button>
                </div>
              </div>
            </div>
          
        </ul>
      {/* ) : (
        <p>unable to buy the food</p>
      )} */}
    </div>
  );
}

export default Stafforderconfirm;
