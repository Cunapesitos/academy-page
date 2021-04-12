import Title from "../../../utils/title/Title";

function Requirements() {
  return (
    <div>
      <div>
        <div className="container">
          <Title title="Requisitos" />
          <p>Para esta guía se recomienda instalar lo siguiente:</p>
          <ul>
            <li>Windows 10</li>
          </ul>
          <p>
            Una vez cumplidos los requisitos, puedes descargar el instalador.
          </p>
          <div className="row justify-content-around">
            <div className="col-3">
              <a
                href="https://git-scm.com/"
                target="_blank"
                rel="noreferrer"
                className="btn badge bg-dark text-white"
              >
                Página oficial
              </a>
            </div>
            <div className="col-3">
              <a
                href="https://github.com/git-for-windows/git/releases/download/v2.31.1.windows.1/Git-2.31.1-64-bit.exe"
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
