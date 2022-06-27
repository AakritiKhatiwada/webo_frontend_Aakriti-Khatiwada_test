import React from 'react'
import testimonial_img from "./Images/testimonial.png";
import './CSS/testimonial.css'


const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className='main-testimonials'>
            <div className='testimonials-heading'>
                <p>Testimonials</p>
            </div>
            <div className='testimonial-details'>
                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.</p>
            </div>
            <div className='testimonial-box'>
                <div className='testmonial-source'>
                    <div className='testimonial-container'>
                        <div className='testimonial-description'>
                            <p>Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows. Blessing welcomed ladyship.</p>
                        </div>
                        <div className='testimonial-name'>
                            <p>- Mike Taylor, Web Designer</p>
                        </div>
                    </div>
                    <div className='tesimonial-image'>
                        <img  classsName='wall-image' src={testimonial_img} />
                    </div>
                    <div className='quation-testimonial'>
                        <i className="fas fa-quote-left"></i>
                    </div>
                </div>


                <div className='testmonial-source'>
                    <div className='testimonial-container'>
                        <div className='testimonial-description'>
                            <p>Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows. Blessing welcomed ladyship.</p>
                        </div>
                        <div className='testimonial-name'>
                            <p>- Mike Taylor, Web Designer</p>
                        </div>
                    </div>
                    <div className='tesimonial-image'>
                        <img  classsName='wall-image' src={testimonial_img} />
                    </div>
                    <div className='quation-testimonial'>
                        <i className="fas fa-quote-left"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials