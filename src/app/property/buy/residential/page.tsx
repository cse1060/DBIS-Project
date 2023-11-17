"use client";
import React, { useEffect, useState } from 'react'
import Sidebar2 from '@/components/SideBar2'
import PropertyCard from '@/components/property_card'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import "@/css/sidebar2.css"
import PropertyCard2 from "@/components/PropertyCard2";
import "../../../../css/buy-residential.css"
import "../../../../css/propertycard2.css"

export default function ResidentialBuy() {
    const searchParams = useSearchParams()
    const city = searchParams.get('city')

    const [maxValue, setMaxValue] = useState(25);
    const [minValue2, setMinValue2] = useState(2000);

    const handleSliderChange = (value: any) => {
        setMaxValue(value);
    };
    const handleSliderChange2 = (value: any) => {
        setMinValue2(value);
    };

    async function sendrequest() {
        const data = await axios.post("/api/property/buy/residential",
            {
                city: searchParams.get('city'),
                budget: 100000,
                subtype: "",
                rooms: 10
            })
    }

    useEffect(() => {
        sendrequest();
    }, [])

    return (
        <div>
            <Sidebar2 />
            <div className="page">
                <div className=" grid-item left">
                    <h2 className="budget">Budget</h2>
                    <div>
                        <h2 className="mbudget">Maximum Budget: {maxValue} lacs</h2>

                        <input type="range" min="0" max="1000" onChange={(e) => {
                            setMaxValue(e.target.valueAsNumber)
                        }}></input>
                    </div>
                    <h2 className="budget">Area</h2>
                    <div>
                        <h2 className="mbudget">Minimum Area: {minValue2} sq.ft.</h2>

                        <input type="range" min="0" max="10000" onChange={(e) => {
                            setMinValue2(e.target.valueAsNumber)
                        }}></input>
                    </div>

                    <div className="types">
                        <h2 className="budget">Property Types</h2>
                        <ul className="ptypes">
                            <li><h4>Apartment</h4></li>
                            <li><h4>Bungalow</h4></li>
                            <li><h4>Villa</h4></li>
                            <li><h4>Duplex</h4></li>
                        </ul>
                    </div>
                    <div className="bhktypes">
                        <h2 className="budget">No. of Bedrooms</h2>
                        <ul className="ptypes btypes">
                            <li><h4>1RK/1BHK</h4></li>
                            <li><h4>2BHK</h4></li>
                            <li><h4>3BHK</h4></li>
                            <li><h4>4BHK</h4></li>
                            <li><h4>4+BHK</h4></li>

                        </ul>
                    </div>
                </div>
                <div className="card-display grid-item right">
                    <h2 className="title">House for sale below {maxValue} lacs</h2>
                    <PropertyCard2 params={{ id: 1 }} />
                    <br />
                    <PropertyCard2 params={{ id: 2 }} />
                    <br />
                    <PropertyCard2 params={{ id: 3 }} />
                </div>
            </div>
        </div>
    )
}