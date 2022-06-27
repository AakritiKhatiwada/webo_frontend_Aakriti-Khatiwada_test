import React from 'react'
import information from "./Images/info.png";
import transaction from "./Images/transaction.png";
import choose from "./Images/choose.png";
import './CSS/whychooseus.css'

const Whychooseus = () => {
  return (
    <div className='whychooseus'>
        <div className='chooseus'>
            <div className='choose-img'>
                <img  classsName='main-image' src={information} /> 
            </div>
            <div className='choose-image'>
                <img classsName='corner-img' src={choose} />
            </div>

            <div className='information-section'>
                <div className='info-top'>
                    <p>why choose us</p>
                </div>
                <div className='info-bold'>
                    <p>Trace your payments on the go with the best way passible</p>
                </div>
                <div className='info-bottom'>
                    <p>Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of</p>
                </div>
                <div className='info-list'>
                    <li><i class="fas fa-check-circle "></i>Get overview at glance</li>
                    <li><i class="fas fa-check-circle "></i>Deposite funds easily, security</li>
                    <li><i class="fas fa-check-circle "></i>Get live suppoet</li>
                </div>
            </div>
        </div>

        <div className='save-money'>
                <div className='save-money-left'>
                    <div className='save-money-top'>
                        <p>why choose us</p>
                    </div> 
                    <div className='save-money-bold'>
                        <p>Save money with proper transaction</p>
                    </div >
                    <div className='save-money-bottom'>
                        <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own</p>
                    </div>
                    <div className='payment-info'>
                        <div className='payment-info-left'>
                            
                        </div>
                        <div className='box-content-info'>
                            <p className='intro-first'>Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows</p>
                            <p className='author-name'> -Mike Taylor, Web Designe</p>
                        </div>
                        <div className='quation-new'>
                            <i className="fas fa-quote-left"></i>
                        </div>
                    </div>
                </div>

                <div className='save-money-right'>
                    <img  classsName='payment-image' src={transaction} />  
                </div>
            </div>
    </div>
  )
}

export default Whychooseus