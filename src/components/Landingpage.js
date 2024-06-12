import React from 'react';
import "../components/Landingpage.css"
import { Link, useNavigate } from 'react-router-dom';

function Landingpage1() {
  const navigate = useNavigate();
  let userid = localStorage.getItem('userid');
  let customers = localStorage.getItem('firstname');
  let staffid = localStorage.getItem('staffid');
  let newstaffs = localStorage.getItem('firstname');
  console.log(customers);

  const handleCustomerLogout = () => {
    localStorage.removeItem("userid");
    localStorage.removeItem("firstname");
    alert("You have logged out");
    navigate("/");
  };

  const handleStaffLogout = () => {
    localStorage.removeItem("staffid");
    localStorage.removeItem("firstname");
    alert("You have logged out");
    navigate("/");
  };
  
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: "black" }}>
            NILA RESTAURANT
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {userid ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/ViewOrders">
                      View Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Viewfood">
                      Menu Items
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      id="navbarDropdownCustomer"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {customers}
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownCustomer">
                      <li>
                        <Link className="dropdown-item" onClick={handleCustomerLogout} to="/">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : staffid ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Stafforders">
                      View Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Staffviewfood">
                      Menu Items
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      id="navbarDropdownStaff"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {newstaffs}
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownStaff">
                      <li>
                        <Link className="dropdown-item" onClick={handleStaffLogout} to="/">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdownRegister"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Registration
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownRegister">
                      <li>
                        <Link className="dropdown-item" to="/CustomerRegistration">
                          Customer
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/StaffRegistration">
                          Staff
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdownLogin"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Login
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownLogin">
                      <li>
                        <Link className="dropdown-item" to="/Stafflogin">
                          Staff
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/CustomerLogin">
                          Customer
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/AdminLogin">
                          Admin
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Landingpage1;
