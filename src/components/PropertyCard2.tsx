"use client"
import React from "react";
import { useState } from "react";
import '../css/propertycard2.css'
import Footer from "./Footer";

export default function PropertyCard2(props: any) {
    const [btnstate, togglebutton] = useState("heart-outline")
    console.log(btnstate)
    console.log(props.params.id)
    let id = "carouselExampleIndicators" + props.params.id
    return (
        <div className="property-card-2">
            <div className="card-image-div">
                {/* <img className="card-image" src="/images/house.jpg" /> */}
                <div id={id} className="carousel slide" data-ride="carousel" data-interval='false'>
                    <ol className="carousel-indicators">
                        <li data-target={'#' + id} data-slide-to="0" className="active"></li>
                        <li data-target={'#' + id} data-slide-to="1"></li>
                        <li data-target={'#' + id} data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="card-image" src="/images/house.jpg" />
                        </div>
                        <div className="carousel-item">
                            <img className="card-image" src="/images/invest.jpg" />
                        </div>
                        <div className="carousel-item">
                            <img className="card-image" src="/images/buy.jpg" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href={'#' + id} role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href={'#' + id} role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="card-body">
                <div className="card-details">
                    <div className="property-name">
                        <p>DDA Flats</p>
                    </div>
                    <div className="property-desc-1">
                        <p>10 BHK property in New York</p>
                    </div>
                    <div className="property-features">
                        <div className="property-features-cost">
                            <p>₹ 28 <small>Cr</small></p>
                        </div>
                        <div className="property-features-area">
                            <p>43560<small>sq.ft</small></p>
                        </div>
                        <div className="property-features-bhk">
                            <p>6 <small>BHK</small></p>
                        </div>
                    </div>
                    <div className="property-desc-2">
                        <p>Lorem ipsum dolor, sit voluptas error suscipit, explicabo fugit delectus? Quos, voluptas soluta earum fugiat laborum accusamus perferendis quaerat architecto expedita atque.</p>
                    </div>
                    <div className="property-buttons">
                        <ion-icon name={btnstate} onClick={() => togglebutton((btnstate == "heart-outline" ? "heart" : "heart-outline"))}>
                            <div className='red-bg'></div>
                        </ion-icon>
                    </div>
                </div>
            </div>
        </div >
    )
}