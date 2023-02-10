import { Star, StarBorder } from "@mui/icons-material/";
function ProductRating({ rating }) {
  let minRating = 5 - rating;
  return (
    <div className="product__rating">
      <>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>
              <Star />
            </p>
          ))}
        {Array(minRating)
          .fill()
          .map((_, i) => (
            <p>
              <StarBorder />
            </p>
          ))}
      </>
      <span class="product__rating-text">{rating} out of 5</span>
    </div>
  );
}
export default ProductRating;
