/* import images */
import Image1 from "./assets/images/img_1.webp";
import Image2 from "./assets/images/img_2.jpeg";
import Image3 from "./assets/images/img_3.jpeg";
/* import styles */
import "./assets/aditions.css";

function Slider() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img src={Image1} className="d-block w-100 height-650" alt="..." />
            <div className="carousel-caption d-none d-md-block shadow p-3 mb-5 bg-body text-dark rounded">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item active">
            <img src={Image2} className="d-block w-100 height-650" alt="..." />
            <div className="carousel-caption d-none d-md-block shadow p-3 mb-5 bg-body text-dark rounded">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Image3} className="d-block w-100 height-650" alt="..." />
            <div className="carousel-caption d-none d-md-block shadow p-3 mb-5 bg-body text-dark rounded">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export { Slider };
