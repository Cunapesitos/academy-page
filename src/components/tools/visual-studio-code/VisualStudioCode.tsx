import Guide from "../../utils/guide/Guide";
import VisualStudioCodeContent from "./content/VisualStudioCodeContent";

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
    <div className="ct container-fluid">
      <div className="row h-100">
        <Guide section="herramientas" name="Visual Studio Code" menu={menu} />
        <div className="col">
          <VisualStudioCodeContent content={content} />
        </div>
      </div>
    </div>
  );
}

export default VisualStudioCode;
