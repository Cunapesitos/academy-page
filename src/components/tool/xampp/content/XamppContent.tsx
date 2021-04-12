import NotFound from "../../../utils/not-found/NotFound";
import Requirements from "./Requirements";
import Instalation from "./Instalation";
import WhatIs from "./WhatIs";

function XamppContent(props: any) {
  const content = props.content ?? "";
  switch (content) {
    case "requisitos":
      return <Requirements />;
    case "instalacion":
      return <Instalation />;
    case "":
      return <WhatIs />;
    default:
      return <NotFound />;
  }
}

export default XamppContent;
