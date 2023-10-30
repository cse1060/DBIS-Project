"use client";
import AddCommercial from '@/components/AddCommercial';
import AddResidential from '@/components/AddResidential';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'


export default function AddProperty() {

    const params = useSearchParams();
    const [property_id, setProperty] = useState(params.get("id"));
    const [action, setAction] = useState("");
    const [type, setType] = useState("");
    const [subType, setSubType] = useState("");

    async function getData() {
        const data = await axios.get(`/api/addProperty?id=${property_id}`);

        console.log(data.data);

        setAction(data.data.action);
        setType(data.data.type);
        setSubType(data.data.subType);
    }

    useEffect(() => {
        getData();
    }, [])


    if (type === "commercial") {
        return (
            <div>
                <AddCommercial type={type} action={action} subType={subType} property_id={property_id} />
            </div>
        )
    } else if (type === "residential") {
        return (
            <div>
                <AddResidential type={type} action={action} subType={subType} property_id={property_id} />
            </div>
        )
    }

}
