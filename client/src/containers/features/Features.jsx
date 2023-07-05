import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'AI Customization at Your Fingertips',
    text: 'Experience the power of personalization with Skillful-AI. Our platform allows you to tailor AI solutions to your unique needs, ensuring a perfect fit for your business or personal use.',
  },
  {
    title: 'Empowering Innovation',
    text: "With Skillful-AI, you're not just a user, you're an innovator. Our user-friendly tools enable you to create your own AI models, opening up a world of possibilities for innovation and creativity.",
  },
  {
    title: 'Join the AI Marketplace',
    text: 'Step into the future with the Skillful-AI marketplace. Buy, sell, or trade AI skills and assistants, and take advantage of our NFT technology to truly own your AI as a unique digital asset.',
  },
  {
    title: 'Monetize Your AI Creations',
    text: 'Turn your AI models into a source of income with Skillful-AI. Our platform allows you to monetize your creations, providing a new avenue for revenue generation in the digital age.',
  },
];

const Features = () => (
  <div className="skillfulai_features section__padding" id="features">
    <div className="skillfulai_features-heading">
      <h1 className="gradient__text">The Future is Now Unleash your creativity with Skillful-AI. Personalize, innovate, and revolutionize the way you interact with technology. With Skillful-AI, you're not just adapting to the future, you're creating it.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="skillfulai_features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;