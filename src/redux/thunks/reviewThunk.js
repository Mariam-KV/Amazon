import { reviewActions } from "../slices/reviewSlice";

export const postingReviews = (data) => async (dispatch) => {
  fetch("https://fir-214b5-default-rtdb.firebaseio.com/reviews.json", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const gettingReviews = () => async (dispatch) => {
  fetch("https://fir-214b5-default-rtdb.firebaseio.com/reviews.json")
    .then((res) => res.json())
    .then((data) => dispatch(reviewActions.allReviews(data)))
    .catch((err) => console.log(err));
};
