import React from 'react'
import "../App.css"

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg m-2">
  <div className="container-fluid">
    <a className="navbar-brand text-white nav-a" href="/">TinyURL</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse m-4" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/">About Us</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar