import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand fw-bold fs-4" href="#">EBRU</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
     
      <li className="nav-item">
          <NavLink className="nav-link" to='/' >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/About' >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/cart' >Cart</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/product/1' >Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/signin'>SignIn</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/signup'>SignUp</NavLink>
        </li>
        


       </ul>
       
   {/* <form className="d-flex" role="search"> */}
  {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
  <button className="btn btn-outline-success" type="submit" to='/signin'>Search</button> 
   <button className="btn btn-outline-success" type="submit" to='/signup'>LogOut</button> 
{/* </form> */}

    </div>
  </div>
</nav>




  )
}
