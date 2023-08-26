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

const Possibility = () => (
  <div className="skillfulai_possibility section__padding" id="possibility">
    <div className="skillfulai__possibility-app">
        <div className="rectangle-gradient">
          <div className="content-container">
            <h2>The Skillful AI App</h2>
            <p>The Future is Now Unleash your creativity with Skillful AI. Personalize, innovate and revolutionize the way you interact with technology. With Skillful AI, you're not just adapting to the future, you're creating it.</p>
           
          </div>
          <button className="get-app-button">GET YOUR APP NOW</button>

          <img src={skillfulweb} alt="skillfulweb" className="skillfulweb-image" />
          <img src={logo_half} alt="logo_half" className="logo-half-image" />
      </div>
    </div>
    <div className="skillfulai__possibility-suite">
      <div className="rectangle-suite">
        <div className="suite-content-container">
          <h1>AI Suite</h1>
          <p>Experience the power of personalization with Skillful-AI. Our platform allows you to tailor AI solutions to your unique needs, ensuring a perfect fit for your business or personal use.</p>
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
        <img src={marketplace} alt="skillfulweb" className="marketplace-image1"  />
        <div className="marketplace-content-container">
          <h1>Marketplace</h1>
          <p>Experience the power of personalization with Skillful-AI. Our platform allows you to tailor AI solutions to your unique needs, ensuring a perfect fit for your business or personal use.</p>
          <img src={logo} alt="logo" className="marketplace-logo-image" />
        </div>
       
      </div>
    
    </div>
  </div>
);

export default Possibility;