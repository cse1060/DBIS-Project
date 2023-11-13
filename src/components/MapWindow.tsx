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

export default function Map(props: any) {

    // const [position, setPosition] = useState({ lat: 28.658976038581702, lng: 77.21567601605372 })

    const [loading, setLoading] = useState(true)
    async function getLocation() {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            // setPosition({ lat: position.coords.latitude, lng: position.coords.longitude })
            props.changePos(position.coords.latitude, position.coords.longitude);
            props.changeCoor(position.coords.latitude + 0.01, position.coords.longitude + 0.01);
            setLoading(false);
        });
    }

    function LocationMarker() {
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                // setPosition(e.latlng)
                props.changePos(e.latlng.lat, e.latlng.lng);
                map.flyTo(e.latlng, map.getZoom())
            },
        })

        return props.position === null ? null : (
            <Marker position={props.position} icon={myIcon}>
                <Popup>You are here</Popup>
            </Marker>
        )
    }

    useEffect(() => {
        getLocation();
    }, [])

    // const [coor, setCoor] = useState({ lat: 28.658976038581702, lng: 77.0 })
    function DraggableMarker() {
        const [draggable, setDraggable] = useState(false)
        const markerRef = useRef<any>(null)
        const eventHandlers = useMemo(
            () => ({
                dragend() {
                    const marker = markerRef.current
                    if (marker != null) {
                        props.changeCoor(marker.getLatLng().lat, marker.getLatLng().lng)
                        console.log(marker.getLatLng().lat);
                        console.log(props.coor);

                    }
                },
            }),
            [],
        )
        const toggleDraggable = useCallback(() => {
            setDraggable((d) => !d)
        }, [])

        return (
            <Marker
                draggable={draggable}
                eventHandlers={eventHandlers}
                position={props.coor}

                icon={BuildingIcon}
                ref={markerRef}>
                <Popup minWidth={90}>
                    <span onClick={toggleDraggable}>
                        {draggable
                            ? 'Marker is draggable'
                            : 'Click here to make marker draggable'}
                    </span>
                </Popup>
            </Marker>
        )
    }


    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    } else {
        return (
            <>
                <MapContainer
                    center={props.position}
                    zoom={13}
                    className='map'
                    scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={props.position} icon={myIcon}>
                        <Popup>You are here</Popup>
                    </Marker>
                    <LocationMarker />
                    <DraggableMarker />
                </MapContainer>
            </>
        )
    }
}


// const { coords, isGeolocationAvailable, isGeolocationEnabled } =
//     useGeolocated({
//         positionOptions: {
//             enableHighAccuracy: false,
//         },
//         userDecisionTimeout: 5000,
//     });

// // const [position, setPosition] = useState({ lat: 28.658976038581702, lng: 77.21567601605372 })

// // const [coor, setCoor] = useState({ lat: 28.658976038581702, lng: 77.21567601605372 })
// // function LocationMarker() {
// //     const map = useMapEvents({
// //         click() {
// //             map.locate()
// //         },
// //         locationfound(e) {
// //             setCoor(e.latlng)
// //             map.flyTo(e.latlng, map.getZoom())
// //             // console.log(coor);
// //         },
// //     })

// //     return (
// //         <Marker position={coor} icon={myIcon}>
// //             <Popup>You are here</Popup>
// //         </Marker>
// //     )
// // }

// function LocationMarker() {
//     const [position, setPosition] = useState({ lat: 28.658976038581702, lng: 77.21567601605372 })
//     const map = useMapEvents({
//         click() {
//             map.locate()
//         },
//         locationfound(e) {
//             setPosition(e.latlng)
//             map.flyTo(e.latlng, map.getZoom())
//         },
//     })

//     return position === null ? null : (
//         <Marker position={position}>
//             <Popup>You are here</Popup>
//         </Marker>
//     )
// }

// const Map = (props: any) => {

//     return (
//         <MapContainer center={[props.lat, props.long]} zoom={13} className='map'>
//             <TileLayer
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <Marker position={[props.lat, props.long]} icon={myIcon}>
//                 <Popup>
//                     A pretty CSS3 popup. <br /> Easily customizable.
//                 </Popup>
//             </Marker>

//             <LocationMarker />
//         </MapContainer>
//         // <MapContainer
//         //     center={{ lat: 51.505, lng: -0.09 }}
//         //     zoom={13}
//         //     scrollWheelZoom={false}>
//         //     <TileLayer
//         //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         //     />
//         //     <LocationMarker />
//         // </MapContainer>
//     )
// }

// return (
//     <Map lat={1} long={1} />
// )

// // if (!isGeolocationAvailable || !isGeolocationEnabled) {
// //     return (
// //         <>
// //             <div>Your browser does not support Geolocation</div>
// //             <div>Geolocation is not enabled</div>
// //             <Map lat={28.658976038581702} long={77.21567601605372} />
// //         </>
// //     )
// // } else if (coords) {
// //     return (
// //         <>
// //             <Map lat={coords.latitude} long={coords.longitude} />
// //             <tr>
// //                 <td>latitude</td>
// //                 <td>{coords.latitude}</td>
// //             </tr>
// //             <tr>
// //                 <td>longitude</td>
// //                 <td>{coords.longitude}</td>
// //             </tr>
// //         </>
// //     )

// // }
// // else {
// //     return (
// //         <div>Getting the location data&hellip; </div>
// //     )
// // }


