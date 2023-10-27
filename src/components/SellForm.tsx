import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function SellForm() {

    const router = useRouter();
    async function addProperty() {
        const data = await axios.post("/api/addProperty", sale);
        if (data.data.status === "success") {
            router.push(`/postproperty/add_property?action=${sale.action}&type=${sale.type}&subtype=${sale.subType}`);
        }
    }
    const [sale, setSale] = useState({ action: "sale", type: "", subType: "", city: "" })
    return (
        <div>
            <input type="radio" id="type" name="type" value="residential" onClick={() => { setSale({ ...sale, type: "residential" }) }} />
            <label htmlFor="residential">Residential</label><br />
            <input type="radio" id="type" name="type" value="commercial" onClick={() => { setSale({ ...sale, type: "commercial" }) }} />
            <label htmlFor="commercial">Commercial</label><br />
            <hr />
            {sale.type === "residential" && (
                <div>
                    <h1 onClick={() => { setSale({ ...sale, subType: "apartment" }) }}>Apartment</h1>
                    <h1 onClick={() => { setSale({ ...sale, subType: "bungalow" }) }}>Bungalow</h1>
                    <h1 onClick={() => { setSale({ ...sale, subType: "villa" }) }}>Villa</h1>
                    <h1 onClick={() => { setSale({ ...sale, subType: "duplex" }) }}>Duplex</h1>
                </div>
            )}
            {sale.type === "commercial" && (
                <div>
                    <h1 onClick={() => { setSale({ ...sale, subType: "garage" }) }}>Garage</h1>
                    <h1 onClick={() => { setSale({ ...sale, subType: "shop" }) }}>Shop</h1>
                    <h1 onClick={() => { setSale({ ...sale, subType: "mall" }) }}>Mall</h1>
                </div>
            )}
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="" value={sale.city} onChange={(e) => { setSale({ ...sale, city: e.target.value }) }} />
            <button onClick={addProperty}>Add Property For Sale</button>
        </div>
    )
}
