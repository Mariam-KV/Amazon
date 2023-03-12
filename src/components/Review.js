import "../css/Review.css";
import FormReview from "./FormReview";
import LeaveReview from "./LeaveReview";
import { useEffect } from "react";
import { reviewActions } from "../store/reviewSlice";
import { useSelector, useDispatch } from "react-redux";
function Review({ stars, id }) {
  let show = useSelector((state) => state.review.show);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(reviewActions.toggleShow(false));
  }, []);
  return (
    <div className="review">
      <h2 className="review__title">{`${Math.round(stars)} out of 5 stars`}</h2>
      <button
        onClick={() => {
          dispatch(reviewActions.toggleShow(!show));
        }}
      >
        {!show ? "Write" : "Cancel"} a review
      </button>
      {show && <FormReview id={id} />}
      <LeaveReview id={id} />
    </div>
  );
}

export default Review;
