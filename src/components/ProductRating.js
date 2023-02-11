import { Star, StarBorder } from "@mui/icons-material/";
function ProductRating({ rating }) {
  let minRating = 5 - rating;
  return (
    <div className="product__rating">
      <>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={"Star" + i}>
              <Star />
            </p>
          ))}
        {Array(minRating)
          .fill()
          .map((_, i) => (
            <p key={"StarBorder" + i}>
              <StarBorder />
            </p>
          ))}
      </>
      <span className="product__rating-text">{rating} out of 5 stars</span>
    </div>
  );
}
export default ProductRating;
