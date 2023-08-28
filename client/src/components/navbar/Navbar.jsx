import React, {useState} from 'react'

import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'

//import logo from '../../assets/AI_white_logo2.svg' 
//import logo from '../../assets/logo2.svg' 
import logo from '../../assets/logo_header.svg' 
import S from '../../assets/S0.svg'
import K from '../../assets/K0.svg'
import I from '../../assets/I0.svg'
import L from '../../assets/L0.svg'
import F from '../../assets/F0.svg'
import U from '../../assets/U0.svg'
import A from '../../assets/A0.svg'

import './navbar.css'

const Menu = () => (
  <>
    <p><a href='#home'> Home  </a> </p>
    <p><a href='#wskai'>Whats Skillful AI </a> </p>
    <p><a href='#possibility'> Solution </a> </p>
    <p><a href='#features'>Use Cases </a> </p>
    <p><a href='#Resources'>Resources </a> </p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] =useState(false);
  const redirectToWhitelistForm = () => {
    window.open('https://docs.google.com/forms/d/1Vks6Xlkcxw89keWjrOJiSylOY97Ii8LcsSTynb0lyjY/viewform?edit_requested=true', '_blank');
  };

  return (
    <div>
      < div className='skillfulai__navbar'>
        <div className="skillfulai__navbar-top">
          <div className='skillfulai__navbar-brand_container'>
            <img src={logo} alt='logo'/>
            <img src={S} alt='S'/>
            <img src={K} alt='K'/>
            <img src={I} alt='I'/>
            <img src={L} alt='L'/>
            <img src={L} alt='L'/>
            <img src={F} alt='F'/>
            <img src={U} alt='U'/ >
            <img src={L} alt='L' className='space-after'/>
            <img src={A} alt='A'/>
            <img src={I} alt='I'/>
          </div> 

          <div className='skillfulai__navbar-buttons'>
            <div className='skillfulai__navbar-buy'>
              <button onClick={redirectToWhitelistForm} > Buy Token</button>
            </div>
            <div className='skillfulai__navbar-app'>
              <button type="button"> Launch APP </button>
            </div>
            <div className='skillfulai__navbar-sign'>
              <button type="button" onClick={redirectToWhitelistForm} > Sign Up </button>
            </div>
          </div>

      
        </div>

        <div className='skillfulai__navbar-links'>
            <div className='skillfulai__navbar-links_container'>
              <Menu />
            </div>
          </div>

   
      


      </div> 
    </div>
  )
}


export default Navbar 


