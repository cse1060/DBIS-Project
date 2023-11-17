"use client";
import "../../../../css/buyproperty.scss";
import FadeIn from "react-fade-in";
import React,{useState} from "react";
import Comment from "../../../../components/Review";
import Review from "../../../../components/ReviewSection";
import { FaStar } from "react-icons/fa";
import { Carousel } from 'react-bootstrap';
const PropertyDetails = (props: any) => {
  const {
    amount = 1234,
    mapimg,
    area = "Area",
    address = "Address",
    ownerDetails = "123",
    reviews = ["review1", "review2"],
    comments = ["Comment1", "Comment2"],
    img,
    propertyType = "residential",
  } = props;
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };
  return (
    <div className="property-details-container box">
      <div className="nav_div"></div>
      <FadeIn>
        <center>
          <div className="property-details-row">
            <h1 className="Head">
              <div className="rupee-symbol amount">
                <div className="amount">₹{amount}</div>
              </div>
            </h1>
            <div className="area"> #{area}</div>
            <div className="address"> @{address}</div>
            <div className="propertyType"> @{propertyType}</div>
          </div>
        </center>
        <h2>
          <u>Property</u>
        </h2>
        <div className="property-details-row property_">
          <div>
            <img src="img" className="propertyimg"></img>
          </div>
          <div className="grid-container">
            <div className="grid-item">
              Dimension
              <div className="area"> {area}</div>
            </div>
            <div className="grid-item">
              Price
              <div className="amount"> {amount}</div>
            </div>
            <div className="grid-item">
              Address<div className="address"> @{address}</div>
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
              <p>lorem ipsum/ all details</p>
            </div>
          </div>
        </section>

        <section className="alt">
          <h2>
            <u>Owner detail</u>
          </h2>
          <div className="property-details-row ">
            <div>
              <img src="user"></img>
            </div>
            <p>Name:</p>
            <p>{ownerDetails}</p>
          </div>
          <button className="chatting">Chat with The Owner</button>
        </section>

        <section>
          <h2>
            <u>Locality</u>
          </h2>
          <div className="property-details-row">
            <div>
              <img src="img"></img>
            </div>
          </div>
        </section>

        <section>
          <h2>
            <u>Reviews</u>
          </h2>
          <ul>
            00
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
              <p>
                Overall Customer Rating:
                <br />
                <strong>{3.3} stars</strong>
              </p>
            </div>
            <Review />
            {reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>
            <u>Comments</u>
          </h2>
          <div className="flex-comment">
            <Comment
              comment="It's a very nice place. I like here's environment. Here's facilities are very classic and satisfying. There was a problem of vehicle parking. It has not a good park for playing games and exercise etc. Here we can't feed pet animals"
              username="Shivam Sharma"
            />
            <Comment
              comment="There is a good environment and clean surroundings and there are enough parks, that are well maintained. There are good and neat and clean hospitals. There is a lack of water and electricity, and also a lack of street lights. Public safety is not good. Traffic jams are soon more time."
              username="Aditya Kumar"
            />
            <Comment
              comment="This area is good condition and many facilities are available road area clean and new School college are near hospital are available in good condition. Auto and Metro facility are not available now only work in progress water quality is poor. Traffic jam problem people behaviour are not good  there is not enough parking"
              username="Tenant"
            />
            {comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
};

export default PropertyDetails;
