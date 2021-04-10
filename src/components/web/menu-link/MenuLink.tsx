import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Nodejs(props: any) {
  const baseHref = props.baseHref;
  const menu = props.menu;
  const location = useLocation().pathname.split("/")[3] ?? "";
  return (
    <div className="list-group list-group-flush">
      {menu.map((item: any, i: number) => {
        return (
          <Link
            to={baseHref + item.href}
            className={`list-group-item list-group-item-action 
            ${location === item.href ? "bg-dark text-white rounded" : ""}`}
          >
            {i + 1}. {item.name}
          </Link>
        );
      })}
    </div>
  );
}

export default Nodejs;
