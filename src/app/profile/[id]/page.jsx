"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "@/css/profile.css"
import PropertyCard from '@/components/property_card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';


export default function UserProfile({ params }) {

  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState(params.id);
  const [data, setData] = useState(undefined)

  async function getProfile() {
    const res = await axios.post("/api/profile/getInfo", { id: userName });
    setData(res.data)
    console.log(data, "*******");
    console.log(res.data);
  }

  async function getUserName() {
    setUserName(await params.id);
    setLoading(false);
  }

  useEffect(() => {
    getUserName();
  }, [])

  // useEffect(() => {
  //   setLoading(false);
  // }, [userName])
  if (loading) {
    return (
      <Loading />
    )
  } else {
    if (data === undefined) {
      getProfile();
      return (
        <Loading />
      )
    } else {
      return (
        <div>
          <Navbar />
          <div className='nav_div'></div>
          <div className="topspace"></div>
          <h1>User Dashboard</h1>
          <div className="dashboard-container">
            <div className="user-info">
              <p>
                <strong>ID:</strong> {data.user.id}
              </p>
              <p>
                <strong>Email:</strong> {data.user.email}
              </p>
              <p>
                <strong>Username:</strong> {data.user.username}
              </p>
              <p>
                <strong>Phone Number:</strong> {data.user.phone}
              </p>
              <p>
                <strong>Full Name:</strong> {data.user.FullName}
              </p>
            </div>
            <div className="profileimg"><p>Profile Img</p></div>
          </div>
          <div>
            <h1 className='pt-10'>Properties Posted</h1>
            <Swiper
              spaceBetween={0}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {
                data.owned.map((obj, idx) => {
                  console.log(data.owned);
                  // console.log(obj, "***");
                  return (

                    <SwiperSlide>
                      <PropertyCard
                        type={obj.Property[0].Property_Type}
                        name={obj.Property[0].name}
                        action={obj.Property[0].action}
                        address={obj.Property[0].address}
                        city={obj.Property[0].city}
                        date={obj.Property[0].date_added}
                        img={data.imagesOwned[idx].length > 0 ? data.imagesOwned[idx][data.imagesOwned[idx].length - 1].url : "nhrxorzsnizyntshzowp"}
                      />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
          <div>
            <h1 className='pt-10'>Properties Liked</h1>
            <Swiper
              spaceBetween={0}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {
                data.liked.map((obj, idx) => {
                  console.log(data.liked);
                  // console.log(obj, "***");
                  return (

                    <SwiperSlide>
                      <PropertyCard
                        type={obj.Property[0].Property_Type}
                        name={obj.Property[0].name}
                        action={obj.Property[0].action}
                        address={obj.Property[0].address}
                        city={obj.Property[0].city}
                        date={obj.Property[0].date_added}
                        img={data.imageLiked[idx].url}
                      />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
          <div>
            <h1 className='pt-10'>Properties Visited</h1>
            <Swiper
              spaceBetween={0}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {
                data.visited.map((obj, idx) => {
                  console.log(data.owned);
                  // console.log(obj, "***");
                  return (

                    <SwiperSlide>
                      <PropertyCard
                        type={obj.Property[0].Property_Type}
                        name={obj.Property[0].name}
                        action={obj.Property[0].action}
                        address={obj.Property[0].address}
                        city={obj.Property[0].city}
                        date={obj.Property[0].date_added}
                        img={data.imagesVisited[idx].url}
                      />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </div>
      )
    }
  }
}
