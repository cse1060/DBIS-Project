"use client"
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../css/sidebar2.css'
import *as Faicons from "react-icons/fa"
import *as Aiicons from "react-icons/ai"
import *as Cgicons from "react-icons/cg"
import { FaChevronDown } from "react-icons/fa";
import { IconContext } from 'react-icons'
// import { a } from 'react-router-dom'
import { useRouter } from 'next/navigation';
import { SideBardata } from './sidebardata'

function Sidebar2() {

    const router = useRouter();
    async function search_data() {
        if (buttonName === 'buy' && type === 'residential') {
            router.push(`/property/${buttonName}/${type}?city=${city}`)
        } else if (buttonName === 'rent' && type === 'residential') {
            router.push(`/property/${buttonName}/${type}?city=${city}`)
        } else if (buttonName === 'rent' && type === 'commercial') {
            router.push(`/property/${buttonName}/${type}?city=${city}`)
        } else if (buttonName === 'buy' && type === 'commercial') {
            router.push(`/property/${buttonName}/${type}?city=${city}`)
        }
    }

    const [buttonName, setButtonName] = useState('buy');
    const [type, setType] = useState('residential');
    const [city, setCity] = useState('agra');
    const [isDropdownOpen, setDropdownOpen] = useState(false);



    const dropdownItems = [
        { label: 'buy', value: 'buy' },
        { label: 'Rent', value: 'Rent' },
    ];

    const changeButtonName = (newName: any) => {
        setButtonName(newName);
        setDropdownOpen(false); // Close the dropdown after clicking an item
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    var width = window.innerWidth

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (

        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="Sidebar">
                <div className="sd">
                    <div className="dropdown">

                        <button className="dropdown-button" onClick={toggleDropdown}>

                            <div className="dropc">

                                {buttonName}<FaChevronDown id="dropi" /></div>
                        </button>
                        {isDropdownOpen && (
                            <div className="dropdown-content">
                                {dropdownItems.map((item) => (
                                    <a key={item.value} href="#" onClick={() => changeButtonName(item.value)}>
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="search-container">
                        <input type="text" className="search-bar" placeholder="Search..." onChange={(e) => {
                            setCity(e.target.value)
                        }} />
                        <button className="search-button" onClick={search_data}>Search</button>
                    </div>
                </div>
                <a href="#" className='menu-bars'>
                    <Faicons.FaBars onClick={showSidebar} />
                </a>
            </div>
            <nav className={width > 425 ? (sidebar ? 'nav-menu active' : 'nav-menu') : (sidebar ? 'nav-menu2 active' : 'nav-menu2')}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <a href='#' className='menu-bars'>
                            <Aiicons.AiOutlineClose />
                        </a>
                    </li>

                    <li className="profile">
                        <a href='/profile' className='profile'>
                            <Cgicons.CgProfile />
                            <h2>view profile</h2>
                        </a>
                    </li>

                    {SideBardata.map((item, index) => {
                        return (
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
export default Sidebar2