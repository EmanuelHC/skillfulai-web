import React from 'react'
//import { Article, Brand, CTA } from './components'; 

import {Footer, Blog, Possibility, Features, WhatSKILLFULAI, Header } from './containers'
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
      
      <WhatSKILLFULAI/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>

    </div>
  )
}

export default App

