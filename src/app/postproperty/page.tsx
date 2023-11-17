"use client";
import RentForm from '@/components/RentForm';
import SellForm from '@/components/SellForm';
import React, { useState } from 'react'
import "../../css/postproperty.css";
import ParticleBackground from "@/components/ParticleBackground";
("../../components/ParticleBackground");
import FadeIn from "react-fade-in";
export default function PostProperty() {

    const [action, setAction] = useState("sell")

    return (
      <div className="postProperty">
        <ParticleBackground/>
        <center>
          <h1 className='Head'>
            Add Basic Details
          </h1>
          <FadeIn>
          <h2 className='youare'>You are looking to...</h2>
          <hr />
            <button
              onClick={(event) => {
                event.preventDefault();
                setAction("sell");
              }}
              className=""
            >
              Sell
            </button>

            <hr />
            <button
              onClick={(event) => {
                event.preventDefault();
                setAction("rent");
              }}
            >
              Rent
            </button>
            <hr />
            {action === "sell" ? <SellForm /> : <RentForm />}
          </FadeIn>
        </center>
      </div>
    );
}
