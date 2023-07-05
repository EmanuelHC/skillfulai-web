import React from 'react';
import possibilityImage from '../../assets/possibility.jpeg';
import './possibility.css';

const Possibility = () => (
  <div className="skillfulai_possibility section__padding" id="possibility">
    <div className="skillfulai__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="skillfulai__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Step into the future with SkillfulAI, where your AI vision comes to life. Our platform is built on the concept of 'skills' - modular, customizable units of AI functionality. This unique approach allows you to construct an AI assistant that is as unique as your needs, capable of executing specific tasks with unparalleled precision. But the innovation doesn't stop there. Our AI marketplace is a vibrant ecosystem for trading AI skills and assistants. With the integration of NFT technology, you can claim exclusive ownership over your AI creations, transforming them into unique digital assets. This not only adds a layer of personalization but also opens up avenues for value creation and monetization. With SkillfulAI, you're not just creating AI, you're pioneering a new era of personalized AI experiences.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;