import Input from "../../components/Input";
import "./Category.css";
const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <Input
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="flats"
        title="flats"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="sandals"
        title="sandals"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="heels"
        title="heels"
        name="test"
      />
    </div>
  );
};
export default Category;
