import { useState } from "react";
import "../css/Review.css";
import FormReview from "./FormReview";
import LeaveReview from "./LeaveReview";
function Review({ stars, id }) {
  let [showForm, setShowForm] = useState(false);
  return (
    <div className="review">
      <h2 className="review__title">{`${Math.round(stars)} out of 5 stars`}</h2>
      <button
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        {!showForm ? "Write" : "Cancel"} a review
      </button>
      {showForm && <FormReview id={id} />}
      <LeaveReview id={id} />
    </div>
  );
}

export default Review;
