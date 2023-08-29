import React from 'react';
import './Founders.css';
import founders from '../../assets/founders3.png';
import S from '../../assets/S.svg';
import K from '../../assets/K.svg';
import I from '../../assets/I.svg';
import L from '../../assets/L.svg';
import F from '../../assets/F.svg';
import U from '../../assets/U.svg';
import A from '../../assets/A.svg';


const Founders = () => (
  <div className="skillfulai-founders">
    <div className="skillfulai_founders-content " id="founders">
      <h1 className="founders-heading">CORE TEAM <sub className="founders-subindex">(THE FOUNDERS)</sub></h1>
      
      <img src={founders} alt="founders" className="founders-image1" />
    </div>
  </div>
);

export default Founders;
