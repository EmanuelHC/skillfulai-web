import React from 'react';
import './Founders.css';
import founders from '../../assets/founders.png';

const Founders = () => (
  <div className="skillfulai-founders">
    <div className="skillfulai_founders-content " id="founders">
      <h1 className="founders-heading">CORE TEAM <sub className="founders-subindex">(THE FOUNDERS)</sub></h1>
      <img src={founders} alt="founders" className="founders-image1" />
    </div>
  </div>
);

export default Founders;
