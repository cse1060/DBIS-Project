import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function RentForm() {


    const router = useRouter();
    async function addProperty() {
        const data = await axios.post("api/addProperty", rent);
        if (data.data.status === "success") {
            router.push(`/postproperty/add_property?id=${data.data.propertyId}`);
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
                    <input type="radio" id="type2" name="type2" value="apartment" onClick={() => { setRent({ ...rent, subType: "apartment" }); }}/>
                    <label htmlFor="apartment">Apartment</label><br />
                    <input type="radio" id="type2" name="type2" value="bunglow" onClick={() => { setRent({ ...rent, subType: "bunglow" }) }}/>
                    <label htmlFor="bunglow">Bunglow</label><br />
                    <input type="radio" id="type2" name="type2" value="villa" onClick={() => { setRent({ ...rent, subType: "villa" }) }}/>
                    <label htmlFor="villa">Villa</label><br />
                    <input type="radio" id="type2" name="type2" value="duplex" onClick={() => { setRent({ ...rent, subType: "duplex" }) }}/>
                    <label htmlFor="duplex">Duplex</label><br />
                </div>
            )}
            {rent.type === "commercial" && (
                <div>
                    <input type="radio" id="type2" name="type2" value="garage" onClick={() => { setRent({ ...rent, subType: "garage" }) }}/>
                    <label htmlFor="garage">Garage</label><br />
                    <input type="radio" id="type2" name="type2" value="shop" onClick={() => { setRent({ ...rent, subType: "shop" }) }}/>
                    <label htmlFor="shop">Shop</label><br />
                    <input type="radio" id="type2" name="type2" value="mall" onClick={() => { setRent({ ...rent, subType: "mall" }) }}/>
                    <label htmlFor="mall">Mall</label><br />
                </div>
            )}
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="" value={rent.city} onChange={(e) => { setRent({ ...rent, city: e.target.value }) }} />
            <button onClick={addProperty}>Add Property For Rent</button>
        </div>
    )
}
