import MenuLink from "../../menu-link/MenuLink";
import ComposerContent from "./content/ComposerContent";

function Composer(props: any) {
  let content = props.content;
  const menu: Array<any> = [
    {
      name: "¿Qué es Composer?",
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
          <h3>Guía de Composer</h3>
          <MenuLink baseHref="/herramientas/composer" menu={menu} />
        </div>
        <div className="col">
          <ComposerContent content={content} />
        </div>
      </div>
    </div>
  );
}

export default Composer;
