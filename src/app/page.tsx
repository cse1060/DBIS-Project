// import PropertyCard from "@/components/property_card"
"use client"
import Sidebar from "@/components/SideBar"
import NewsCard from "@/components/NewsCard";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import "../css/home.css"
import "../css/home.css"
import Link from "next/link"
import Home from "@/components/Home"

export default function App() {
    return (
        <>

            <Sidebar />

            <NewsCard />


            {/* <Link href="/postproperty">Post Property</Link>
            <div className="mainimg">
            </div>
            <div className="buttons">
                <div className="b rentd"><button className="btn rent" ></button>
                    <Link href="/rent">rent</Link>
                </div>
                <div className="b investd"><button className="btn invest" ></button>
                    invest
                </div>
                <div className="b selld"><button className="btn sell" ></button>
                    sell
                </div>
                <div className="b plotd"><button className="btn plots" ></button>
                    plots
                </div>
                <div className="b buyd"><button className="btn buy" ></button>
                    buy
                </div>
                <div className="b leased"><button className="btn lease" ></button>
                    lease
                </div>

            </div> */}
        </>
    )
}