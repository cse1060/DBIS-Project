"use client";
import React from 'react'
import '../css/newscard.css'

export default function NewsCard (){
    var winwidth=window.innerWidth
    return(
        <>
        {/* <a href="#"> */}
            <div className="card" >
            
                    <img src="https://www.wbcsd.org/var/site/storage/images/overview/news-insights/wbcsd-insights/accelerating-business-along-the-road-to-a-nature-positive-future/225091-1-eng-GB/Accelerating-business-along-the-road-to-a-nature-positive-future_i1140.jpg" alt="image" />
                
              
                    <a className='news_read' href="#"><h2>Read More</h2></a>
               
                <div className="content">
                    <h2>This is the title</h2>
                    <p>This is little description of the prdoct Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita doloremque perspiciatis facere voluptates dolorum aliquid hic, laudantium sequi quas nihil nesciunt commodi?......</p>
                </div>
                
            </div>
            {/* </a> */}
        </>
    )
}