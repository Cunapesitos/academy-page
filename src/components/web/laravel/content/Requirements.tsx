import { Link } from "react-router-dom";
import Title from "../../../title/Title";

function Requirements() {
  return (
    <div>
      <div>
        <div className="container">
          <Title title="Requisitos" />
          <p>Para esta guía se recomienda instalar lo siguiente:</p>
          <ul>
            <li>
              XAMPP
              <Link
                to="/herramientas/xampp"
                className="text-dark"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Tooltip on top"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right mx-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              Composer
              <Link
                to="/herramientas/composer"
                className="text-dark"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Tooltip on top"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right mx-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              Visual Studio Code
              <Link
                to="/herramientas/visual-studio-code"
                className="text-dark"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Tooltip on top"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right mx-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              Git
              <Link
                to="/herramientas/git"
                className="text-dark"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Tooltip on top"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right mx-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
          {/* 
          <button
            type="button"
            className="btn btn-sm btn-outline-dark"
            data-bs-toggle="modal"
            data-bs-target="#xampp-video-modal"
          >
            Guía de instalación
          </button> */}
        </div>
      </div>
      <div
        className="modal fade bx"
        id="xampp-video-modal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-hidden="true"
      >
        <div className="modal-dialog h-100 modal-xl my-0">
          <div className="modal-content h-100">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Guía de instalación
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ct text-center">
              <iframe
                width="75%"
                height="100%"
                src="https://www.youtube.com/embed/y2myH3YodA8?version=3&enablejsapi=1"
                frameBorder="0"
                allowFullScreen
                title="How to install"
              ></iframe>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Requirements;
