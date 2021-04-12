import NotFound from "../utils/not-found/NotFound";
import Composer from "./composer/Composer";
import VisualStudioCode from "./visual-studio-code/VisualStudioCode";
import Git from "./git/Git";
import Xampp from "./xampp/Xampp";

function Tool({ match }: any) {
  const name = match.params.name;
  const content = match.params.content;
  switch (name) {
    case "xampp":
      return <Xampp content={content} />;
    case "composer":
      return <Composer content={content} />;
    case "visual-studio-code":
      return <VisualStudioCode content={content} />;
    case "git":
      return <Git content={content} />;
    default:
      return <NotFound />;
  }
}

export default Tool;
