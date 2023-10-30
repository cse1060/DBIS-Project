import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddResidential(props: any) {

    const router = useRouter();

    const [property, setProperty] = useState({
        property_id: parseInt(props.property_id),
        rooms: 0,
        balconies: 0,
        area: 0,
        description: "",
        sale_amount: -1,
        rent_amount: -1,
        for_sale: props.action === 'sale' ? true : false,
        for_rent: props.action === 'sale' ? false : true
    })

    async function updateProperty() {
        const data = await axios.post("/api/addProperty/residential", property);

        console.log(data)

        if (data.data.status === "success") {
            router.push('/');
        }
    }

    return (
        <div>
            {props.action}
            <label htmlFor="rooms" >Rooms</label>
            <input type="number"
                onChange={(e) => setProperty({
                    ...property,
                    rooms: parseFloat(e.target.value)
                })} />

            <label htmlFor="balconies">Balconies</label>
            <input type="number"
                onChange={(e) => setProperty({
                    ...property,
                    balconies: parseFloat(e.target.value)
                })} />

            <label htmlFor="area">Area</label>
            <input type="number"
                onChange={(e) => setProperty({
                    ...property,
                    area: parseFloat(e.target.value)
                })} />

            <label htmlFor="description">Description</label>
            <input type="text"
                onChange={(e) => setProperty({
                    ...property,
                    description: e.target.value
                })} />

            {property.for_sale && (
                <>
                    <label htmlFor="sale_amount">sale_amount</label>
                    <input type="number"
                        onChange={(e) => setProperty({
                            ...property,
                            sale_amount: parseFloat(e.target.value)
                        })} />
                </>
            )}

            {property.for_rent && (
                <>
                    <label htmlFor="rate_amount">rate_amount</label>
                    <input type="number"
                        onChange={(e) => setProperty({
                            ...property,
                            rent_amount: parseFloat(e.target.value)
                        })} />
                </>
            )}

            <hr />

            <button onClick={updateProperty}>Submit</button>
        </div>
    )
}

// http://localhost:3000/postproperty/add_property?id=2