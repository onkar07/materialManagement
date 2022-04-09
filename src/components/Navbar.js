import React from 'react'
import logosws from '../img/wre.png'
import './navbar.css'
function Navbar() {
  return (
    <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src={logosws} alt="" width="30" height="24" class="d-inline-block align-text-top"></img>
        <span className='navName'>Rashtrakul Kusti Sankul</span>
      </a>
    </div>
  </nav>
  )
}

export default Navbar