// ReviewSection.js
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../css/reviewSection.css";

const ReviewSection = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div className="review-section">
      <h2>Customer Reviews</h2>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={star <= rating ? "star-filled" : "star-empty"}
            onClick={() => handleRatingChange(star)}
          />
        ))}
      </div>
      <p>Your Rating: {rating} stars</p>
      <textarea placeholder="Write your review..." rows="4" />
      <button>Submit Review</button>
    </div>
  );
};

export default ReviewSection;
