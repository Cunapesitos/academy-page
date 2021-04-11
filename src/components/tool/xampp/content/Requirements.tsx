import Title from "../../../title/Title";

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
                href="https://www.apachefriends.org/index.html"
                target="_blank"
                rel="noreferrer"
                className="btn badge bg-dark text-white"
              >
                Página oficial
              </a>
            </div>
            <div className="col-3">
              <a
                href="https://www.apachefriends.org/xampp-files/7.3.27/xampp-windows-x64-7.3.27-1-VC15-installer.exe"
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
