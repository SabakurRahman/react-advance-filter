import Category from "./category/Category";
import Color from "./color/Color";
import Price from "./price/Price";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category />
        <Price />
        <Color />
      </section>
    </>
  );
};

export default Sidebar;
