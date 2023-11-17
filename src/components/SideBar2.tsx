"use client"
import React, { useState, useEffect } from 'react'
import { FaGoogle } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../css/sidebar.css'
import { MdGpsFixed } from "react-icons/md";
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

    const useWidth = () => {
        const [width, setWidth] = useState(0)
        const handleResize = () => setWidth(window.innerWidth)
        useEffect(() => {
            handleResize()
            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
        return width
    }

    var width = useWidth();

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (

        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="Sidebar">
                <div className="sd">
                    <div id="main-nav2" className="">
                        <div className="">
                            <ul>
                                <li>
                                    <a href="#" style={{ backgroundColor: "#091e42", height: "50px", paddingLeft: "5px", paddingRight: "5px", borderRadius: "10px" }}>
                                        Property Type
                                        <span className="arrow2">&#x25BC;</span>
                                    </a>
                                    <ul className="submenu2">
                                        <li>
                                            <a href="#">Residential<span className="arrow2">&#x25B6;</span></a>
                                            <ul className="submenu2-2">
                                                <li>
                                                    <a href="#" onClick={() => { setButtonName('buy'); setType('residential') }}>Buy</a>
                                                </li>
                                                <li>
                                                    <a href="#" onClick={() => { setButtonName('rent'); setType('residential') }}>Rent</a>
                                                </li>

                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Commercial
                                                <span className="arrow2">&#x25B6;</span>
                                            </a>
                                            <ul className="submenu2-2">
                                                <li>
                                                    <a href="#" onClick={() => { setButtonName('buy'); setType('commercial') }}>Buy</a>
                                                </li>
                                                <li>
                                                    <a href="#" onClick={() => { setButtonName('rent'); setType('commercial') }}>Rent</a>
                                                </li>

                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="search-container">
                        <input type="text" className="search-bar" placeholder="Search..." onChange={(e) => {
                            setCity(e.target.value)
                        }} />
                        <MdGpsFixed style={{ color: "blue", position: "relative", left: "500px", top: "-30px" }} />
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
                            <h2 className='rv'>view profile</h2>
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