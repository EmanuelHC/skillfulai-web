import React from 'react'
//import { Article, Brand, CTA } from './components'; 

import {Footer, Blog, Possibility, Features, WhatSKILLFULAI, Header, TokenTech, UseCases, RoadMap, Founders, Advisors, Partners } from './containers'
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
      <div className='features'>
      <Features/>
      </div>
      <div className='possibility'>
      <Possibility/>
      
      </div>
      <div className='TokenTech'>
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
      <div className='Partners'>
      <Partners/>
      </div>
     
      
      <Blog/>
      <Footer/>

    </div>
  )
}

export default App

