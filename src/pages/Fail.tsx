import { Link, Navigate } from "react-router-dom";
import { useSubmissionStatusContext } from "../context/SubmissionStatusContext";

function Fail() {
  const { submissionStatus } = useSubmissionStatusContext();

  if (submissionStatus !== "fail") {
    return <Navigate to="*" />;
  }

  return (
    <div className="p-5 mb-4 bg-body-secondary">
      <h1 className="display-4">Uh oh!</h1>
      <p className="lead">
        There was a problem in signing you up. Please try again or contact the
        developer.
      </p>
      <Link to="/">
        <button className="btn btn-warning">Try Again</button>
      </Link>
    </div>
  );
}

export default Fail;
