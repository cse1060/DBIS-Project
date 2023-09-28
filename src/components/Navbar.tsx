import React from 'react'
import "../css/navbar.css"

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <button className="n buyer">For Buyers</button>
        <button className="n tenants">For Tenants</button>
        <button className="n owners">For Owners</button>
        <button className="n dealers">For Dealers/builders</button>
      </div>
    </div>
  )
}
