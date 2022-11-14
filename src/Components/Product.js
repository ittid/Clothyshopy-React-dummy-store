import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product(props) {
  let { data } = props;

  // delete
  let [dataAfterDelet, setNotDeleted] = useState([]);
  // update
  let [edited, setEdite] = useState([]);
  console.log(edited);
  if (dataAfterDelet.length > 0) {
    data = dataAfterDelet;
  }
  /* live updated producct */
  let [title, setTitle] = useState([]);
  let [description, setDescription] = useState([]);
  let [price, setPrice] = useState([]);
  let [image, setImage] = useState([]);
  let [rating, setRating] = useState([]);
  let [category, setCategory] = useState([]);

  if (edited.hasOwnProperty("id")) {
    data.filter((el) => {
      if (el.id !== edited.id) {
        return el.id;
      }
      return el;
    });
    data[edited.id - 1] = edited;
  }

  //EditProduct
  const editProduct = (
    id /* , title, price, img, descr, cat, rating = 3.9 */
  ) => {
    if (id)
      fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PUT",
        /*       body: JSON.stringify({
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
        rating: {
          rate: 3.9,
          count: 120,
        },
      }), */
      })
        .then((res) => res.json())
        .then((json) => {
          let editedData = {
            id: id,
            title: title,
            price: price,
            description: description,
            image: image,
            category: category,
            rating: {
              rate: rating,
              count: 120,
            },
          };
          setEdite(editedData);
        });
  };

  const deleteProduct = (id) => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((json) => {
          let filteredData = data.filter((el) => {
            return el.id !== id;
          });
          setNotDeleted(filteredData);
        });
    }
  };

  useEffect(() => {
    deleteProduct();
    editProduct();
  }, []);

  let product = data.map((items) => {
    let textMinimized;
    let titleMinimized;
    if (items.description.length > 0 > 0 && items.title.length > 0) {
      textMinimized = items.description.substr(0, 110) + "...";
      titleMinimized = items.title.substr(0, 20) + "...";
    }
    return (
      <>
        <div className="col-3" key={items.id}>
          <div>
            <div className="card m-1">
              <img
                src={items.image}
                className="card-img-top immgg img-thumbnail"
                alt={items.title}
              />
              <div className="card-body">
                <h5 className="card-title">{titleMinimized}</h5>
                <p className="card-text">{textMinimized}</p>
                <p className="card-text">
                  <small className="text-muted">{items.category}</small>
                </p>
                <Link to={`/ProductPage/${items.id}`}>
                  <button href="#" className="btn btn-primary m-1">
                    More details
                  </button>
                </Link>
                <button href="#" className="btn btn-warning m-1">
                  {items.price}$
                </button>
                <button href="#" className="btn btn-dark">
                  {items.rating.rate}
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteProduct(items.id);
                  }}
                >
                  delete
                </button>

                <div>
                  <div>
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text" id="addon-wrapping">
                        title
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="title"
                        data-info
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        onChange={(e) => {
                          console.log(e.target.value);
                          setTitle(e.target.value);
                        }}
                      />
                    </div>
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text" id="addon-wrapping">
                        description
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="description"
                        data-info
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        onChange={(e) => {
                          console.log(e.target.value);
                          setDescription(e.target.value);
                        }}
                      />
                    </div>
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text" id="addon-wrapping">
                        image
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="image"
                        data-info
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        onChange={(e) => {
                          console.log(e.target.value);
                          setImage(e.target.value);
                        }}
                      />
                    </div>
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text" id="addon-wrapping">
                        price
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="price"
                        data-info
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        onChange={(e) => {
                          console.log(e.target.value);
                          setPrice(e.target.value);
                        }}
                      />
                    </div>
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text" id="addon-wrapping">
                        Rating
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="price"
                        data-info
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        onChange={(e) => {
                          console.log(e.target.value);
                          setRating(e.target.value);
                        }}
                      />
                    </div>
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text" id="addon-wrapping">
                        category
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="category"
                        data-info
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                        onChange={(e) => {
                          console.log(e.target.value);
                          setCategory(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      editProduct(items.id);
                    }}
                  >
                    Live Edite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
  return <>{product}</>;
}

export { Product };
