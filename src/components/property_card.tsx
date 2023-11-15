"use client";
import React from 'react'
import '../css/property-card.css'

export default function PropertyCard(props :any) {
  {console.log(props);}
  return (
    <div className='card'>
        
        <button className='btn'><img src="https://images.unsplash.com/photo-1566908829550-e6551b00979b?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuc2lvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" /></button>
      <div className="content">
        <h2>This is my description</h2>
        <p className="toggle">This is my entire description</p>
      </div>
    </div>

  )
}
