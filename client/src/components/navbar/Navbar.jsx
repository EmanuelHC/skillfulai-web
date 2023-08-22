import React, {useState} from 'react'

import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'

//import logo from '../../assets/AI_white_logo2.svg' 
//import logo from '../../assets/logo2.svg' 
import logo from '../../assets/logo_header.svg' 
import S from '../../assets/S.svg'
import K from '../../assets/K.svg'
import I from '../../assets/I.svg'
import L from '../../assets/L.svg'
import F from '../../assets/F.svg'
import U from '../../assets/U.svg'
import A from '../../assets/A.svg'

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
              <button> Buy Token</button>
            </div>
            <div className='skillfulai__navbar-app'>
              <button type="button"> Launch APP </button>
            </div>
            <div className='skillfulai__navbar-sign'>
              <button type="button"> Sign Up </button>
            </div>
          </div>

      
        </div>

        <div className='skillfulai__navbar-links'>
            <div className='skillfulai__navbar-links_container'>
              <Menu />
            </div>
          </div>

   
        <div className='skillfulai__navbar-menu'>
         {toggleMenu  
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='skillfulai__navbar-menu_container scale-up-center'> 
            <div className="skillfulai__navbar-menu_container-links">
              <Menu />
              <div className='skillfulai__navbar-menu_container-links-sign'>
                <p> Sign in</p>
                <button type= "button"> Sign up </button>
              </div>
            </div>
          </div>
        )}
        </div>


      </div> 
    </div>
  )
}


export default Navbar 


