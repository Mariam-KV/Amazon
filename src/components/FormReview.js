import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Prompt } from "react-router-dom";
import "../css/FormReview.css";
import { useSelector } from "react-redux";
import moment from "moment";
const FormReview = ({ id }) => {
  let [entered, setEntered] = useState(false);
  let [isValid, setValid] = useState(false);
  let [valueRating, setRating] = useState(5);
  let [valueName, setName] = useState("");
  let [valueReview, setReview] = useState("");
  let [valueTitle, setTitle] = useState("");
  let user = useSelector((state) => state.basket.user);
  function submitFormHandler(event) {
    event.preventDefault();
    //user?.email.split("@")[0],
    if (valueName && valueTitle && valueReview && valueRating) {
      console.log(202);
      fetch(`https://fir-214b5-default-rtdb.firebaseio.com/${id}.json`, {
        method: "POST",
        body: JSON.stringify({
          time: moment().format("ll"),
          name: valueName,
          title: valueTitle,
          review: valueReview,
          rating: valueRating,
        }),
      }).then(() => {
        setName("");
        setRating(5);
        setReview("");
        setTitle("");
      });
    } else {
      alert(3);
    }

    // props.onAddQuote({ author: valueAuthor, text: valueText });
  }

  let handleClick = () => {
    setEntered(false);
  };
  let handleFocus = () => {
    setEntered(true);
  };
  let handleName = (event) => {
    setName(event.target.value);
  };
  let handleReview = (event) => {
    setReview(event.target.value);
  };
  let handleTitle = (event) => {
    setTitle(event.target.value);
  };
  //   useEffect(() => {
  //     if (valueAuthor.trim().length > 0 && valueText.trim().length > 0) {
  //       setValid(true);
  //     }
  //   }, [valueAuthor, valueText]);
  return (
    <div>
      <Prompt when={entered} message="Are you sure?" />
      <form
        className="formReview"
        onSubmit={submitFormHandler}
        onFocus={handleFocus}
      >
        {/* {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )} */}

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
        //   className={isValid ? "btn" : "btn invalid"}
        //   onClick={handleClick}
        //   disabled={!isValid}
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default FormReview;
