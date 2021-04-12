import { Link } from "react-router-dom";
import Title from "../../../utils/title/Title";

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
                    fillRule="evenodd"
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
                    fillRule="evenodd"
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
                    fillRule="evenodd"
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
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Requirements;
