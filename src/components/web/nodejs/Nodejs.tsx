import { Link } from "react-router-dom";

function Nodejs(props: any) {
  let content = props.content;
  if (!content) {
    content = "Index";
  }
  const menu: Array<any> = [
    {
      name: "Requisitos",
      href: "requisitos",
    },
    {
      name: "Estructura de carpetas",
      href: "estructura-de-carpetas",
    },
    {
      name: "Configuración",
      href: "configuracion",
    },
  ];
  return (
    <div id="ct" className="container-fluid">
      <div className="row h-100">
        <div className="col-3 border-end border-muted">
          <h3>Guía de NodeJs</h3>
          <div className="list-group list-group-flush">
            {menu.map((item: any, i: number) => {
              return (
                <Link
                  to={"/web/nodejs/" + item.href}
                  className="list-group-item list-group-item-action"
                >
                  {i + 1}. {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Nodejs;
