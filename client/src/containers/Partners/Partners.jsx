import React from 'react';
import './Partners.css';
import partners from '../../assets/partners.png';
import partners2 from '../../assets/partners2.png';
import partners_back from '../../assets/partners_back.png';
import xIcon from '../../assets/x.png';
import telegramIcon from '../../assets/telegram.png';
import linkedinIcon from '../../assets/linkedin.png';
import discordIcon from '../../assets/discord.png';
import instagram from '../../assets/instagram.svg';
import medium from '../../assets/medium.svg';

const Partners = () => {
  
  const redirectToDiscord = () => {
    window.open('https://discord.gg/WhAYqkXYkg ', '_blank');
  };

  const redirectToTelegram = () => {
    window.open('https://t.me/+oNknk6vJj-0wODgx', '_blank');
  };

  const redirectToLinkedIn = () => {
    window.open('https://www.linkedin.com/company/skillful-ai-io/about/', '_blank');
  };

  const redirectToIG = () => {
    window.open('https://www.instagram.com/skillfulai.io/', '_blank');
  };

  const redirectToMedium = () => {
    window.open('https://skillfulai.medium.com/subscribe', '_blank');
  };


  const handleXIconClick = () => {
    window.open('https://twitter.com/SkillfulAI', '_blank');
  };

  const redirectToWhitelistForm = () => {
    window.open('https://docs.google.com/forms/d/1Vks6Xlkcxw89keWjrOJiSylOY97Ii8LcsSTynb0lyjY/viewform?edit_requested=true', '_blank');
  };
  

  return (
    <div className="skillfulai-partners">
      <img src={partners} alt="partners" className="partners-image1" />
      <div className="skillfulai_partners-content section_padding" id="partners">
          <img src={partners2} alt="partners" className="partners-image2" />
          <div className="partners-title">
            <h1>Seize the moment! Dive into the world of skillful AI now and uncover its limitless possibilities.</h1>
            <p className="partners-title">It's time to become a part of this transformative journey, where AI transcends its boundaries and becomes a versatile tool in your hands. Embrace the evolution, and together, let's redefine what's achievable in the realm of AI..</p>
          </div>
      </div>
      <button className="partners-button" onClick={redirectToWhitelistForm}>Join Whitelist</button>
      <h2 className="partners-title2">Connect</h2>
      <div className="icons">
          <img src={telegramIcon} alt="Telegram" onClick={redirectToTelegram} />
          <img src={linkedinIcon} alt="LinkedIn" onClick={redirectToLinkedIn} />
          <img src={discordIcon} alt="Discord" onClick={redirectToDiscord} />
          <img src={xIcon} alt="X Icon" onClick={handleXIconClick} />
          <img src={instagram} alt="X Icon" onClick={redirectToIG} />
          <img src={medium} alt="X Icon" onClick={redirectToMedium} />
      </div>
    </div>
  );
}

export default Partners;
