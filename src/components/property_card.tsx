"use client";
import React from 'react'
import '../css/property-card.css'
import { CldImage } from 'next-cloudinary';

export default function PropertyCard(props: any) {
  { console.log(props); }
  return (
    <div className='card'>

      <button className='btn'><CldImage
        className='cld_img'
        width="960"
        height="600"
        alt="img"
        src={props.img}
      /></button>
      {/* <h1>{props.img}</h1> */}
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
