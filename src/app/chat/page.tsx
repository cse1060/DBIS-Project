"use client";
import React, { useEffect, useState } from 'react'
import "@sendbird/uikit-react/dist/index.css";
import dynamic from "next/dynamic";
import axios from 'axios';

export default function Chat() {

    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState("");

    async function getUser() {

        const data = await axios.get("/api/users/current_user");
        console.log(data.data.data.username);

        setUsername(data.data.data.username);

        setLoading(false);
    }

    useEffect(() => {
        getUser();
    }, [])

    const DynamicAppWithNoSSR = dynamic(() => import("@/components/ChatBox.jsx"), {
        ssr: false,
        loading: () => <p>...</p>
    });

    if (loading) {
        return (<>Loading...</>)
    }
    return (
        <div>
            Hello
            <DynamicAppWithNoSSR id={username} />
        </div>
    )
}
