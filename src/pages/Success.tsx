import { Link, Navigate } from "react-router-dom";
import { useSubmissionStatusContext } from "../context/SubmissionStatusContext";

function Success() {
  const { submissionStatus } = useSubmissionStatusContext();

  if (submissionStatus !== "success") {
    return <Navigate to="*" />;
  }

  return (
    <div className="p-5 mb-4 bg-body-secondary">
      <h1 className="display-4">Awesome!</h1>
      <p className="lead">
        You have successfully signed up to the newsletter. Looking forward to
        lots of cool contents!
      </p>
      <Link to="/">
        <button className="btn btn-primary">Sign Up Another Email</button>
      </Link>
    </div>
  );
}

export default Success;
