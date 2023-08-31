import React from 'react';
import { Feature } from '../../components';
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
    <div className="flex flex-col p-4 md:p-8 overflow-hidden">

      <div className="flex flex-col md:flex-row mt-8 ml-4 md:ml-8 items-center justify-between">
        <Feature title="What is SKILLFUL AI?" text={""} />
        <p className="mt-4 md:mt-0 w-full md:w-3/4 ml-auto mr-4 md:mr-20 text-purple-300 font-medium text-xl md:text-2xl">Skillful AI is an advanced platform that empowers individuals by providing a personalized AI ecosystem. It enables users to stay current with rapid technological advancements, offering customized virtual assistants trained in domain-specific knowledge. With a focus on context and user-specific memories, Skillful AI ensures comprehensive and tailored interactions. Additionally, it embraces developers, granting access to tools for creating and monetizing assistants, fostering a collaborative and dynamic ecosystem. Powered by blockchain technology.  Skillful AI is a gateway to harnessing the benefits of AI and staying ahead in a dynamic digital world.
</p>
      </div>

      <div className="relative flex flex-col justify-left mt-16 ml-4 md:ml-16">
        <h1 className="z-20 text-left mb-4 text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-transparent">The possibilities are beyond your imagination</h1>
        <div className="absolute top-0 flex justify-between items-center w-full opacity-10">
          <img src={S} alt="S" />
          <img src={K} alt="K" />
          <img src={I} alt="I" />
          <img src={L} alt="L" />
          <img src={L} alt="L2" />
          <img src={F} alt="F" />
          <img src={U} alt="U" />
          <img src={L} alt="L3" />
          <img src={A} alt="A" />
          <img src={I} alt="I2" />
        </div>
      </div>
        <div className="skillfulai__wskai-row4">
            <div className="flex flex-wrap flex-row mt-8 ml-4 md:ml-8 justify-left">
            <div className="relative group flex flex-col w-full md:w-1/3 items-center pb-20">
              <Feature title="Modular AI Assistants" text="We believe in the power of customization. Our pre-made AI assistants are built around the concept of 'skills' - individual blocks of work that can be combined in countless ways. This allows you to create an AI assistant that is perfectly tailored to your needs." />
              <span className="absolute z-50 bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Coming Soon</span>
              <button className="absolute bottom-0 w-400 p-4 h-15 bg-gradient-to-r from-blue-600 to-purple-300 text-white text-lg font-semibold text-center rounded-lg shadow-md transform hover:scale-105 transition-transform transition-shadow duration-300 hover:bg-purple-700">Check Assistants</button>
          </div>  
          <div className="relative group flex flex-col w-full md:w-1/3 items-center pb-20">
              <Feature title="AI Development Tools" text="With SkillfulAI's innovative AI creation tools, you have the power to build your own AI models. Our user-friendly interface and advanced tools make AI development accessible, whether you're a technical or non-technical user." />
              <span className="absolute z-50 bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Coming Soon</span>
              <button className="absolute bottom-0 w-400 p-4 h-15 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold text-center rounded-lg shadow-md transform hover:scale-105 transition-transform transition-shadow duration-300 hover:bg-blue-700">Search for Dev Tools</button>
          </div>
          <div className="relative group flex flex-col w-full md:w-1/3 items-center pb-20">
              <Feature title="AI Marketplace" text="The SkillfulAI marketplace is a dynamic platform where you can buy, sell, or trade AI skills and assistants. But we take it a step further with the integration of NFT technology. This means you can truly own your AI assistant as a unique digital asset." />
              <span className="absolute z-50 bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Coming Soon</span>
              <button className="absolute bottom-0 w-400 p-4 h-15  bg-gradient-to-r from-red-500 to-pink-600 text-white text-lg font-semibold text-center rounded-lg shadow-md transform hover:scale-105 transition-transform transition-shadow duration-300 hover:bg-pink-700">Explore the Marketplace</button>
          </div>
          </div>
        </div>


      <div className="relative mt-8">
        <img src={logo_half} alt="logo_half" className="absolute left-0 bottom-[-2.5rem] z-[-1]" />
      </div>

    </div>
  )
}

export default WhatSKILLFULAI;
