import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function SellForm() {

    const router = useRouter();
    async function addProperty() {
        const data = await axios.post("/api/addProperty", sale);
        if (data.data.status === "success") {
            router.push(`/postproperty/add_property?id=${data.data.propertyId}`);
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
                    <input type="radio" id="type2" name="type2" value="apartment" onClick={() => { setSale({ ...sale, subType: "apartment" }); }}/>
                    <label htmlFor="apartment">Apartment</label><br />
                    <input type="radio" id="type2" name="type2" value="bunglow" onClick={() => { setSale({ ...sale, subType: "bunglow" }); }}/>
                    <label htmlFor="bunglow">Bunglow</label><br />
                    <input type="radio" id="type2" name="type2" value="villa" onClick={() => { setSale({ ...sale, subType: "villa" }); }}/>
                    <label htmlFor="villa">Villa</label><br />
                    <input type="radio" id="type2" name="type2" value="duplex" onClick={() => { setSale({ ...sale, subType: "duplex" }); }}/>
                    <label htmlFor="duplex">Duplex</label><br />
                </div>
            )}
            {sale.type === "commercial" && (
                <div>
                    <div>
                    <input type="radio" id="type2" name="type2" value="garage" onClick={() => { setSale({ ...sale, subType: "garage" }); }}/>
                    <label htmlFor="garage">Garage</label><br />
                    <input type="radio" id="type2" name="type2" value="shop" onClick={() => { setSale({ ...sale, subType: "shop" }); }}/>
                    <label htmlFor="shop">Shop</label><br />
                    <input type="radio" id="type2" name="type2" value="mall" onClick={() => { setSale({ ...sale, subType: "mall" }); }}/>
                    <label htmlFor="mall">Mall</label><br />
                </div>
                </div>
            )}
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="" value={sale.city} onChange={(e) => { setSale({ ...sale, city: e.target.value }) }} />
            <button onClick={addProperty}>Add Property For Sale</button>
        </div>
    )
}
