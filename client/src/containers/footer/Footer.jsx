import React from 'react';
import skillfulaiLogo from '../../assets/logo.svg'; 
import './footer.css';

const Footer = () => (
  <div className="skillfulai__footer section__padding">
    <div className="skillfulai__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="skillfulai__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="skillfulai__footer-links">
      <div className="skillfulai__footer-links_logo">
        <img src={skillfulaiLogo} alt="skillfulai_logo" />
        <p>TBA, <br /> All Rights Reserved</p>
      </div>
      <div className="skillfulai__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="skillfulai__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="skillfulai__footer-links_div">
        <h4>Get in touch</h4>
        <p>TBA</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="skillfulai__footer-copyright">
      <p>@2023 SKILLFUL-AI. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;