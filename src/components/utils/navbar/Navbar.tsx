import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nv navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <label className="navbar-brand">Cuñapesitos</label>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button
                className="btn nav-link"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Web
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/web/laravel">
                    Laravel
                  </Link>
                  <Link className="dropdown-item" to="/web/nodejs">
                    NodeJs
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button
                className="btn nav-link"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Herramientas
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/herramientas/xampp">
                    XAMPP
                  </Link>
                  <Link className="dropdown-item" to="/herramientas/composer">
                    Composer
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/herramientas/visual-studio-code"
                  >
                    Visual Studio Code
                  </Link>
                  <Link className="dropdown-item" to="/herramientas/git">
                    Git
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
