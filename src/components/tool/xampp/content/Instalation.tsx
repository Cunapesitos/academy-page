import Title from "../../../utils/title/Title";

function Instalation() {
  const images: any = [];
  for (let i = 1; i <= 16; i++) {
    images.push(
      <div
        key={i}
        className={`carousel-item ${i === 1 ? "active" : ""}`}
        data-bs-interval="900000"
      >
        <h5 className="text-center">
          {i}
          <small>
            <a
              href={`/xampp/instalation/${i}.png`}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-up-right mx-2 text-dark"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                />
              </svg>
            </a>
          </small>
        </h5>
        <img
          src={`/xampp/instalation/${i}.png`}
          className="d-block w-100 px-5"
          alt="..."
          height="75%"
        />
      </div>
    );
  }
  return (
    <div className="container">
      <Title title="Instalación" />
      <p>Pasos para instalar xampp:</p>
      <div className="col-7 mx-auto">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide carousel-fade"
          data-interval="false"
        >
          <div className="carousel-inner">{images}</div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
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
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Instalation;
