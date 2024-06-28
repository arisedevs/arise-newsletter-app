import { useState } from "react"
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSubmissionStatusContext } from "../context/SubmissionStatusContext";

function Form() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    })
    const [isError, setIsError ] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>();
    const navigate = useNavigate();
    const { setSubmissionStatus } = useSubmissionStatusContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { value, name } = e.target;
        setFormData((prevValue) => ({
            ...prevValue,
            [name]: value,
        }))
    }

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
          const response = await axios.post("http://localhost:8000/api/subscribe", formData);

          console.log(response.data);

          setSubmissionStatus("success");
          navigate("/success")

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch(error: any) {
          if (error.response && error.response.status === 400) {
            if (error.response.data.title === "Invalid Resource") {
              console.error("Invalid email address: ", error);
              setIsError(true);
              setErrorMessage("Email looks fake or invalid, please enter a real email address.");
            } else if (error.response.data.title === "Member Exists") {
              console.error("Email already exists: ", error);
              setIsError(true);
              setErrorMessage("Email already exists.");
            } else {
              console.error("Error on adding subscriber: ", error);
              setSubmissionStatus("fail");
              navigate("/fail");
            }
          } else {
            console.error("Error on adding subscriber: ", error);
            setSubmissionStatus("fail");
            navigate("/fail");
          }
        }
    }

    return (
      <>
        {isError && (
          <div className="alert alert-warning" role="alert">
            {errorMessage}
          </div>
        )}

        <form onSubmit={submitForm}>
          <div className="form-floating">
            <input
              type="text"
              className="form-control top"
              id="floatingTextFirstName"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={formData.firstName}
              required
              autoFocus
            />
            <label>First Name</label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="form-control middle"
              id="floatingTextLastName"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={formData.lastName}
              required
            />
            <label>Last Name</label>
          </div>

          <div className="form-floating">
            <input
              type="email"
              className="form-control bottom"
              id="floatingInput"
              name="email"
              placeholder="name@example.com"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <label>Email address</label>
          </div>

          <Button />
        </form>
      </>
    );
}

export default Form
