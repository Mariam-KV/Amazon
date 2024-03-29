import ProductRating from "../ProductRating";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gettingReviews } from "../../redux/thunks/reviewThunk";
import "./LeaveReviews.css";
function LeaveReview({ id }) {
  const dispatch = useDispatch();
  const { leaveReview, submit } = useSelector((state) => state.review);
  useEffect(() => {
    dispatch(gettingReviews());
  }, [dispatch, submit]);

  return (
    <div className="leaveReviews">
      {leaveReview.length !== 0 &&
        Object.values(leaveReview)
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
                  <p className="leaveReview__right-review"> {review.comment}</p>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default LeaveReview;
