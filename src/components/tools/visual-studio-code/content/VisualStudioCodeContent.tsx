import NotFound from "../../../utils/not-found/NotFound";
import Instalation from "./Instalation";
import Requirements from "./Requirements";
import WhatIs from "./WhatIs";

function VisualStudioCodeContent(props: any) {
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

export default VisualStudioCodeContent;
