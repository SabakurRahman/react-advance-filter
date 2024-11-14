import Input from "../../components/Input";
import "./Color.css";

const Color = ({ handleChange }) => {
  return (
    <div>
      <div>
        <h2 className="sidebar-title color-title">Color</h2>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="blue"
          name="test1"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="red"
          name="test1"
          color="red"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="green"
          name="test1"
          color="green"
        />
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />
      </div>
    </div>
  );
};

export default Color;
