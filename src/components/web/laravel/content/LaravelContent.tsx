import NotFound from "../../../utils/not-found/NotFound";import Requirements from "./Requirements";
import WhatIs from "./WhatIs";

function LaravelContent(props: any) {
  const content = props.content ?? "";
  switch (content) {
    case "requisitos":
      return <Requirements />;
    case "":
      return <WhatIs />;
    default:
      return <NotFound />;
  }
}

export default LaravelContent;
