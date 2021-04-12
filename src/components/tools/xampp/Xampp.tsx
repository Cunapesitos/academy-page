import Guide from "../../utils/guide/Guide";
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
    <div className="ct container-fluid overflow-auto">
      <div className="row h-100">
        <Guide section="herramientas" name="Xampp" menu={menu} />
        <div className="col h-100 overflow-auto">
          <XamppContent content={content} />
        </div>
      </div>
    </div>
  );
}

export default Xampp;
