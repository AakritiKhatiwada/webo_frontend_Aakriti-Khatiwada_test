import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="parentFooter"> 
            <div className="footer">
                <div>
                    <p className="heading">AR Shakir</p>
                    <p className="simpleColor">Finance helps companies<br/>manage payments easily</p>
                    <div className="social">
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-facebook-messenger"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fas fa-infinity"></i>
                    </div>
                </div>
                <div className="company">
                    <p className="heading-new">Company</p>
                    <div className="subHeading">
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Blog</p>
                        <p>Pricing</p>
                    </div>
                </div>
                <div>
                    <p className="heading-new">Resources</p>
                    <div className='subHeading-new'>
                        <p>Proposal Template</p>
                        <p>Invoice Template</p>
                        <p>Tutorial</p>
                        <p>How to write a contract</p>
                    </div>
                </div>
                <div className="newsletter">
                    <p className="heading-new">Join Our Newsletter</p>
                    <div className="letter">
                        <input type="email" className="emailInput" placeholder="Your email adderess" />
                        <button className="subscribe">Subscribe</button>
                    </div>
                    <div className='subletter'>
                        <p>* Will send you weekly updates for your better finance management.</p>

                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright @ AR Shakir 2022. All Rights Reserved.</p>
            </div>
        </div>
  )
}

export default Footer