import MenuLink from "../menu-link/MenuLink";

function Guide(props: any) {
  const section = props.section;
  const name = props.name;
  const menu = props.menu;
  return (
    <div className="col-3 border-end border-muted h-100 overflow-auto">
      <h3>Guía de {name}</h3>
      <MenuLink
        baseHref={`/${section}/${name.toLowerCase().replaceAll(" ", "-")}`}
        menu={menu}
      />
    </div>
  );
}

export default Guide;
