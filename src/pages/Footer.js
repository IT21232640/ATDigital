// import home from '../../public/images/home1';
import React from 'react'
import './Footer.css'

const Footer = ()=> {
    return(
        <footer className='footer'>
            <div class="text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 my-5">
          <h6 class="text-uppercase fw-bold mb-4">
            <img src="/images/logo.png" alt='logo'></img>
          </h6>
          <p>
          Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
          </p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 my-5">
          <h6 class="text-uppercase fw-bold mb-4">
            Our Technoligies
          </h6>
          <p>
            ReactJS
          </p>
          <p>
            Gatsby
          </p>
          <p>
            NextJS
          </p>
          <p>
            NodeJS
          </p>
          <p>
            GraphQL
          </p>
          <p>
            Laravel
          </p>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 my-5">
          <h6 class="text-uppercase fw-bold mb-4">
            Our Services
          </h6>
          <p>
            Social media Marketing
          </p>
          <p>
            Web & Mobile App Development
          </p>
          <p>
            Data & Analytics
          </p>
          <p>
            Google Marketing solutions
          </p>
          <p>
            Search Engine Optimization
          </p>
        </div>
        
      </div>
    </div>

    <div class="text-center p-4">
        <hr></hr>
        <div className='row'>
          <div className='col-xl-6 text-end'>
            <p>Privacy Policy</p>
          </div>
          <div className='col-xl-6 text-start'>
            <p>| &nbsp; &nbsp;  Terms & Conditions</p>
          </div>
        </div>
    </div>
        </footer>
    )
}

export default Footer