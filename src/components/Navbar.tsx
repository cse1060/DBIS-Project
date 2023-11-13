"use client";
import React from 'react'
import "../css/navbar.css"
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useSession , signOut } from 'next-auth/react';

export default function Navbar() {
  const router = useRouter();
  const {data : session} = useSession();
  const logout =async ()=>{
    try {
      const response = await axios.get("/api/users/logout");
      if(session){
         signOut();
      }
      router.push('/login');

    } catch (error:any) {
      console.log(error);
    }
  }

  return (
    // <div>
    //   <div classNameNameName="navbar">
    //     <button classNameName="n buyer">For Buyers</button>
    //     <button classNameName="n tenants">For Tenants</button>
    //     <button classNameName="n owners">For Owners</button>
    //     <button classNameName="n dealers">For Dealers/builders</button>
    //     <button onClick={logout}>Logout</button>
    //   </div>
    // </div>
    <>
      <center className='above'>
        
        <nav id="main-nav" className="navigationWrapper">
          <div className="navbar">
            <ul>
              <li>
                <center>
                  <a href="#">
                    <img src="./images/logo.jpg" className="logoimg" />
                    Home
                  </a>
                </center>
              </li>
              <li>
                <a href="#">
                  Property Options
                  <span className="arrow">&#x25BC;</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="#">Buy</a>
                  </li>
                  <li>
                    <a href="#">Rent</a>
                  </li>
                  <li>
                    <a href="#">
                      Sell
                      <span className="arrow">&#x25B6;</span>
                    </a>
                    <ul className="submenu-2">
                      <li>
                        <a href="#">Bunglow</a>
                      </li>
                      <li>
                        <a href="#">Flat</a>
                      </li>
                      <li>
                        <a href="#">Plot</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Services
                  <span className="arrow">&#x25BC;</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="#">India</a>
                  </li>
                  <li>
                    <a href="#">Abroad</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">ContactUs</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </center>
    </>
  );
}
