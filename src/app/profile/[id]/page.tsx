"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function UserProfile({ params }: any) {
  var data: any;

  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");


  async function getProfile() {
    const res = await axios.post("/api/profile/getInfo", { id: userName });
    data = res.data
    console.log(data, "**");
    console.log(res.data);
    setLoading(false);
  }


  useEffect(() => {
    setUserName(params.id);
  }, [])

  useEffect(() => {
    setLoading(false);
  }, [userName])
  if (loading) {
    return (
      <h1>Loading</h1>
    )
  } else {

    getProfile();

    return (
      <div>
        <h1>Profile</h1>
        <hr />
        <p>Profile Page <span className='p-2 rounded bg-blue-500 text-lg'>{params.id}</span></p>
      </div>
    )
  }
}