import Guide from "../../utils/guide/Guide";
import LaravelContent from "./content/LaravelContent";

function Laravel(props: any) {
  let content = props.content;
  const menu: Array<any> = [
    {
      name: "¿Qué es Laravel?",
      href: "/",
      submenu: [],
    },
    {
      name: "Requisitos",
      href: "/requisitos",
      submenu: [],
    },
    {
      name: "Estructura de carpetas",
      href: "/estructura-de-carpetas",
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
        <Guide section="web" name="Laravel" menu={menu} />
        <div className="col">
          <LaravelContent content={content} />
        </div>
      </div>
    </div>
  );
}

export default Laravel;
