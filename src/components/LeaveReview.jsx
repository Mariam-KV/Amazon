import ProductRating from "./ProductRating";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../css/LeaveReviews.css";
function LeaveReview({ id }) {
  let [leaveReviews, setReviews] = useState([]);
  let { leaveReview } = useSelector((state) => state.review);
  useEffect(() => {
    fetch("https://fir-214b5-default-rtdb.firebaseio.com/reviews.json")
      .then((res) => res.json())
      .then((data) => data && setReviews(Object.values(data)))
      .catch((err) => console.log(err));
  }, [leaveReview]);
  return (
    <div className="leaveReviews">
      {leaveReviews.length !== 0 &&
        leaveReviews
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
