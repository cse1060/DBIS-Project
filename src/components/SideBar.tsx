"use client"
import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../css/sidebar.css'
import *as Faicons from "react-icons/fa"
import *as Aiicons from "react-icons/ai"
import *as Cgicons from "react-icons/cg"
import { IconContext } from 'react-icons'
// import { a } from 'react-router-dom'
import {SideBardata} from './sidebardata'
function sidebar(){
    var width=window.innerWidth

    const [sidebar,setSidebar]= useState(false)
    const showSidebar=()=>setSidebar(!sidebar)
    return(
       
        <IconContext.Provider value={{color:'#fff'}}>
            <div className="Sidebar">
                <a href="#" className='menu-bars'>
                    <Faicons.FaBars onClick={showSidebar} />
                </a>
            </div>
            <nav className={width>425? (sidebar ?'nav-menu active':'nav-menu'):(sidebar ?'nav-menu2 active':'nav-menu2') }>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <a href='#' className='menu-bars'>
                            <Aiicons.AiOutlineClose/>
                        </a>
                    </li>
                    
                    <li className="profile">
                        <a href='/profile' className='profile'>
                            <Cgicons.CgProfile/>
                            <h2>view profile</h2>
                        </a>
                    </li>
                    
                    {SideBardata.map((item,index)=>{
                        return(
                            <li key={index} className={item.cname}>
                                <a href={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        
    )
}
export default  sidebar