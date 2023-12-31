import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Map from "@/helpers/Map";
import Upload_Widget from '@/helpers/Upload_Widget';
import "../css/addcommercial.css"
export default function AddCommercial(props: any) {

    const router = useRouter();
    const [position, setPosition] = useState({ lat: 28.658976038581702, lng: 77.21567601605372 })
    const [coor, setCoor] = useState({ lat: 28.658976038581702, lng: 77.21567601605372 })

    const [property, setProperty] = useState({
        property_id: parseInt(props.property_id),
        name: "",
        garages: 0,
        floors: 0,
        area: 0,
        address: "",
        description: "",
        sale_amount: -1,
        rent_amount: -1,
        for_sale: props.action === 'sale' ? true : false,
        for_rent: props.action === 'sale' ? false : true,
        latitude: position.lat,
        longitude: position.lng
    })


    async function changePos(lat: any, lng: any) {

        // console.log(lat, lng);

        setPosition({ lat: lat, lng: lng })
    }

    async function changeCoor(lat: any, lng: any) {

        // console.log(lat, lng);

        setCoor({ lat: lat, lng: lng })
        setProperty({ ...property, latitude: lat, longitude: lng })
        console.log(property);


    }

    async function updateProperty(event: any) {
        event.preventDefault();
        const data = await axios.post("/api/addProperty/commercial", { property: property, images: images });

        console.log(data)

        if (data.data.status === "success") {
            router.push('/');
        }
    }

    const [images, setImages] = useState(["abc"]);

    async function addImages(res: any, widget: any) {
        setImages([...images, res.info.public_id]);
        console.log(images);
    }

    return (
        <div>
            {props.action}
            <h1 className="addtitle" >For Rent</h1>
            <div className="aform">
                <div className="aforme">
                    <label htmlFor="rooms" >Garages</label>
                    <input type="number"
                        onChange={(e) => setProperty({
                            ...property,
                            garages: parseFloat(e.target.value)
                        })} />
                </div>
                <div className="aforme">
                    <label htmlFor="balconies">Floors</label>
                    <input type="number"
                        onChange={(e) => setProperty({
                            ...property,
                            floors: parseFloat(e.target.value)
                        })} />
                    {/* load */}
                </div>
                <div className="aforme">
                    <label htmlFor="area">Area</label>
                    <input type="number"
                        onChange={(e) => setProperty({
                            ...property,
                            area: parseFloat(e.target.value)
                        })} />
                </div>
                <div className="aforme">
                    <label htmlFor="name">name</label>
                    <input type="text"
                        onChange={(e) => setProperty({
                            ...property,
                            name: e.target.value
                        })} />
                </div>
                <div className="aforme">
                    <label htmlFor="address">address</label>
                    <input type="text" style={{ height: "100px" }}
                        onChange={(e) => setProperty({
                            ...property,
                            address: e.target.value
                        })} />
                </div>
                <div className="aforme">
                    <label htmlFor="description">Description</label>
                    <input type="text" style={{ height: "300px" }}
                        onChange={(e) => setProperty({
                            ...property,
                            description: e.target.value
                        })} />
                </div>
            </div>
            <div className="amap" style={{ display: "inline-block" }}>
                <h1 className='loc'>Your current location</h1>
                <h2 className='coordinates'>Lat : {position.lat} </h2>
                <h2 className='coordinates'>Lng : {position.lng} </h2>
                <center className='coordinates' style={{ color: "#091e42", fontWeight: "600" }}>Choose Location</center>
                <Map position={position} changePos={changePos} coor={coor} changeCoor={changeCoor} />
                <center><center className='aupload'><Upload_Widget addImg={addImages} /></center></center>
            </div>
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
                    <div className="arate">
                        <div className="arate2">
                            <label htmlFor="rate_amount">rate_amount</label>
                            <input type="number"
                                onChange={(e) => setProperty({
                                    ...property,
                                    rent_amount: parseFloat(e.target.value)
                                })} />
                        </div>
                    </div>
                </>
            )}

            <hr />

            <center><button className='addsubmit' onClick={updateProperty}>Submit</button></center>
        </div>
    )
}

// http://localhost:3000/postproperty/add_property?id=2