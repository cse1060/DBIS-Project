"use client";
import RentForm from '@/components/RentForm';
import SellForm from '@/components/SellForm';
import React, { useState } from 'react'

export default function PostProperty() {

    const [action, setAction] = useState("sell")

    return (
        <div>
            <h1>Add Basic Details</h1>
            <h2>You are looking to...</h2>
            <hr />
            <button onClick={(event) => { event.preventDefault(); setAction("sell") }}>Sell</button>
            <hr />
            <button onClick={(event) => { event.preventDefault(); setAction("rent") }}>Rent</button>
            <hr />
            {action === "sell" ? <SellForm /> : <RentForm />}
        </div>
    )
}
