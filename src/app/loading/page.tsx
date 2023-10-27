"use client";

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
        <div>
            Loading...
        </div>
    )
}
