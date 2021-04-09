import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h3>Route not found</h3>
      <Link to="/" className="btn btn-outline-dark">
        Go to home
      </Link>
    </div>
  );
}

export default NotFound;
