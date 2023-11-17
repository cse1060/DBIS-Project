"use client"
import React from "react";
import "../css/newscard2.css";
import { IoIosClose } from "react-icons/io";
export default function NewsCard2(props: any) {


    return (
        <div className="newscard2">
            <h2 className="ntitle">{props.title}</h2>
            <span className="content2 closebutton" onClick={props.close}><IoIosClose className='closei' /></span>
            <img src={props.img} alt="b" />
            <span className="content2">{props.content} <a href={props.url} className="text-blue-900 text-xl font-extrabold">Continue Here...</a></span>

            <br /><br />
            <span className="descr">{props.description}</span>

            <div className="authord">
                <h2 className="authorn">{props.author}</h2>
                <h2 className="date">{props.date}</h2>
            </div>
        </div>
    )
}