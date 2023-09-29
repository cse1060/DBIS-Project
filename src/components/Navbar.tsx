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
    <div>
      <div className="navbar">
        <button className="n buyer">For Buyers</button>
        <button className="n tenants">For Tenants</button>
        <button className="n owners">For Owners</button>
        <button className="n dealers">For Dealers/builders</button>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}
