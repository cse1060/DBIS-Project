"use client";
import React from "react";
import "../css/navbar.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();
  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      if (session) {
        signOut();
      }
      router.push("/login");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    // <div>
    //   <div classNameNameName="navbar">
    //     <button classNameName="n buyer">For Buyers</button>
    //     <button classNameName="n tenants">For Tenants</button>
    //     <button classNameName="n owners">For Owners</button>
    //     <button classNameName="n dealers">For Dealers/builders</button>
    //   </div>
    // </div>
    <>
      <button onClick={logout}>Logout</button>
      <center className="above">
        <nav id="main-nav" className="navigationWrapper">
          <div className="navbar">
            <ul>
              <li>
                <center>
                  <a href="/">
                    <img src="/images/logo.jpg" className="logoimg" />
                    Home
                  </a>
                </center>
              </li>
              <li>
                <a href="">
                  Property Options
                  <span className="arrow">&#x25BC;</span>
                </a>
                <div>
                  <ul className="submenu">
                    <li>
                      <a href="/postproperty">Post Property</a>
                    </li>
                    <li>
                      <a href="/postproperty/add_property">Add Property</a>
                    </li>
                    <li>
                      <a href="/rent">
                        Rent
                        <span className="arrow">&#x25B6;</span>
                      </a>
                      <ul className="submenu-2">
                        <li>
                          <a href="/rent">Bunglow</a>
                        </li>
                        <li>
                          <a href="/rent">Flat</a>
                        </li>
                        <li>
                          <a href="/rent">Plot</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/sale">
                        Sale
                        <span className="arrow">&#x25B6;</span>
                      </a>
                      <ul className="submenu-2">
                        <li>
                          <a href="/sale">Bunglow</a>
                        </li>
                        <li>
                          <a href="/sale">Flat</a>
                        </li>
                        <li>
                          <a href="/sale">Plot</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">
                  Blogs
                  <span className="arrow">&#x25BC;</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/blogs/all">All Blogs</a>
                  </li>
                  <li>
                    <a href="/blogs/create_blog">Create Blog</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/contactus">ContactUs</a>
              </li>
              <li>
                <a href="/chat">Chat</a>
              </li>
              <li>
                <a href="/profile/1">Profile</a>
              </li>
              <li>
                <a href="/news">NEWS</a>
              </li>
              <li>
                <a href="#">
                  <button onClick={logout}>Logout/Login</button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </center>
    </>
  );
}
