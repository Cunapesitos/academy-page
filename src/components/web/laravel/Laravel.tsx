import MenuLink from "../menu-link/MenuLink";
import LaravelContent from "./content/LaravelContent";

function Laravel(props: any) {
  let content = props.content;
  const menu: Array<any> = [
    {
      name: "¿Qué es Laravel?",
      href: "",
    },
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
          <h3>Sección de Laravel</h3>
          <MenuLink baseHref="/web/laravel/" menu={menu} />
        </div>
        <div className="col">
          <LaravelContent content={content} />
        </div>
      </div>
    </div>
  );
}

export default Laravel;
