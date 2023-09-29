"use client";

import React, { useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {

  const router = useRouter()

  

  const [data , setData]:any = useState("nothing")

  const getUserDetails =async ()=>{
    const res = await axios.get('/api/users/current_user')
    console.log(res.data.data.username);
    setData(res.data.data.username);
  }

  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <br />
      <h2>{data==='nothing'? "Nothing" : 
      <Link href={`/profile/${data}`}>{data}</Link> }</h2>

      <hr />
      <button onClick={getUserDetails}>Get User Details</button>
    </div>
  )
}