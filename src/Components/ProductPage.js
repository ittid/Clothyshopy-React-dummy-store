import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const params = useParams();
  const [details, setDetails] = useState([]);
  console.log(params);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => response.json())
      .then((blob) => setDetails(blob));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row align-items-center p-4" key={details.id}>
          <div className="card">
            <img src={details.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{details.title}</h5>
              <p className="card-text">{details.description}</p>
              <button href="#" className="btn btn-warning m-1">
                {details.price}$
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ProductPage };
