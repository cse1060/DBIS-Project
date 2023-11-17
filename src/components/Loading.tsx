import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import "@/css/loading.css"
import React, { useEffect, useState } from 'react'
export default function Loading() {
    return (
        <div className='bg-black'>
            <div className="loader-wrapper ">
                <img className="loader" src="images/load.gif" alt="Loading GIF" />
                <div className="loader2"></div>
                <div className="text">Loading<TypeAnimation
                    sequence={[
                        '',
                        400, // wait 1s before replacing "Mice" with "Hamsters"
                        '.',
                        400,
                        '..',
                        400,
                        '...',
                        400
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                /><br></br>
                    <span>
                        <CountUp end={100} start={0} />%
                    </span></div>
            </div>
        </div>
    )
}
