import React, {useState} from 'react'
import './CSS/navbar.css' 
import pic from "./Images/hero_image.png";
import fill from "./Images/Fill 1.png";
import left from "./Images/left-design.png";
import right from "./Images/Right-design.png";
 
const Navbar = () => {
    const[showNav, setShowNav] = useState(false);
  return (
    <>
        <div className='hero'>
            {/* small navbar */}
            {
                showNav && <div className='smallNav'>
                            <div>
                                <ul>
                                    <li><a href="">Product<i className="fas fa-angle-down drop"></i></a></li>
                                    <li><a href="">Template <i className="fas fa-angle-down drop"></i></a></li>
                                    <li><a href="">Blog</a></li>
                                    <li> <a href="">Pricing</a></li>
                                </ul>
                            </div>
                            <div className='zero-btn'>
                                <a href='#' className='sign-btn'>Sign In</a>
                                <button className='btn'>Start Free</button>
                            </div>
                        </div>
            }
 
            <nav>
                <a href='#' className='logo'>ar shakir</a>
                <ul>
                    <li><a href="">Product<i className="fas fa-angle-down drop"></i></a></li>
                    <li><a href="">Template <i className="fas fa-angle-down drop"></i></a></li>
                    <li><a href="">Blog</a></li>
                    <li> <a href="">Pricing</a></li>
                </ul>
                <div className='hero-btn'>
                    <a href='#' className='sign-btn'>Sign In</a>
                    <button className='btn'>Start Free</button>
                </div>
                <div className='menu' onClick={() => setShowNav(!showNav)}>
                    <i class="fas fa-bars"></i>
                </div>
            </nav>
 
 
            <div className='content'>
                <h1>Managing freelance payments has never been easier</h1>
                <p className='content-info'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.</p>
                <div className='flex new-btn'>
                    <div>
                        <button className='btn-start'>Get Started</button>
                    </div>
                    <div className='flex'>
                        <div>
                            <svg className="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#22D497" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"/></svg>
                        </div>
                        <div className='icon-content'>
                            <p className='icon-info'> See How It Works</p>
                        </div>  
                    </div>
                </div>
                <div className='hero-botton-content'>
                    <div className='circle-check-left'>
                        <div>
                            <i class="fas fa-check-circle "></i>
                        </div>
                        <div>
                            <p className='circle-info'>Free Register</p>
                        </div>
                    </div>
 
                    <div className='circle-check-right'>
                        <div>
                            <i className="fas fa-check-circle "></i>
                        </div>
                        <div>
                            <p className='circle-info'>Great Service</p>
                        </div>
                    </div> 
                </div>
 
 
            </div>
            <div className='hero-right-side'>
                <img src={pic} /> 
            </div>
 
            <div className='design-corner'>
                <img  className='corner-image' src={fill} />
            </div>
 
            <div className='design-left'>
                <img  className='left-image' src={left} />
            </div>
 
            <div className='design-right'>
                <img  className='right-image' src={right} />
            </div>
        </div>
    </>
  )
}
 
export default Navbar