import React from 'react';
import './UseCases.css';

import usecases from '../../assets/useCases2.png';

const UseCases = () => (
  <div className="skillfulai-usecases ">
    <div className="skillfulai_usecases-content section__padding" id="usecases">
        <div className="usecases-container">
          <div className="usecases-heading">
            <h1 >Use Cases </h1>
            <img src={usecases} alt="usecases" className="usecases-image1" />      
        </div>
        </div>
      </div>

  </div>
  
);

export default UseCases;