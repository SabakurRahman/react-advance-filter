import { IoBag } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
const Card = () => {
  return (
    <section className="card">
      <img
        src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
        alt="shoe"
      />

      <div className="card-details">
        <h3 className="card-title">Product Name</h3>
        <section className="card-review">
          <FaStar className="card-rating" />
          <FaStar className="card-rating" />
          <FaStar className="card-rating" />
          <FaStar className="card-rating" />
          <span className="total-review">4</span>
        </section>
        <section className="card-price">
          <span className="price">
            <del>$300</del> $200
          </span>
          <div className="bag-icon">
            <IoBag />
          </div>
        </section>
      </div>
    </section>
  );
};
export default Card;
