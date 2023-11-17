"use client";
import React, { useEffect } from 'react'
import Sidebar2 from '@/components/SideBar2'
import PropertyCard from '@/components/property_card'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'

export default function CommercialBuy() {
    const searchParams = useSearchParams()
    const city = searchParams.get('city')

    async function sendrequest() {
        const data = await axios.post("/api/property/rent/commercial",
            {
                city: searchParams.get('city'),
                budget: 100000,
                subtype: "",
                area: 10000
            })
    }

    useEffect(() => {
        sendrequest();
    }, [])

    return (
        <div>
            <Sidebar2 />
            <PropertyCard />
            <button onClick={sendrequest}>req</button>
        </div>
    )
}
