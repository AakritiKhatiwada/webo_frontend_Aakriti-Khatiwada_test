import React from 'react'
import './CSS/discover.css'
import discover1 from "./Images/discover1.png";
import discover2 from "./Images/Discover2.png";
import discover3 from "./Images/discover3.png";
import discover4 from "./Images/discover4.png";
import discover5 from "./Images/discover5.png";


const Discover = () => {
  return (
    <div className='discover'>
        <div className='main-discover'>
          
            <div className='discover-image'>
              <img  classsName='blog-image' src={discover1} />
            </div>

            <div className='discover-image-2'>
              <img  classsName='blog-image' src={discover2} />
            </div>

            <div className='discover-image-3'>
              <img  classsName='blog-image' src={discover3} />
            </div>

            <div className='discover-image-4'>
              <img  classsName='blog-image' src={discover4} />
            </div>

            <div className='discover-image-5'>
              <img  classsName='blog-image' src={discover5} />
            </div>

            <div className='discover-content'>
              <p>Discover a better way to manage spending</p>
              <button>Get Started Now</button>

            </div>
            
        </div>
    </div>
  )
}

export default Discover