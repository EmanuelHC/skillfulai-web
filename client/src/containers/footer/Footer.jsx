import React from 'react';
import skillfulaiLogo from '../../assets/logo.svg'; 
import './footer.css';

const Footer = () => (
  <div className="skillfulai__footer section__padding">
    <div className="skillfulai__footer-heading">
      
    </div>

  
    <div className="skillfulai__footer-links">
      <div className="skillfulai__footer-links_logo">
        <img src={skillfulaiLogo} alt="skillfulai_logo" />
      
      </div>
      <div className="skillfulai__footer-links_div">
        <h4>Terms & Conditions</h4>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
       
      </div>
      <div className="skillfulai__footer-links_div">
        <h4>Company</h4>
        <p>About</p>
        <p>Blog</p>
        <p>Careers</p>
        <p>Partners</p>
        
      </div>
      <div className="skillfulai__footer-links_div">
        <h4>Get in touch</h4>
        <p>Contact</p>
        <p>Support</p>
        <p>FAQ</p>
      </div>
      <div className="skillfulai__footer-copyright">
      <p>@2023 SKILLFUL-AI. All rights reserved.</p>
    </div>
    </div>

    
  </div>
);

export default Footer;