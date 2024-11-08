import "./App.css";
import NavBar from "./navigation/NavBar";
import Product from "./product/Product";
import Recomoneded from "./recomended/Recomended";
import Sidebar from "./sidebar/Sidebar";

function App() {
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
