import React from 'react';
import './TokenTech.css';
import tokenomics from '../../assets/tokenomics.png';
import tokenomics2 from '../../assets/tokenomics2.png';
import tokenomics_back2 from '../../assets/tokenomics-back2.png';



const TokenTech = () => (
  <div className="skillfulai-token_and_tech ">
    <div className="skillfulai_tokenomics section__padding" id="tokenomics">
    
    <img src={tokenomics_back2} alt="tokenomics" className="tokenomics-back2" />      

        
        <div className="tokenomics-container">
          <div className="tokenomics-heading">
          
            <h1 >Tokenomics</h1>
            <img src={tokenomics2} alt="tokenomics" className="tokenomics-image1" />      
        </div>
       

        

        </div>
      </div>
  </div>
  
);

export default TokenTech;