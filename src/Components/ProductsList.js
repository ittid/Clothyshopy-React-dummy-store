import { useEffect, useState } from "react";
import { Product } from "./Product";

function ProductsList() {
  const url = "https://fakestoreapi.com/products";
  let [product, setProduct] = useState([]);
  let [categories, setCategories] = useState([]);
  let [productByCategories, setProductByCategories] = useState([]);

  function getProducts() {
    fetch(url)
      .then((response) => response.json())
      .then((blob) => setProduct(blob));
  }
  function getCategories() {
    fetch(`${url}/categories`)
      .then((response) => response.json())
      .then((blob) => setCategories(blob));
  }
  const getProductByCategories = (catName) => {
    fetch(`${url}/category/${catName}`)
      .then((response) => response.json())
      .then((blob) => {
        setProduct(blob);
      });
  };
  useEffect(() => {
    getProducts();
    getCategories();
    setProductByCategories();
  }, []);

  return (
    <>
      <h1 className="text-center p-4">clothyShopy offer awesome products</h1>
      <div className="container">
        <button
          className="btn btn-warning"
          onClick={() => {
            getProducts();
          }}
        >
          All Products
        </button>
        {categories.map((cat) => {
          return (
            <button
              key={cat}
              className="btn btn-info"
              onClick={() => {
                getProductByCategories(cat);
              }}
            >
              {cat}
            </button>
          );
        })}
        <div className="row">
          {setProductByCategories.length > 0 ? (
            <Product data={product} />
          ) : (
            <Product data={productByCategories} />
          )}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
