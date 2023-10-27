"use client";
import AddCommercial from '@/components/AddCommercial';
import AddResidential from '@/components/AddResidential';
import { useSearchParams } from 'next/navigation';
import React, { use, useState } from 'react'

export default function AddProperty() {

    const data = useSearchParams();

    const action = data.get("action");
    const type = data.get("type");
    const subType = data.get("subtype");

    if (type === "commercial") {
        return (
            <div>
                <AddCommercial type={type} action={action} subType={subType} />
            </div>
        )
    } else if (type === "residential") {
        return (
            <div>
                <AddResidential type={type} action={action} subType={subType} />
            </div>
        )
    }

}
