import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import "../css/FormReview.css";
import { useDispatch } from "react-redux";
import { reviewActions } from "../store/reviewSlice";
import moment from "moment";

const FormReview = ({ id }) => {
  let [isValid, setValid] = useState(false);
  let [valueRating, setRating] = useState(5);
  let [valueName, setName] = useState("");
  let [reset, setReset] = useState(false);
  let [valueReview, setReview] = useState("");
  let [valueTitle, setTitle] = useState("");
  let dispatch = useDispatch();

  function submitFormHandler(event) {
    event.preventDefault();
    if (isValid) {
      dispatch(
        reviewActions.allReviews({
          id: id,
          time: moment().format("ll"),
          name: valueName,
          title: valueTitle,
          review: valueReview,
          rating: valueRating,
        })
      );

      setName("");
      setRating(5);
      setReview("");
      setTitle("");
      setReset(!reset);
      dispatch(reviewActions.toggleShow(false));
    }
  }
  useEffect(() => {
    if (
      valueName.trim().length > 0 &&
      valueTitle.trim().length > 0 &&
      valueReview.trim().length > 0 &&
      valueRating > 0
    ) {
      setValid(true);
    }
  }, [valueName, valueTitle, valueReview, valueRating]);

  let handleName = (event) => {
    setName(event.target.value);
  };
  let handleReview = (event) => {
    setReview(event.target.value);
  };
  let handleTitle = (event) => {
    setTitle(event.target.value);
  };
  
  return (
    <div>
      <form className="formReview" onSubmit={submitFormHandler}>
        <div className="formReview__input">
          <label htmlFor="name">Name (displayed publicly)</label>
          <input
            type="text"
            id="name"
            value={valueName}
            onChange={handleName}
            placeholder="Enter your name (public) "
          />
        </div>
        <div className="formReview__input">
          <label htmlFor="RatingReview">Rating</label>
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Rating
              name="simple-controlled"
              value={valueRating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </Box>
        </div>
        <div className="formReview__input">
          <label htmlFor="title">Review Title</label>
          <input
            id="title"
            value={valueTitle}
            onChange={handleTitle}
            placeholder="Give your review a title "
          ></input>
        </div>
        <div className="formReview__input">
          <label htmlFor="review">Review</label>
          <textarea
            id="review"
            rows="5"
            value={valueReview}
            onChange={handleReview}
            placeholder="Write your comments here "
          ></textarea>
        </div>

        <button
          className={isValid ? "" : "invalid"}
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default FormReview;
