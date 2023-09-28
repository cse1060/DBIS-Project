"use client";
import React from 'react'

export default function PropertyCard(props :any) {
  {console.log(props);}
  return (
    <div>
        <h1>This is property {props.property_id}</h1>
        <p>{props.description}</p>
    </div>
  )
}
