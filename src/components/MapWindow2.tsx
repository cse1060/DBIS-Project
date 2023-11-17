import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react'
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet'
import { Icon } from 'leaflet'
const myIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/10054/10054653.png",
    iconSize: [32, 32]
})
const BuildingIcon = new Icon({
    iconUrl: "https://cdn4.iconfinder.com/data/icons/maps-and-location-vol-2/24/_building-1024.png",
    iconSize: [32, 32]
})

export default function Map2(props: any) {

    // const [position, setPosition] = useState({ lat: 28.658976038581702, lng: 77.21567601605372 })

    const [loading, setLoading] = useState(false)
    // async function getLocation() {
    //     navigator.geolocation.getCurrentPosition(function (position) {
    //         console.log("Latitude is :", position.coords.latitude);
    //         console.log("Longitude is :", position.coords.longitude);
    //         // setPosition({ lat: position.coords.latitude, lng: position.coords.longitude })
    //         props.changePos(position.coords.latitude, position.coords.longitude);
    //         props.changeCoor(position.coords.latitude + 0.01, position.coords.longitude + 0.01);
    //         setLoading(false);
    //     });
    // }

    // useEffect(() => {
    //     getLocation();
    // }, [])

    // const [coor, setCoor] = useState({ lat: 28.658976038581702, lng: 77.0 })

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    } else {
        return (
            <>
                <MapContainer
                    center={props.position}
                    zoom={10}
                    className='map2'
                    scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={props.position} icon={BuildingIcon}>
                        <Popup>You are here</Popup>
                    </Marker>
                </MapContainer>
            </>
        )
    }
}