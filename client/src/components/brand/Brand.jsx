import React from 'react';
import { pytorch, aws, langchain, pinecone, eth,  } from './import';
import './brand.css';

const Brand = () => (
  <div className="skilfullai__brand section__padding">
    <div>
      <img src={pytorch} alt='openai'/>
    </div>
    <div>
      <img src={aws} alt='aws' />
    </div>
    <div>
      <img src={langchain}  alt='langchain'/>
    </div>
    <div>
      <img src={pinecone}alt='pinecone' />
    </div>
    <div>
      <img src={eth} alt='eth'/>
    </div>
  </div>
);

export default Brand;