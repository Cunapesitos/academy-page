import Guide from "../../utils/guide/Guide";
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
    <div className="ct container-fluid">
      <div className="row h-100">
        <Guide section="herramientas" name="Git" menu={menu} />
        <div className="col">
          <GitContent content={content} />
        </div>
      </div>
    </div>
  );
}

export default Composer;
