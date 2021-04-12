import Guide from "../../utils/guide/Guide";
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
    <div className="ct container-fluid">
      <div className="row h-100">
        <Guide section="herramientas" name="Composer" menu={menu} />
        <div className="col">
          <ComposerContent content={content} />
        </div>
      </div>
    </div>
  );
}

export default Composer;
