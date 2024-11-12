import { IoBag } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
const Card = ({ product }) => {
  return (
    <section className="card">
      <img src={product.img} alt="shoe" />

      <div className="card-details">
        <h3 className="card-title">{product.title}</h3>
        <section className="card-review">
          <FaStar className="card-rating" />
          <FaStar className="card-rating" />
          <FaStar className="card-rating" />
          <FaStar className="card-rating" />
          <span className="total-review">4</span>
        </section>
        <section className="card-price">
          <span className="price">
            <del>{product.prevPrice}</del> {product.newPrice}
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
