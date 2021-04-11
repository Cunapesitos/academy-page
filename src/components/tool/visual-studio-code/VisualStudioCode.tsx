import MenuLink from "../../menu-link/MenuLink";
import VisualStudioCodeContent from "./content/ComposerContent";

function VisualStudioCode(props: any) {
  let content = props.content;
  const menu: Array<any> = [
    {
      name: "¿Qué es Visual Studio Code?",
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
          <h3>Guía de Visual Studio Code</h3>
          <MenuLink baseHref="/herramientas/visual-studio-code" menu={menu} />
        </div>
        <div className="col">
          <VisualStudioCodeContent content={content} />
        </div>
      </div>
    </div>
  );
}

export default VisualStudioCode;
