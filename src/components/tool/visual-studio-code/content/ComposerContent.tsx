import NotFound from "../../../not-found/NotFound";
import Requirements from "./Requirements";
import WhatIs from "./WhatIs";

function VisualStudioCodeContent(props: any) {
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

export default VisualStudioCodeContent;
