import React from 'react'

function Landingpage1() {
  
  return (
    <scroll>
    <div className='nav'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary " id="nav1"  >
        <div class="container-fluid">
          <a class="navbar-brand">
            NILA RESTAURANT
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item" >
                
                <a  class="nav-link " href="/" style={{color:'black'}}>HOME</a>
              </li>
              <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Customer Registration
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/CustomerRegistration">Registration</a></li>
            <li><a class="dropdown-item" href="/Customerlogin">Login</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Staff Registation
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/StaffRegistration">Registration</a></li>
            <li><a class="dropdown-item" href="/Stafflogin">Login</a></li>
          </ul>
        </li>
              <li class="nav-item">
              <a class="nav-link " href="#" style={{color:'black'}}>MENU</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search" 
                style={{color:'transparent'}}
              />
              <button class="btn btn-outline-success" type="submit" style={{color:'black'}}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
    </scroll>

  );
}

export default Landingpage1