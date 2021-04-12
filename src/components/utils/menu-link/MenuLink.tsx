import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Nodejs(props: any) {
  const baseHref = props.baseHref;
  const menu = props.menu;
  const location = "/" + (useLocation().pathname.split("/")[3] ?? "");
  return (
    <ul className="list-group list-group-flush">
      {menu.map((item: any, i: number) => {
        return (
          <div key={i}>
            <Link
              to={baseHref + item.href}
              className={`list-group-item href text-dark
            ${location === item.href ? "bg-dark text-white rounded" : ""}`}
            >
              {i + 1}. {item.name}
            </Link>
            {location === item.href && (
              <ul>
                {item.submenu.map((subitem: any, j: number) => {
                  return (
                    <li>
                      <Link
                        to={baseHref + item.href + subitem.href}
                        className="text-dark href"
                      >
                        {subitem.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </ul>
  );
}

export default Nodejs;
