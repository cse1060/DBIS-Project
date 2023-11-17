"use client";
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'

export default function Property({ params }: any) {

  const [loading, setLoading] = useState(true);

  const [property, setProperty] = useState(undefined)
  const [details, setDetails] = useState(undefined)
  const [id, setId] = useState(-1);

  const getProperty = async () => {
    const data = await axios.post('/api/property', { id: id })
  }


  async function getPropertyId() {
    setId(await params.id);
    console.log(id);

    setLoading(false);
  }

  useEffect(() => {
    getPropertyId();
  }, [])


  if (loading) {
    return (
      <div>Loading...</div>
    )
  }
  else {
    getProperty();
    return (

      <div>
        Hello
      </div>
    )
  }
}
