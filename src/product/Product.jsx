import "./Product.css";

import Card from "../components/Card";
import { LuGalleryHorizontal } from "react-icons/lu";
const Product = ({ dataProduct }) => {
  return (
    <>
      <section className="card-container">
        {dataProduct.map((product) => (
          <Card product={product} />
        ))}
      </section>
    </>
  );
};
export default Product;
