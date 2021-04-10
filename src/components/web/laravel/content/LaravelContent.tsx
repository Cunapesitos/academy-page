import Requisitos from "./Requisitos";
import WhatIs from "./WhatIs";

function LaravelContent(props: any) {
  const content = props.content;
  switch (content) {
    case "requisitos":
      return <Requisitos />;
    default:
      return <WhatIs />;
  }
}

export default LaravelContent;
