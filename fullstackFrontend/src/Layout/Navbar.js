import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
  <Link className="navbar-brand " to={"/"}>Employee Management System</Link>
  <button className="navbar-toggler" 
  type="button" 
  data-toggle="collapse" 
  data-target="#navbarSupportedContent" 
  aria-controls="navbarSupportedContent" 
  aria-expanded="false" 
  aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <Link className="btn btn-outline-light" to="/adduser">Add Employee</Link>

    </div>
    </nav>
  )
}
