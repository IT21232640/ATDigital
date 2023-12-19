// import home from '../../public/images/home1';
import React from 'react'
import './Header.css'

const Header = ()=> {
    return(
        <header className='header'>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#"><img src="/images/logo.png"></img></a>
            
            
            <button
            className="navbar-toggler py-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class=" nav navbar-nav ms-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">SERVICES</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">ABOUT US</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" > CONTACT US </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">CAREERS</a>
                </li>
                </ul>
              </div>
            </nav>
        </header>
    )
}

export default Header