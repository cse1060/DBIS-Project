"use client";
import React from 'react'
import BaseLayout from '../../components/baselayout'

export default function SalePage() {
  return (
    <div>
        <BaseLayout 
            title="Sale" 
            img_url="https://th.bing.com/th?id=OIP.dLLGN4LHHnI40OZoX6_CNwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            properties = {[
                {
                    id : "a" ,
                    desc : "Hello this shows the details of the property"
                },
                {
                    id : "b" ,
                    desc : "Hello this shows the details of the property"
                },
                {
                    id : "c" ,
                    desc : "Hello this shows the details of the property"
                }

            ]}
        />
    </div>
  )
}