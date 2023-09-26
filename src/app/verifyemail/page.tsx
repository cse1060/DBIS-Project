"use client";
import React , {useState , useEffect}from 'react'
import axios from 'axios';
import Link from 'next/link';

export default function verifyemailpage() {
    const [userId ,setUserId] = useState(0);
    const [token , setToken] = useState("");
    const [verified , setVerified] = useState(false);
    const [error , setError] = useState(false);

    const verifyUserEmail = async () =>{
        try {
            await axios.post('/api/users/verifyemail' , {userId , token })
            setVerified(true);
        } catch (error : any) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        const urlToken = window.location.search.split('=');
        setToken(urlToken[2] || "");
        setUserId(parseInt(urlToken[1]));
    },[])

    useEffect(()=>{
        if(token.length > 0){
            verifyUserEmail();
        }
    },[token]);
  return (
    <div>
        <h1>Verify Email</h1>
        <h2>{token ? token: "no token"}</h2>
        {verified && (
            <>
            <h1>Email Verified</h1>
            <Link href = "/login">Proceed to login</Link>
            </>
        )}
    </div>
  )
}
