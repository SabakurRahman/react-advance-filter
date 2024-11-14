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

  const filteredItems = dataProduct.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectCategory(event.target.value);
  };
  // console.log(selectCategory);

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map((product) => (
      <Card key={Math.random()} product={product} />
    ));
  }

  const result = filteredData(dataProduct, selectCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <NavBar handleInputChange={handleInputChange} />
      <Recomoneded handleClick={handleClick} />
      <Product result={result} />
    </>
  );
}

export default App;
