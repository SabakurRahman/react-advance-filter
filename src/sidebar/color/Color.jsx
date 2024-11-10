import "./Color.css";

const Color = () => {
  return (
    <div>
      <div>
        <h2 className="sidebar-title price-title">Color</h2>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Black
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Red
        </label>
      </div>
    </div>
  );
};

export default Color;
