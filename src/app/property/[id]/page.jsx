"use client";
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import "@/css/buyproperty.scss";
import FadeIn from "react-fade-in";
import Comment from "@/components/Review";
import Review from "@/components/ReviewSection";
import { FaStar } from "react-icons/fa";
import Map2 from "@/helpers/Map2";

export default function Property({ params }, props) {


  const {
    amount = 1234,
    mapimg,
    area = "Area",
    address = "Address",
    ownerDetails = "123",
    reviews = ["review1", "review2"],
    comment = ["Comment1", "Comment2"],
    img,
    propertyType = "residential",
  } = props;
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };
  async function changeCoor(lat, lng) {

    // console.log(lat, lng);

    setCoor({ lat: lat, lng: lng })
    setProperty({ ...property, latitude: lat, longitude: lng })
    console.log(property);
  }


  const [loading, setLoading] = useState(true);

  const [property, setProperty] = useState(undefined)
  const [comments, setComments] = useState(undefined)
  const [writers, setWriters] = useState(undefined)
  const [details, setDetails] = useState(undefined)
  const [user, setUser] = useState(undefined)
  const [images, setImages] = useState(undefined)
  const [id, setId] = useState(-1);
  const [con, setCon] = useState(0);

  const getProperty = async () => {
    const data = await axios.post('/api/property', { id: id })

    console.log(data.data);
    setProperty(data.data.property)
    setDetails(data.data.details)
    setComments(data.data.comments)
    setWriters(data.data.writers)
    setUser(data.data.user)
    setImages(data.data.images)
    // setTimeout(() => {
    //   setCon(1);
    // }, 3000)
    setCon(1);
  }


  async function getPropertyId() {
    setId(await params.id);
    console.log(id);

    setLoading(false);
  }

  useEffect(() => {
    getPropertyId();
  }, [])


  if (loading) {
    return (
      <div>Loading...</div>
    )
  }
  else {
    if (con === 0) {
      getProperty();
      return (
        <>Loading...</>
      )
    }
    return (
      <div className="property-details-container box">
        <div className="nav_div"></div>
        <FadeIn>
          <center>
            <div className="property-details-row">
              <h1 className="Head">
                <div className="rupee-symbol amount">
                  <div className="amount">₹{Math.max(details.sale_amount, details.rent_amount)}</div>
                </div>
              </h1>
              <div className='area'>For {property.action}  </div>
              <div className="area"> #{details.area}sq.ft.</div>
              <div className="address"> @{details.address}</div>
              <div className="propertyType"> @{details.Property_Type}</div>
            </div>
          </center>
          <h2>
            <u>Property</u>
          </h2>
          <div className="property-details-row property_">
            <div>
              <Map2 position={{ lat: property.latitude, lng: property.longitude }} />
              {/* <img src="img" className="propertyimg"></img> */}
            </div>
            <div className="grid-container">
              <div className="grid-item">
                Dimension
                <div className="area"> {details.area}</div>
              </div>
              <div className="grid-item">
                Price
                <div className="amount"> ₹{Math.max(details.sale_amount, details.rent_amount)}</div>
              </div>
              <div className="grid-item">
                Address<div className="address"> @{details.address}</div>
              </div>
              <div className="grid-item">
                Possession
                <div>Immediate</div>
              </div>
              <div className="grid-item">
                Number of Sides<div>4</div>
              </div>
              <div className="grid-item">
                Boundary Wall
                <div>Yes</div>
              </div>
            </div>
          </div>

          <section>
            <h2>
              <u>About Property</u>
            </h2>
            <div className="property-details-row">
              <div>
                <p>{details.description}</p>
              </div>
            </div>
          </section>

          <section className="alt">
            <h2>
              <u>Owner details</u>
            </h2>
            <div className="property-details-row ">
              <div>
                <img src="https://th.bing.com/th/id/R.cfcc2d9f10fe9a669cedd8bd8f67127a?rik=WWaeqGCZl6gpgQ&riu=http%3a%2f%2fimages.clipartpanda.com%2fuser-clipart-fcd4ede3-a7cf-4037-ae52-7aa8d47113d3&ehk=24ym9aJ9Xu%2b0Zv2nW3tnx5tl58A6%2bMVoM1sY6GirrXY%3d&risl=&pid=ImgRaw&r=0"></img>
              </div>
              <div>
                <p>User Name: {user.username}</p>
                <br></br>
                <p>Name: {user.FullName}</p>
                <br></br>
                <p>Email: {user.email}</p>
                <br></br>
                <p>Contact number: {user.phone}</p>
              </div>
            </div>
            <button className="chatting text-black">Chat with The Owner</button>
          </section>

          {/* <section>
            <h2>
              <u>Locality</u>
            </h2>
            <div className="property-details-row">
              <div>
                <img src="img"></img>
              </div>
            </div>
          </section> */}

          <section>
            <h2>
              <u>Reviews</u>
            </h2>
            <ul>
              <div className="review-section">
                <h2>Customer Reviews</h2>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={star <= 3 ? "star-filled" : "star-empty"}
                      onClick={() => handleRatingChange(star)}
                    />
                  ))}
                </div>
                <p>Overall Customer Rating:<br /><strong>{3.3} </strong>/5 <strong>stars</strong></p>
              </div>
              <Review />
              {/* {reviews.map((review, index) => (
                <li key={index}>{review}</li>
              ))} */}
            </ul>
          </section>

          <section>
            <h2>
              <u>Comment</u>
            </h2>
            <div className="flex-comment">
              <Comment
                comment="It's a very nice place. I like here's environment. Here's facilities are very classic and satisfying. There was a problem of vehicle parking. It has not a good park for playing games and exercise etc. Here we can't feed pet animals"
                username="Shivam Saxena"
                img="https://cdn0.iconfinder.com/data/icons/people-57/24/user-circle-1024.png"
              />
              <Comment
                comment="There is a good environment and clean surroundings and there are enough parks, that are well maintained. There are good and neat and clean hospitals. There is a lack of water and electricity, and also a lack of street lights. Public safety is not good. Traffic jams are soon more time."
                username="Aditya Kumar"
                img="https://cdn0.iconfinder.com/data/icons/people-57/24/user-circle-1024.png"
              />
              <Comment
                comment="This area is good condition and many facilities are available road area clean and new School college are near hospital are available in good condition. Auto and Metro facility are not available now only work in progress water quality is poor. Traffic jam problem people behaviour are not good  there is not enough parking"
                username="Tenant"
                img="https://cdn0.iconfinder.com/data/icons/people-57/24/user-circle-1024.png"
              />
              {comments.map((comment, index) => (
                <Comment key={index} comment={comment.body} username={writers[index].username} img="https://cdn0.iconfinder.com/data/icons/people-57/24/user-circle-1024.png" />
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    )
  }
}