import { useState } from "react";
import "./App.css";
import NavBar from "./navigation/NavBar";
import Product from "./product/Product";
import Recomoneded from "./recomended/Recomended";
import Sidebar from "./sidebar/Sidebar";

import dataProduct from "./db/db";
import Card from "./components/Card";

function App() {
  const [selectCategory, setSelectCategory] = useState(null);

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleChange = (event) => {
    setSelectCategory(event.target.value);
  };

  const handleClick = () => {
    console.log(selectCategory);
  };

  return (
    <>
      <Sidebar />
      <NavBar />
      <Recomoneded />
      <Product dataProduct={dataProduct} />
    </>
  );
}

export default App;
