import React from 'react';
import {   aws,
  bnb,
  pytorch,
  ethereum,
  tensorflow,
  langchain,
  huggingface,
  polygonID,
  wallet_connect,
  polygon  } from './import';
import './brand.css';

const Brand = () => (
  <div className="skilfullai__brand section__padding">
    <div className='skilfullai__brand-row1'>
      <img src={aws} alt='aws' />
      <img src={bnb} alt='bnb'/>
      <img src={pytorch}  alt='pytorch'/>
      <img src={ethereum}alt='ethereum' />
      <img src={tensorflow} alt='tensorflow'/>

    </div>
    <div className='skilfullai__brand-row2'>
    <img src={langchain} alt='langchain' />
      <img src={huggingface} alt='huggingface'/>
      <img src={polygonID}  alt='polygonID'/>
      <img src={wallet_connect}alt='wallet_connect' />
      <img src={polygon} alt='polygon'/>

    </div>
  </div>
);

export default Brand;