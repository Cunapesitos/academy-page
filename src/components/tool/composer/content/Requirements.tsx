import Title from "../../../utils/title/Title";
import { Link } from "react-router-dom";

function Requirements() {
  return (
    <div>
      <div>
        <div className="container">
          <Title title="Requisitos" />
          <p>Para esta guía se recomienda instalar lo siguiente:</p>
          <ul>
            <li>
              PHP 7.3
              <br />
              <small>
                (XAMPP instala PHP automáticamente, de recomendación, instalate
                XAMPP!
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
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                    />
                  </svg>
                </Link>
                )
              </small>
            </li>
          </ul>
          <p>
            Una vez cumplidos los requisitos, puedes descargar el instalador.
          </p>
          <div className="row justify-content-around">
            <div className="col-3">
              <a
                href="https://getcomposer.org"
                target="_blank"
                rel="noreferrer"
                className="btn badge bg-dark text-white"
              >
                Página oficial
              </a>
            </div>
            <div className="col-3">
              <a
                href="https://getcomposer.org/Composer-Setup.exe"
                className="btn badge bg-dark text-white"
              >
                Descarga directa <small>(Windows 10)</small>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Requirements;
