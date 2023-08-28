import React from 'react'
import './whatskillfulai.css'
import { Feature } from '../../components'
import logo_half from '../../assets/logo-half.png';
import S from '../../assets/S.svg';
import K from '../../assets/K.svg';
import I from '../../assets/I.svg';
import L from '../../assets/L.svg';
import F from '../../assets/F.svg';
import U from '../../assets/U.svg';
import A from '../../assets/A.svg';

const WhatSKILLFULAI = () => {
  return (
    <div className='skillfulai__wskai ' id='wskai'>

      <div className='skillfulai__wskai-row1'>
      
        <Feature  title="What is SKILLFUL AI?" text={""}/>
        <p> Skillful AI is an advanced platform that empowers individuals by providing a personalized AI ecosystem. It enables users to stay current with rapid technological advancements, offering customized virtual assistants trained in domain-specific knowledge. With a focus on context and user-specific memories, Skillful AI ensures comprehensive and tailored interactions. Additionally, it embraces developers, granting access to tools for creating and monetizing assistants, fostering a collaborative and dynamic ecosystem. Powered by blockchain technology.  Skillful AI is a gateway to harnessing the benefits of AI and staying ahead in a dynamic digital world.</p>
      </div>
      <div className='skillfulai__wskai-row2'>
        <h1 className='gradient__text'>
          The possibilites are beyond your imagination</h1>
          <div className="skillful-ai">
            <img src={S} alt="S" />
            <img src={K} alt="K" />
            <img src={I} alt="I" />
            <img src={L} alt="L" />
            <img src={L} alt="L2" />
            <img src={F} alt="F" />
            <img src={U} alt="U" />
            <img src={L} alt="L3" className="space" /> 
            <img src={A} alt="A" />
            <img src={I} alt="I2" />
        </div>

      </div >
      <div className='skillfulai__wskai-row3'>
        <Feature title="Modular AI Assistants" text={"Skillful AI introduces a revolutionary approach to AI with its Modular AI Assistants. Users can craft bespoke AI solutions by stacking multiple models and tools, ensuring a tailored fit for every unique need. This modularity not only enhances adaptability but also ensures that AI solutions remain scalable and customizable, catering to evolving requirements with ease."}/>
       
        <Feature title="AI Development Tools" text={"Empower your AI journey with Skillful AI's comprehensive suite of development tools. Whether you're a seasoned developer or just starting out, our platform offers intuitive interfaces, guided workflows, and a rich repository of templates. Dive deep into AI development, integrate external tools, and harness the power of collaborative environments to bring your AI vision to life."}/>
        <Feature title='AI Marketplace' text={'Step into Skillful AI\'s dynamic AI Marketplace, where the worlds of AI and blockchain converge. Explore a diverse range of AI assistants and tools, each represented as unique Non-Fungible Tokens (NFTs). This ensures the authenticity and exclusivity of every AI asset. Whether you\'re on the hunt for the next groundbreaking AI solution or looking to tokenize and monetize your own AI assistant, our marketplace provides a secure and transparent platform for all your AI NFT transactions. Experience the future of AI commerce today.'}/>
      </div>
      <div className='skillfulai__wskai-row4'>
       <button className='skillfulai__wskai-row4-b1' type="submit">Check Assistants</button>
       
       <button className='skillfulai__wskai-row4-b2' type="submit">Search for Dev Tools</button>
       <button className='skillfulai__wskai-row4-b3' type="submit">Explore the Marketpalce</button>

      </div>
      <div className='skillfulai__wskai-images'>
       <img src={logo_half} alt="logo_half" className="half-logo-wskai" />
      </div>
    </div>
  )
}

export default WhatSKILLFULAI ;
