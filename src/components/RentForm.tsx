import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function RentForm() {


    const router = useRouter();
    async function addProperty() {
        const data = await axios.post("/addProperty", rent);
        if (data.data.status === "success") {
            router.push(`/postproperty/add_property?action=${rent.action}&type=${rent.type}&subtype=${rent.subType}`);
        }
    }
    const [rent, setRent] = useState({ action: "rent", type: "", subType: "", city: "" })

    return (
        <div>
            <input type="radio" id="type" name="type" value="residential" onClick={() => { setRent({ ...rent, type: "residential" }) }} />
            <label htmlFor="residential">Residential</label><br />
            <input type="radio" id="type" name="type" value="commercial" onClick={() => { setRent({ ...rent, type: "commercial" }) }} />
            <label htmlFor="commercial">Commercial</label><br />
            <hr />

            {rent.type === "residential" && (
                <div>
                    <h1 onClick={() => { setRent({ ...rent, subType: "apartment" }) }}>Apartment</h1>
                    <h1 onClick={() => { setRent({ ...rent, subType: "bungalow" }) }}>Bungalow</h1>
                    <h1 onClick={() => { setRent({ ...rent, subType: "villa" }) }}>Villa</h1>
                    <h1 onClick={() => { setRent({ ...rent, subType: "duplex" }) }}>Duplex</h1>
                </div>
            )}
            {rent.type === "commercial" && (
                <div>
                    <h1 onClick={() => { setRent({ ...rent, subType: "garage" }) }}>Garage</h1>
                    <h1 onClick={() => { setRent({ ...rent, subType: "shop" }) }}>Shop</h1>
                    <h1 onClick={() => { setRent({ ...rent, subType: "mall" }) }}>Mall</h1>
                </div>
            )}
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="" value={rent.city} onChange={(e) => { setRent({ ...rent, city: e.target.value }) }} />
            <button onClick={addProperty}>Add Property For Rent</button>
        </div>
    )
}
