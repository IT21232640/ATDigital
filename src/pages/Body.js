import React from 'react'

function Body() {
  return (
    <div className='container'> 
         <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='row detail1 d-flex justify-content-around align-items-center'>
                
                <div  className='text-center col-xl-6'>
                    <img src="/images/image 2.png" alt="web&mobile"/>
                </div>
                <div className='col-xl-6'>
                    <h3 className='header3'>Web & Mobile App Development</h3>
                    <p className='details2'>Your web and mobile Apps are pieces of the puzzle to grow your business. 
                        We use frameworks which tailor content and engagement methods to respond to 
                        different intents shown by your potential customers who interact with your business online.</p>
                    <button type="button" className="btn">Learn more</button>
                </div>
                
            </div>

            <div data-aos="fade-up"  data-aos-anchor-placement="top-center" className=' detail1 mx-5 d-flex justify-content-between align-items-center flex-sm-column-reverse flex-xl-row'>
                <div>
                    <h3 className='header3'>Digital Strategy Consulting</h3>
                    <p className='details2'>Your digital strategy should complement the overall marketing strategy of the company. 
                        In online marketing, each component will never work in isolation and every business needs a different mix. 
                        We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                    <button type="button" className="btn">Learn more</button>
                </div>
                
                    <img className='img-fluid' width='550' src="/images/image 1.png" alt="digital strategy"/>
                
            </div>
            
    </div>

    
  )
}

export default Body