import React from "react";
import BaseLayout from "../../components/baselayout";
import PropertyCard2 from "@/components/PropertyCard2";
import Navbar from "@/components/Navbar";
import "../../css/getstarted.css";

export default function RentPage() {
  return (
    <>
      <Navbar />

      <div className="getstartedbody">
        <h1>Apartments, Villas and more..</h1>
        <div className="propcard-div">
          <div className="propcard">
            <div className="propcard-name">
              <h3>Independent/Builder Floor</h3>
            </div>
            <div className="propcard-img">
              <img src="/images/independent.webp" alt="" />
            </div>
          </div>
          <div className="propcard">
            <div className="propcard-name">
              <h3>Residential Apartment</h3>
            </div>
            <div className="propcard-img">
              <img src="/images/residential.webp" alt="" />
            </div>
          </div>
          <div className="propcard">
            <div className="propcard-name">
              <h3>Independent House/Villa</h3>
            </div>
            <div className="propcard-img">
              <img src="/images/villa.webp" alt="" />
            </div>
          </div>
          <div className="propcard">
            <div className="propcard-name">
              <h3>Residential Land</h3>
            </div>
            <div className="propcard-img">
              <img src="/images/land.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="propcard-div">
          <div className="propcard">
            <div className="propcard-name">
              <h3>Farm House</h3>
            </div>
            <div className="propcard-img">
              <img src="/images/farmhouse.webp" alt="" />
            </div>
          </div>
          <div className="propcard">
            <div className="propcard-name">
              <h3>1RK/Studio Apartment</h3>
            </div>
            <div className="propcard-img">
              <img src="/images/studio.webp" alt="" />
            </div>
          </div>
          <div className="propcard">
            <div className="propcard-name">
              <h3>Serviced Apartment</h3>
            </div>
            <div className="propcard-img">
              <img src="/images/serviced.webp" alt="" />
            </div>
          </div>
        </div>

        <h1 style={{ marginTop: "50px" }}>
          Explore Real Estate in Popular Indian Cities
        </h1>

        <div className="citiesgrid">
          <div className="cityblock">
            <div className="cityimage">
              <img src="/images/delhi.webp" alt="" />
            </div>
            <div className="cityname">
              <h3>Delhi</h3>
            </div>
          </div>
          <div className="cityblock">
            <div className="cityimage">
              <img src="/images/bangalore.webp" alt="" />
            </div>
            <div className="cityname">
              <h3>Bangalore</h3>
            </div>
          </div>
          <div className="cityblock">
            <div className="cityimage">
              <img src="/images/pune.webp" alt="" />
            </div>
            <div className="cityname">
              <h3>Pune</h3>
            </div>
          </div>
          <div className="cityblock">
            <div className="cityimage">
              <img src="/images/mumbai.webp" alt="" />
            </div>
            <div className="cityname">
              <h3>Mumbai</h3>
            </div>
          </div>
          <div className="cityblock">
            <div className="cityimage">
              <img src="/images/Hyderabad.webp" alt="" />
            </div>
            <div className="cityname">
              <h3>Hyderabad</h3>
            </div>
          </div>
          <div className="cityblock">
            <div className="cityimage">
              <img src="/images/Kolkata.webp" alt="" />
            </div>
            <div className="cityname">
              <h3>Kolkata</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
