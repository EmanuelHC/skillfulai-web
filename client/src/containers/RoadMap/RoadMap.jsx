import React from 'react';
import './RoadMap.css';

import roadmap from '../../assets/roadmap.png';

const RoadMap = () => (
  <div className="skillfulai-RoadMap ">
    <div className="skillfulai_roadmap-content section__padding" id="roadmap">
        <div className="roadmap-container">
          <div className="roadmap-heading">
            
            <img src={roadmap} alt="usecases" className="roadmap-image1" />      
        </div>
        </div>
      </div>

  </div>
  
);

export default RoadMap;