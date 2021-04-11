import MenuLink from "../../menu-link/MenuLink";
import XamppContent from "./content/XamppContent";

function Xampp(props: any) {
  let content = props.content;
  const menu: Array<any> = [
    {
      name: "¿Qué es Xampp?",
      href: "/",
      submenu: [],
    },
    {
      name: "Requisitos",
      href: "/requisitos",
      submenu: [],
    },
    {
      name: "Instalación",
      href: "/instalacion",
      submenu: [],
    },
    {
      name: "Configuración",
      href: "/configuracion",
      submenu: [],
    },
  ];
  return (
    <div id="ct" className="container-fluid">
      <div className="row h-100">
        <div className="col-3 border-end border-muted">
          <h3>Guía de Xampp</h3>
          <MenuLink baseHref="/herramientas/xampp" menu={menu} />
        </div>
        <div className="col">
          <XamppContent content={content} />
        </div>
      </div>
    </div>
  );
}

export default Xampp;
