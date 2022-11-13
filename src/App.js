import Navbar from "./Components/Navbar";
import { Slider } from "./Components/Slider";
import ProductsList from "./Components/ProductsList";
import { Routes, Route } from "react-router-dom";
import { About } from "./Components/About";
import { ErrorPage } from "./Components/ErrorPage";
import { ProductPage } from "./Components/ProductPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="/About" element={<About />} />
        <Route path="/ProductPage/:productId" element={<ProductPage />} />
        <Route path="/ProductPage/" element={<ProductsList />} />
        <Route path="/Error" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
