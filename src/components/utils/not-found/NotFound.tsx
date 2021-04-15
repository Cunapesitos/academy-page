import { Link, useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();
  return (
    <div className="ct container-fluid">
      <div className="row h-100">
        <h3>Not found</h3>
        <Link to="/" className="btn btn-outline-dark">
          Go to page home
      </Link>
        <button onClick={goBack} className="btn btn-outline-dark">
          Go back
      </button>
      </div>
    </div>
  );
  function goBack() {
    history.goBack();
  }
}

export default NotFound;
