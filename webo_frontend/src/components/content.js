import React from 'react'
import './CSS/content.css' 
import pic from "./Images/Group.png";
import pic1 from "./Images/Group1.png";
import pic2 from "./Images/Group2.png";
import pic3 from "./Images/Group3.png";
import pic4 from "./Images/Group4.png";
import pic5 from "./Images/Group5.png";
import pic6 from "./Images/Group6.png";


const Content = () => {
  return (
    <div className='second-content'>
      <div className='content-info'>
        <p>Over 32k+ software businesses growing with AR Shaki</p>
      </div>

      <div className='content-image'>
        <div className='box-1'>
          <img src={pic} />
        </div>

        <div className='box-2'>
          <img src={pic1} />
        </div>

        <div className='box-3'>
          <img src={pic2} />
        </div>

        <div className='box-4'>
          <img src={pic3} />
        </div>

        <div className='box-5'>
          <img src={pic4} />
        </div>

        <div className='box-6'>
          <img src={pic5} />
        </div>

        <div className='box-7'>
          <img src={pic6} />
        </div>


      </div>

    </div> 
  )
}

export default Content