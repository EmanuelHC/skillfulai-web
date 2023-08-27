import React from 'react'
//import { Article, Brand, CTA } from './components'; 

import {Footer, Blog, Possibility, Features, WhatSKILLFULAI, Header, TokenTech, UseCases } from './containers'
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
     
  
      <CTA/>
      <Blog/>
      <Footer/>

    </div>
  )
}

export default App

