import React from 'react'
import "../css/base.css"
import PropertyCard from './property_card'

export default function BaseLayout(props:any) {
    // console.log(props);
    const properties = props.properties;
  return (
    <div>
      <h1 className='base_heading'>{props.title}</h1>
      <img src={props.img_url}></img>
      <button>Submit</button>
      {/* Design the card in property_card and pass it as a prop */}
      {properties.map((obj :any , idx : any)=>
        <PropertyCard 
            property_id={obj.id} 
            description={obj.desc}
        />
      )}
    </div>
  )
}
