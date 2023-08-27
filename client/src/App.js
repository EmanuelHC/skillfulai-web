import React from 'react'
//import { Article, Brand, CTA } from './components'; 

import {Footer, Blog, Possibility, Features, WhatSKILLFULAI, Header, TokenTech, UseCases, RoadMap, Founders, Advisors } from './containers'
import {CTA, Brand, Navbar} from './components';  
import './App.css' ;

const App = () => {
  return (
    <div className= "App"> 
      <div className="gradient__bg">
        <Navbar/>
        <Header/> 
        <Brand/> 
      </div>
      <div  className='wskai'>
      <WhatSKILLFULAI/>
      </div>
      <div>
      <Features/>
      </div>
      <div className='possibility'>
      <Possibility/>
      
      </div>
      <div className='token'>
      <TokenTech/>
      </div>
      <div className='UseCases'>
      <UseCases/>
      </div>
      <div className='RoadMap'>
      <RoadMap/>
      </div>
      <div className='Founders'>
      <Founders/>
      </div>
      <div className='Advisors'>
      <Advisors/>
      </div>
  
      <CTA/>
      <Blog/>
      <Footer/>

    </div>
  )
}

export default App

