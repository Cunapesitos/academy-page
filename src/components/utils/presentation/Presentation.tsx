function Presentation(props: any) {
  const slides: [] = props.slides;
  const images: any = [];
  slides.forEach((slide: any, i: number) => {
    images.push(
      <div
        key={i}
        className={`carousel-item px-5 ${i === 0 ? "active" : ""}`}
        data-bs-interval="900000"
      >
        <h4 className="col-10 text-start me-auto">
          {slide.description}
        </h4>
        <h5>
          <code>
            {slide.code}
          </code>
        </h5>
        <h6 className="col-10 text-end ms-auto">
          <small>
            {slide.note}
          </small>
        </h6>
        <img
          src={slide.imagePath}
          className="d-block w-100"
          alt="..."
          height="75%"
        />
        <h5 className="text-center">
          <small>
            <a
              href={slide.imagePath}
              target="_blank"
              rel="noreferrer"
            >
              <small className="badge rounded-pill bg-light text-dark border border-dark">ver</small>
            </a>
          </small>
        </h5>
      </div>
    );
  });
  return (
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
  );
}

export default Presentation;
