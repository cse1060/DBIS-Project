"use client"
import React,{useState} from 'react'
import *as Faicons from "react-icons/fa"
import *as Aiicons from "react-icons/ai"
import *as Ioicons from "react-icons/io"
import { homedir } from 'os'

export  const SideBardata=[
    {
        title: "Home",
        path: "/",
        icon: <Aiicons.AiFillHome/>,
        cname:  'nav-text'
    },
    {
        title: "Reports",
        path: "/reports",
        icon: <Ioicons.IoIosPaper/>,
        cname:  'nav-text'
    },
    {
        title: "Products",
        path: "/products",
        icon: <Faicons.FaCartPlus/>,
        cname:  'nav-text'
    },
    {
        title: "Team",
        path: "/team",
        icon: <Ioicons.IoIosPeople/>,
        cname:  'nav-text'
    },
    {
        title: "Messages",
        path: "/messages",
        icon: <Faicons.FaEnvelopeOpenText/>,
        cname:  'nav-text'
    },
    {
        title: "Support",
        path: "/support",
        icon: <Ioicons.IoMdHelpCircle/>,
        cname:  'nav-text'
    },
]