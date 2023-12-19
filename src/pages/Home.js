// import home from '../../public/images/home1';
import React from 'react'
import './Home.css'

const Home = ()=> {
    return(
        <>
        <div className='hero'>
            <div className="card only-desktop mx-5 mb-5">
                <div className="card-body">
                    <p className='cardBody'>We crush your competitors, goals, and sales records - without the B.S.</p>
                    <button type="button" className="btn">Get free consultation</button>
                </div>
            </div>
            
        </div>
        <div className="card only-mobile  mb-5" style={{width:'100vw'}}>
                <div className="card-body w-100" >
                    <p className='cardBody'>We crush your competitors, goals, and sales records - without the B.S.</p>
                    <button type="button" className="btn">Get free consultation</button>
                </div>
            </div>
        </>
    )
}

export default Home