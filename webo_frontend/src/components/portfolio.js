import React from 'react'
import './CSS/portfolio.css'
import wallet from "./Images/wallets.png";
import center_wallet from "./Images/wallet1.png";
import right_wallet from "./Images/wallet2.png";



const Portfolio = () =>  {
  return (
    <div className='main-portfolio'>
        <div className='portfolio-top'>
            <div className='portfolio-top-left'>
                <h1>Automated portfolio tracking</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.</p>
            </div>

            <div className='portfolio-parent'>
                <div className='portfolio-top-right'>

                </div>
                <div className='portfolio-content'>
                    <p className='intro'>Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen</p>
                    <p className='author'> -Mike Taylor, Web Designe</p>
                </div>
                <div className='quation'>
                    <i className="fas fa-quote-left"></i>
                </div>
            </div>
        </div>

        <div className='portfolio-container'>
            <div className='portfolio-bottom'>
                <p className='portfolio-top-flex'>01</p>
                <div className='portfolio-center-flex'>
                    <div className='Portfolio-img'>
                        <img  classsName='wallet-image' src={wallet} />
                    </div>

                    <div className='portfolio-name'>
                        <h3>Connect wallets 	&amp; companie</h3>
                    </div>

                    <div className='portfolio-name-info'>
                        <p>Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    </div>
                </div>
            </div>

            <div className='portfolio-bottom'>
                <p className='portfolio-top-flex'>02</p>
                <div className='portfolio-center-flex'>
                    <div className='Portfolio-img'>
                        <img  classsName='wallet-center' src={center_wallet} />
                    </div>

                    <div className='portfolio-name'>
                        <h3>Review <br/>Transaction</h3>
                    </div>

                    <div className='portfolio-name-info'>
                        <p>Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    </div>
                </div>
            </div>

            <div className='portfolio-bottom'>
                <p className='portfolio-top-flex'>03</p>
                <div className='portfolio-center-flex'>
                    <div className='Portfolio-img'>
                        <img  classsName='wallet-image' src={right_wallet} />
                    </div>

                    <div className='portfolio-name'>
                        <h3>Get Income <br/> Insights</h3>
                    </div>

                    <div className='portfolio-name-info'>
                        <p>Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
  );
}

export default Portfolio;
