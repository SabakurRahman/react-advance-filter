import "./App.css";
import NavBar from "./navigation/NavBar";
import Product from "./product/Product";
import Recomoneded from "./recomended/Recomended";
import Sidebar from "./sidebar/Sidebar";

function App() {
  const [selectCategory, setSelectCategory] = useState(null);
  const [selectPrice, setSelectPrice] = useState(null);
  const [selectColor, setSelectColor] = useState(null);

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Sidebar />
      <NavBar />
      <Recomoneded />
      <Product />
    </>
  );
}

export default App;
