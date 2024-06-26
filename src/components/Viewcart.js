import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Viewcart() {
  const [state, setState] = useState([]);
  const navigate = useNavigate();
  let total = 0;
  let userid = localStorage.getItem("userid");
  const fetchCart = async () => {
    const response = await axios.post(
      `http://localhost:4000/viewcart/${userid}`
    );
    console.log(response.data.result);
    setState(response.data.result);
  };
  useEffect(() => {
      fetchCart();
  }, []);

  const handleDelete =async (id) => {
   const res = await axios
    .post(`http://localhost:4000/deletecartitem/${id}`)
   
      console.log(res);
      if (res.data.status === 200) {
        window.location.reload(false);
        console.log(res.data.msg);
      } else {
        console.log(res.data.msg);
      }
    
  };

  const handleCheckout =async () => {
    const res=await axios
        .post("http://localhost:4000/addorder", { state: state })
        // .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            navigate("/Payment");
            console.log(res.data);
          } else {
            alert(res.data.msg);
          }
        // })
        // .catch((err) => {
        //   console.log(err);
        // }); 
  };

  return (
    <div className="mt-5">
      {userid ? (
        <ul
          style={{ listStyleType: "none", width: "56rem" }}
          className="p-5 pt-0 mx-auto"
        >
          {state.map((x) => (
            <li
              key={x._id}
              className="d-flex justify-content-between shadow-lg p-3 bg-body-tertiary rounded mb-4 container-fluid"
              onChange={(total = total + x.count * x.foodid.price)}
            >
              <img
                src={`http://localhost:4000/${x.foodid.image}`}
                className="img-fluid"
                alt="..."
                style={{ width: "8rem", height: "8rem" }}
              />
              <div>
                <h3 className="mt-2 ms-3">{x.foodid.foodname}</h3>
                <div className="d-flex mt-5 ms-3">
                  <h5 className="me-5">
                    Food price:{" "}
                    <span className="ms-1">
                      {x.count} x {x.foodid.price} = {"\u20B9"}{" "}
                      {x.count * x.foodid.price}
                    </span>
                  </h5>
                  <h5 className="me-5 ms-3">
                    Quantity: <span className="ms-1">{x.count}</span>
                  </h5>
                </div>
              </div>
              <button
                onClick={() => handleDelete(x._id)}
                style={{ height: "2.5rem" }}
                className="mt-5 btn btn-danger"
              >
                delete item
              </button>
            </li>
          ))}
          {total ? (
            <div>
              <p className="mt-3 mb-3 me-4 text-end fs-5 fw-semibold">
                Total :{" "}
                <span>
                  {"\u20B9"} {total}
                </span>
              </p>
              <div className="d-grid me-3 justify-content-md-end">
                <button
                  className="btn btn-success me-md-2"
                  onClick={handleCheckout}
                >
                  Check out
                </button>
              </div>
            </div>
          ) : (
            <h3 className="mt-5 mb-3 me-4 text-center fs-3 fw-semibold">
              Cart is empty
            </h3>
          )}
        </ul>
      ) : (
        <p className="mt-5 mb-3 me-4 text-center fs-3 fw-semibold">
          Please login to view the cart
        </p>
      )}
    </div>
  );
}

export default Viewcart;
