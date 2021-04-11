import MenuLink from "../../menu-link/MenuLink";
import GitContent from "./content/GitContent";

function Composer(props: any) {
  let content = props.content;
  const menu: Array<any> = [
    {
      name: "¿Qué es Git?",
      href: "/",
      submenu: [],
    },
    {
      name: "Requisitos",
      href: "/requisitos",
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
          <h3>Guía de Git</h3>
          <MenuLink baseHref="/herramientas/git" menu={menu} />
        </div>
        <div className="col">
          <GitContent content={content} />
        </div>
      </div>
    </div>
  );
}

export default Composer;
