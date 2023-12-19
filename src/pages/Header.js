// import home from '../../public/images/home1';
import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = ()=> {
    return(
        <header className='header'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to = '/' class="navbar-brand"><img src="/images/logo.png" alt='logo'></img></Link>
            
            
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

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className=" nav navbar-nav ms-auto">
                <li className="nav-item active">
                    <Link to = '/' class="nav-link">SERVICES</Link>
                </li>
                <li className="nav-item">
                    <Link to = '/' class="nav-link">ABOUT US</Link>
                </li>
                <li className="nav-item">
                    <Link to = '/' class="nav-link" > CONTACT US </Link>
                </li>
                <li className="nav-item">
                    <Link to = '/' class="nav-link">CAREERS</Link>
                </li>
                </ul>
              </div>
            </nav>
        </header>
    )
}

export default Header