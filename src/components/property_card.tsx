"use client";
import React from 'react'
import '../css/property-card.css'

export default function PropertyCard(props: any) {
  { console.log(props); }
  return (
    <div className='card'>

      <button className='btn'><img src={props.img} alt="" /></button>
      <div className="content">
        <h2>{props.name}</h2>
        <p className="toggle">{props.type}</p>
        <p className="toggle">For {props.action}1</p>
        <p className="toggle">For {props.address}1</p>
        <h2>{props.city}1</h2>
        <p className="toggle">For {props.date}1</p>
      </div>
    </div>

  )
}
