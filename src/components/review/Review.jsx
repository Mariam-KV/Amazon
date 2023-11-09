import "./Review.css";
import FormReview from "../formReview/FormReview";
import LeaveReview from "../leaveReview/LeaveReview";
import { useEffect } from "react";
import { reviewActions } from "../../redux/slices/reviewSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Review({ stars, id }) {
  const show = useSelector((state) => state.review.show);
  const user = useSelector((state) => state.basket.user);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reviewActions.toggleShow(false));
  }, [dispatch]);
  return (
    <div className="review">
      <h2 className="review__title">{`${Math.round(stars)} out of 5 stars`}</h2>
      <button
        onClick={() => {
          if (user.email) {
            dispatch(reviewActions.toggleShow(!show));
          } else {
            history.push("/login");
          }
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
