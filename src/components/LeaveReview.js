import React from "react";
import ProductRating from "./ProductRating";
import { useSelector } from "react-redux";
import "../css/LeaveReviews.css";
function LeaveReview({ id }) {
  let { leaveReviews } = useSelector((state) => state.review);
  return (
    <div className="leaveReviews">
      {leaveReviews
        ?.filter((el) => el.id === id)
        ?.map((review) => {
          return (
            <div key={review.title} className="leaveReview">
              <div className="leaveReview__left">
                <ProductRating rating={review.rating} />

                <p className="leaveReview__left-time">{review.time}</p>
                <p className="leaveReview__left-name">{review.name}</p>
              </div>
              <div className="leaveReview__right">
                <h3 className="leaveReview__right-title">{review.title}</h3>
                <p className="leaveReview__right-review"> {review.review}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default LeaveReview;
