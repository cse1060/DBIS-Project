"use client";
import React, { useState } from 'react'
import '../css/blogcard.css'

export default function BlogCard(props: any) {
    var winwidth = window.innerWidth

    const [mode, setMode] = useState(0);
    return (
        <>
            {/* <a href="#"> */}
            <div className="card" >
                <a className='news_read' onClick={() => setMode(1 - mode)}><h2>{mode === 0 ? "Read More " : "Show less"}</h2></a>

                <div className="content">
                    <h2>{props.title}</h2>
                    {mode === 0 ? <p>{props.body.slice(0, 50)}...</p> : <p>{props.body}</p>}
                </div>
                <div className="blogger">

                    <img src={props.user_img} alt="" className="profile2" />
                    <div className="info">
                        <h1 >{props.user}</h1>
                        <h3 className='date_blog'>Date : {props.date}</h3>
                    </div>
                </div>
            </div>
            {/* </a> */}
        </>
    )
}