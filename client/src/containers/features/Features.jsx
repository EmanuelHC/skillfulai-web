import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';
import Accessibility from '../../assets/Accessibility.png';
import UserExperience from '../../assets/UE.png';
import TrustPrivacy from '../../assets/ST.png';
import Memory from '../../assets/Memory.png';
import Customization from '../../assets/Customization.png';



const Features = () => (
  <div className="skillfulai_features section__padding" id="features">
    <div className="skillfulai_features-heading">
      <h1 >Skillful AI offers a comprehensive ecosystem to develop, deploy, own and exchange personalized AI assistants from your computer or smartphone.</h1>
    </div>

    
     <div className="skillfulai_features-container">
     <div className="skillfulai_features-container-feature">
       <img src={Accessibility} alt='Accessibility' className="accessibility-image" /> 
        <h2 > Accessibility </h2>
        <p> Skillful AI allows people with any skill level to access powerful tailor-made AI tools that are easy to use. </p>   
      </div>
      <div className="skillfulai_features-container-feature">
       <img src={UserExperience} alt='UserExperience' /> 
        <h2 > User Experience </h2>
        <p> Start using and building your custom AI assistant in seconds on an intuitive user interface </p>   
      </div>
      <div className="skillfulai_features-container-feature">
        <img src={TrustPrivacy} alt='TrustPrivacy' /> 
        <h2 > Trust & Privacy </h2>
        <p> Get an AI that enables you to own and be in control of your own data. </p>   
      </div>
      <div className="skillfulai_features-container-feature">
        <img src={Memory} alt='Memory' /> 
        <h2 > Memory </h2>
        <p> Vector storage of data via parameter-fficient fine-tuning through a unique encoder </p>   
      </div>
      <div className="skillfulai_features-container-feature">
        <img src={Customization} alt='Customization' /> 
        <h2 > Customization</h2>
        <p> With the power of BUILDING BLOCKS, customize your AI to fulfil your needs, the way you want them. </p>   
      </div>

    </div>
  </div>
);

export default Features;