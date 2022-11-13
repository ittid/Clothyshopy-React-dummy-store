import { Link } from "react-router-dom";

function Product(props) {
  const { data } = props;
  let product = data.map((items) => {
    let textMinimized = items.description.substr(0, 110) + "...";
    let titleMinimized = items.title.substr(0, 20) + "...";

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
                <button href="#" className="btn btn-success m-1">
                  rating: {items.rating.rate}
                </button>
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
