import React from 'react';
import './TokenTech.css';
import tokenomics from '../../assets/tokenomics.png';
import tokenomics2 from '../../assets/tokenomics2.png';
import tokenomics_reloaded from '../../assets/tokenomics2_reload.png';
import tokenomics_back2 from '../../assets/tokenomics-back2.png';
import technology from '../../assets/tech.png';

const TokenTech = () => { 
  const redirectToWhitelistForm = () => {
    window.open('https://docs.google.com/forms/d/1Vks6Xlkcxw89keWjrOJiSylOY97Ii8LcsSTynb0lyjY/viewform?edit_requested=true', '_blank');
  };

  return (
    <div className="skillfulai-token_and_tech ">
      <div className="skillfulai_tokenomics section__padding" id="tokenomics">
        <img src={tokenomics_back2} alt="tokenomics" className="tokenomics-back2" />      
          <div className="tokenomics-container">
            <div className="tokenomics-heading">
            
              <img src={tokenomics_reloaded} alt="tokenomics" className="tokenomics-image1" />      
          </div>
          </div>
        </div>
        <div className="skillfulai_technology section__padding" id="tokenomics">
       
          <div className="technology-container">
            <div className="technology-heading">
              <h1 >Technology</h1>
              <h2 >The next generation of AI creator tools</h2>
            
              <img src={technology} alt="technology" className="technology-image1" />      
              <button className="skillfulai__tech-button" type="submit" onClick={redirectToWhitelistForm} >Learn More </button>
          </div>
          </div>
        </div>
    </div>
  );
};

export default TokenTech;
