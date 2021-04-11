import { Link, useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();
  return (
    <div>
      <h3>Not found</h3>
      <Link to="/" className="btn btn-outline-dark">
        Go to page home
      </Link>
      <button onClick={goBack} className="btn btn-outline-dark">
        Go back
      </button>
    </div>
  );
  function goBack() {
    history.goBack();
  }
}

export default NotFound;
