import { Link } from "react-router-dom";

function Error() {

    return (

      <div>
        <div className="p-5 mb-4 bg-body-secondary">
          <h1 className="display-4">Oopss!</h1>
          <p className="lead">
            The page you are looking for may have been moved, deleted, or possibly never existed.
          </p>
          <Link to="/">
            <button className="btn btn-warning">Back to Sign Up</button>
          </Link>
        </div>
      </div>
      
    );
}

export default Error
