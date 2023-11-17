"use client";

import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import "@/css/loading.css"

export default function Loading() {

    const router = useRouter()


    const [data, setData]: any = useState("nothing")

    useEffect(() => {
        getUserDetails();
    }, [])
    async function getUserDetails() {
        const res = await axios.get('/api/users/current_user')
        console.log(res.data.data.username);
        setData(res.data.data.username);
    }
    useEffect(() => {
        router.push(`/profile/${data}`);
    }, [data])

    return (
        <div className='bg-black'>
            <div className="loader-wrapper ">
                <img className="loader" src="images/load.gif" alt="Loading GIF" />
                <div className="loader2"></div>
                <div className="text">Loading<TypeAnimation
                    sequence={[
                        '',
                        400, // wait 1s before replacing "Mice" with "Hamsters"
                        '.',
                        400,
                        '..',
                        400,
                        '...',
                        400
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                /><br></br>
                    <span>
                        <CountUp end={100} start={0} />%
                    </span></div>
            </div>
        </div>
    )
}