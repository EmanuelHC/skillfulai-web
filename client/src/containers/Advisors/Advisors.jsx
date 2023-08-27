import React from 'react';
import './Advisors.css';
import advisors from '../../assets/advisors.png';


const Advisors = () => (
 

      <div className="skillfulai_Advisors section__padding" id="Advisors">
     
        <div className="Advisors-container">
          <div className="Advisors-heading">
            <h1 >Advisors</h1>
          
            <img src={advisors} alt="Advisors" className="Advisors-image1" />      
        </div>
        </div>
      </div>

  
);

export default Advisors;