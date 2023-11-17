"use client";
import React from 'react'
import '../css/newscard.css'

export default function NewsCard(props: any) {
    var winwidth = window.innerWidth
    return (
        <>
            {/* <a href="#"> */}
            <div className="card" >

                <img src={props.img} />

                <a className='news_read' href="#"><h2>Read More</h2></a>

                <div className="content bg-zinc-800 " >
                    <h2 className='text-white'>{props.title}</h2>
                    <p className='text-sm text-zinc-200 text-center'>{props.content}</p>
                    <p className='text-xs text-zinc-400 text-center'>Author : {props.author} | Published At : {props.date} | Source : {props.source.name}</p>
                </div>

            </div>
            {/* </a> */}
        </>
    )
}