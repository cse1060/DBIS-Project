import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddCommercial(props: any) {

    const router = useRouter();

    const [property, setProperty] = useState({
        property_id: parseInt(props.property_id),
        garages: 0,
        floors: 0,
        area: 0,
        // description: "",
        sale_amount: -1,
        rent_amount: -1,
        for_sale: props.action === 'sale' ? true : false,
        for_rent: props.action === 'sale' ? false : true
    })

    async function updateProperty() {
        const data = await axios.post("/api/addProperty/commercial", property);

        console.log(data)

        if (data.data.status === "success") {
            router.push('/');
        }
    }

    return (
        <div>
            {props.action}
            <label htmlFor="rooms" >Garages</label>
            <input type="number"
                onChange={(e) => setProperty({
                    ...property,
                    garages: parseFloat(e.target.value)
                })} />

            <label htmlFor="balconies">Floors</label>
            <input type="number"
                onChange={(e) => setProperty({
                    ...property,
                    floors: parseFloat(e.target.value)
                })} />

            <label htmlFor="area">Area</label>
            <input type="number"
                onChange={(e) => setProperty({
                    ...property,
                    area: parseFloat(e.target.value)
                })} />

            {/* <label htmlFor="description">Description</label>
            <input type="text"
                onChange={(e) => setProperty({
                    ...property,
                    description: e.target.value
                })} /> */}

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