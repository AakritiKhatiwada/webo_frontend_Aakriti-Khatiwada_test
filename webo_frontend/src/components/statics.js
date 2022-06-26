import React from 'react'
import active from "./Images/Active.png";
import './CSS/static.css'

const Statics = () => {
  return (
    <div className='statics'>
        <div className='static-wrap'>
            <div className='statics-left'>
                <p>We speak with our powerfull statistics</p>
            </div>

            <div className='static-right'>
                <div className='static-first'>
                    <div className='static-number'> 
                        <p>1M+</p>
                    </div>
                    <div className='static-active'>
                        <i class="fas fa-user"></i>
                        <p>Active Users</p>
                    </div>
                </div>

                <div className='static-first'>
                    <div className='static-number'> 
                        <p>30K+</p>
                    </div>
                    <div className='static-active'>
                        <i class="fas fa-star"></i>
                        <p>5-Star Review</p>
                    </div>
                </div>

                <div className='static-first'>
                    <div className='static-number'> 
                        <p>$252M</p>
                    </div>
                    <div className='static-active'>
                        <i class="fas fa-star"></i>
                        <p>Transaction</p>
                    </div>
                </div>

            </div>

            <div className='static-image'>
                <img  classsName='main-image' src={active} />
            </div>

        </div>

    </div>
  )
}

export default Statics