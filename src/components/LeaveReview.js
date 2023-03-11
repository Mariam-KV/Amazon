import React from "react";
import { useEffect, useState } from "react";
import ProductRating from "./ProductRating";

import "../css/LeaveReviews.css";
function LeaveReview({ id }) {
  let [leaveReviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://fir-214b5-default-rtdb.firebaseio.com/${id}.json`)
      .then((res) => res.json())
      .then((data) => setReviews(Object.values(data)));
  }, []);

  return (
    <div className="leaveReviews">
      {leaveReviews.map((review) => {
        return (
          <div key={review.title} className="leaveReview">
            <div className="leaveReview__left">
              <ProductRating rating={review.rating} />

              <p>{review.time}</p>
              <p>{review.name}</p>
            </div>
            <div className="leaveReview__right">
              <h3>{review.title}</h3>
              <p> {review.review}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LeaveReview;
