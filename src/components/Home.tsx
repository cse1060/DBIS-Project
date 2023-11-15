import React from 'react'
import Link from "next/link"
import "../css/home.css"

export default function Home() {
    return (
        <>
            <div className='homediv'>
                <div className='homevideodiv'>
                    <video autoPlay muted loop id="myVideo" className='homevideo'>
                        <source src="videos/home_video.webm" type="video/webm" />
                    </video>
                </div>
                <div className='overlay'>
                    <div>
                        <h1>Your dream </h1>
                    </div>

                    <div className="slidingVertical" style={{ height: "72px", alignItems: "center" }}>
                        <h1>
                            <span>Apartment</span>
                            <span>Bungalow</span>
                            <span>Office</span>
                            <span>Plot</span>
                            <span>Property</span>
                        </h1>
                    </div>

                    <div>
                        <h1>
                            awaits. Find them Here
                        </h1>
                    </div>

                    <div>
                        <button>Get Started</button>
                    </div>
                    <Link href="/postproperty" className='text-white'>Post Property</Link>

                </div>
            </div >

        </>
    )
}