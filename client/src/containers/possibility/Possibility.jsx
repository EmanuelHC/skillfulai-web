import React from 'react';
import possibilityImage from '../../assets/possibility.jpeg';
import logo_half from '../../assets/logo-half.png';
import skillfulweb from '../../assets/SkillfulWeb.svg';
import './possibility.css';
import { Feature } from '../../components'
import suite1 from '../../assets/suite1.png';
import suite2 from '../../assets/suite2.png';
import logo from '../../assets/logo-small.svg';
import rect_trans from '../../assets/rect_trans.png'

import marketplace from '../../assets/MAKET.png'
import creator from '../../assets/creator.svg'
import Wallet from '../../assets/Wallet.svg'
import Wallet2 from '../../assets/Wallet2.svg'
import branded from '../../assets/branded.png'
import skillful_coin from '../../assets/skillful_coin.png'

const Possibility = () => {
  const redirectToWhitelistForm = () => {
    console.log("Button clicked!"); // This will log to the console when the button is clicked
    window.open('https://docs.google.com/forms/d/1Vks6Xlkcxw89keWjrOJiSylOY97Ii8LcsSTynb0lyjY/viewform?edit_requested=true', '_blank');
};



return (
  <div className="skillfulai_possibility section__padding" id="possibility">
    <div className="skillfulai__possibility-app">
        <div className="rectangle-gradient">
          <div className="app-content-container">
            <h2>The Skillful AI App</h2>
            <p>The Future is Now Unleash your creativity with Skillful AI. Personalize, innovate and revolutionize the way you interact with technology. With Skillful AI, you're not just adapting to the future, you're creating it.</p>
           
          </div>
          <button className="get-app-button" onClick={redirectToWhitelistForm}>JOIN WHITELIST</button>

          <img src={skillfulweb} alt="skillfulweb" className="skillfulweb-image" />
          <img src={logo_half} alt="logo_half" className="logo-half-image" />
      </div>
    </div>
    <div className="skillfulai__possibility-suite">
      <div className="rectangle-suite">
        <div className="suite-content-container">
          <h1>AI Suite</h1>
          <p>Skillful AI, empowers AI agents with flexible functionalities, distinct from task-specific models. Developers in the AI Suite can create custom tools and skills, while users personalize agents with selected capabilities.</p>
          <img src={logo} alt="logo" className="suite-logo-image" />
        </div>
        <img src={rect_trans} alt="rect_trans" className="suite-rect-trans"  />
        <img src={suite1} alt="skillfulweb" className="suite-image1"  />
        <img src={suite2} alt="suite2" className="suite-image2" />
      </div>  
    </div>
    <div className="skillfulai__possibility-marketplace">
      <div className="rectangle-marketplace">
        <img src={rect_trans} alt="rect_trans" className="marketplace-rect-trans"  />
        <img src={marketplace} alt="marketplace" className="marketplace-image1"  />
        <div className="marketplace-content-container">
          <h1>Marketplace</h1>
          <p>Skillful AI's unique AI NFT Marketplace offers control, quality assurance, and tailored user experiences. This integration enhances AI agent creation, customization, and listing, facilitating seamless user interaction.</p>
          <img src={logo} alt="logo" className="marketplace-logo-image" />
        </div>
      </div>
    </div>
    <div className="skillfulai__possibility-creator">
      <div className="rectangle-creator">
      <div className="creator-content-container">
          <h1>AI Creator</h1>
          <p>The AI Creator for Skillful AI enhances base Language Models (LLMs) by adding versatile Tools and Skills, acting like "plug-ins." These APIs, from Text-to-Speech to Image Generation, boost efficiency and speed. Developers benefit by crafting their tools, seamlessly integrating APIs, models, and algorithms.</p>
          <img src={logo} alt="logo" className="suite-logo-image" />
        </div>
        <img src={rect_trans} alt="rect_trans" className="suite-rect-trans"  />
          <img src={creator} alt="skillfulcreator" className="creator-image1" />
          <h1 className="creator-image1-text">Coming soon</h1>
      </div>
    </div>
    <div className="skillfulai__possibility-wallet">
      <div className="rectangle-wallet">
        <img src={rect_trans} alt="rect_trans" className="wallet-rect-trans"  />
        <img src={Wallet} alt="skillfulweb" className="wallet-image1"  />
        <img src={Wallet2} alt="skillfulweb" className="wallet-image2"  />
        <div className="wallet-content-container">
          <h1>Wallet</h1>
          <p>Discover the ultimate Skillful wallet integration, enabling seamless storage, management, and monetization of assets. Effortlessly stake for rewards, sell on the dynamic NFT marketplace, and even offer for temporary hire. Unleash the potential of your Skillful AI collection with our innovative wallet integration.</p>
          <img src={logo} alt="logo" className="wallet-logo-image" />
        </div>
      </div>
    </div>
    <div className="skillfulai__possibility-branded">
      <div className="rectangle-branded">
      <div className="branded-content-container">
          <h>Branded AI</h>
          <h1>The possibilities are limitless</h1>
          <p>Experience the power of personalization with Skillful-AI. Our platform allows you to tailor AI solutions to your unique needs, ensuring a perfect fit for your business or personal use.Experience the power of personalization with Skillful-AI. Our platform allows you to tailor AI solutions to your unique needs, ensuring a perfect fit for your business or personal use.</p>
        </div>
          <img src={branded} alt="branded" className="branded-image1" />        
      </div>
    </div>
    <div className="skillfulai__possibility-token">
      <div className="rectangle-token">
      <div className="token-content-container">
          <h>Token</h>
          
          <p>
            The Utility powerhouse of the Skillful AI ecosystem.<br />
            <br />
            Access AI Creator tools, buy and sell on the marketplace, cover all your fees and subscriptions with $SKAI.
          </p>
        </div>
          <img src={skillful_coin} alt="skillfull_coin" className="token-image1" />  
          <button className="token-button" onClick={redirectToWhitelistForm}>BUY TOKEN</button>      
      </div>
    </div>
    
    

  </div>
);
};

export default Possibility;