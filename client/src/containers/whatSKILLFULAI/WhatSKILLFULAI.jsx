import React from 'react'
import './whatskillfulai.css'
import { Feature } from '../../components'

const WhatSKILLFULAI = () => {
  return (
    <div className='skillfulai__wskai section__margin' id='wskai'>
      <div className='skillfulai__wskai-feature'>
        <Feature title='What is SKILLFUL-AI' text={'SkillfulAI is a cutting-edge platform that empowers individuals and businesses to create, share, and monetize personalized AI experiences. By transforming the art of personalization into a science, we enable users to craft AI solutions tailored to their unique needs and skills.'}/>
      </div>
      <div className='skillfulai__wskai-heading'>
        <h1 className='gradient__text'>
          The possibilites are beyond your imagination</h1>
        <p> Explore the library</p>
      </div >
      <div className='skillfulai__wskai-container'>
        <Feature title="Modular AI Assistants" text={"we believe in the power of customization. Our pre-made AI assistants are built around the concept of 'skills' - individual blocks of work that can be combined in countless ways. This allows you to create an AI assistant that is perfectly tailored to your needs, capable of handling specific tasks and workflows with precision and efficiency."}/>
        <Feature title="AI Development Tools" text={"With SkillfulAI's innovative AI creation tools, you have the power to build your own AI models. Our user-friendly interface and advanced tools make AI development accessible, whether you're a technical or non-technical user."}/>
        <Feature title='AI Marketplace' text={'The SkillfulAI marketplace is a dynamic platform where you can buy, sell, or trade AI skills and assistants. But we take it a step further with the integration of NFT (Non-Fungible Token) technology. This means you can truly own your AI assistant as a unique digital asset. With NFT ownership, you have exclusive rights to the use and benefits of your AI, opening up new possibilities for personalization and value creation enabling to monetize your AI creations.'}/>
      </div>
    </div>
  )
}

export default WhatSKILLFULAI ;
