import { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import "./FormReview.css";
import moment from "moment";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { postingReviews } from "../../redux/thunks/reviewThunk";
import { reviewActions } from "../../redux/slices/reviewSlice";
const FormReview = ({ id }) => {
  let [isValid, setValid] = useState(false);
  let dispatch = useDispatch();
  function validation({ name, title, comment, rating }) {
    if (
      name.trim().length > 0 &&
      title.trim().length > 0 &&
      comment.trim().length > 0 &&
      rating > 0
    ) {
      setValid(true);
    }
  }
  return (
    <Formik
      validateOnBlur={true}
      validateOnChange={true}
      initialValues={{
        id: id,
        time: moment().format("ll"),
        name: "",
        title: "",
        comment: "",
        rating: 0,
      }}
      validate={(values) => validation(values)}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        if (isValid) {
          dispatch(reviewActions.submitForm());
          dispatch(postingReviews(values));

          dispatch(reviewActions.toggleShow(false));
          resetForm({ values: "" });
          setValid(false);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className="formReview" onSubmit={handleSubmit}>
          <div className="formReview__input">
            <label htmlFor="name">Name (displayed publicly)</label>
            <input
              type="text"
              id="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Enter your name (public) "
            />
          </div>
          <div className="formReview__input">
            <label htmlFor="RatingReview">Rating</label>
            <Box
              sx={{
                "& > legend": { mt: +values.rating },
              }}
            >
              <Rating
                name="simple-controlled"
                value={values.rating}
                onChange={(event, newValue) => {
                  const customEvent = {
                    target: {
                      name: "rating",
                      value: newValue,
                    },
                  };
                  handleChange(customEvent);
                }}
              />
            </Box>
          </div>
          <div className="formReview__input">
            <label htmlFor="title">Review Title</label>
            <input
              id="title"
              value={values.title}
              onChange={handleChange}
              placeholder="Give your review a title "
            ></input>
          </div>
          <div className="formReview__input">
            <label htmlFor="review">Comment</label>
            <textarea
              id="comment"
              rows="5"
              value={values.comment}
              onChange={handleChange}
              placeholder="Write your comments here "
            ></textarea>
          </div>

          <button className={isValid ? "" : "invalid"} type="submit">
            Submit Review
          </button>
        </form>
      )}
    </Formik>
  );
};

export default FormReview;
