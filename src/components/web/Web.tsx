import Laravel from "./laravel/Laravel";
import Nodejs from "./nodejs/Nodejs";
import NotFound from "../not-found/NotFound";

function Web({ match }: any) {
  const name = match.params.name;
  const content = match.params.content;
  switch (name) {
    case "laravel":
      return <Laravel content={content} />;
    case "nodejs":
      return <Nodejs content={content} />;
    default:
      return <NotFound />;
  }
}

export default Web;
