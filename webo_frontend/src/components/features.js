import React from 'react'
import './CSS/features.css'
import wallet from "./Images/wallets.png";
import center_wallet from "./Images/wallet1.png";
import feature from "./Images/feature.png";

const Features = () => {
  return (
    <div className='features'>
        <div className='main-feature'>
            <div className='feature-corner-image'>
                <img  classsName='image-left-corner' src={feature} />
            </div>
            <div className='feature-top'>
                <p>Features that blows mind</p>
            </div>
            <div className='feature-info'>
                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own</p>
            </div>

            <div className='feature-section'>
                <div className='feature-seperate'>
                    <div className='feature-image'>
                        <img  classsName='wallet-image' src={wallet} />
                    </div>
                    <div className='feature-info-section'>
                        <p>Really boy law county she unable her sister</p>
                    </div>
                    <div className='feature-details'>
                        <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
                    </div>
                </div>

                <div className='feature-seperate'>
                    <div className='feature-image'>
                        <img  classsName='wallet-image' src={center_wallet} />
                    </div>
                    <div className='feature-info-section'>
                        <p>Among sex are leave law built now</p>
                    </div>
                    <div className='feature-details'>
                        <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
                    </div>
                </div>


                <div className='feature-seperator'>
                    <div className='first-seperator'>
                        <p className='seperator-name'>Merits behind on afraid or warmly</p>
                    </div>
                    <div className='first-seperator'>
                        <p className='seperator-name'>Believing neglected so so allowance existence</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features