import React from 'react';
import logo from '../../assets/logo.svg';
import './header.css';
import back from '../../assets/backg2.png';

const Header = () => {
  return (
    <div className="skillfulai__header" id="home">
      {/* Move the background image outside of the content div */}
      /* <img src={back} alt='back' className="skillfulai__header-background" /> */

      <div className="skillfulai__header-content">
        <h1 className="header_gradient__text">Let&apos;s Build Something amazing with Skillful-AI</h1>
        <p>Unlock the future with AI that understands, adapts, and evolves. Dive into a world where innovation meets intuition. Your journey to brilliance begins here with Skillful-AI.</p>
        <button type="submit">WHITELIST ME</button>
      </div>

      <div className="skillfulai__header-image">
        <img src={logo} alt='logo'/>
      </div>
    </div>
  );
};

export default Header;
