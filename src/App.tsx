import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"
import Page from "./pages/Page.tsx";
import Fail from "./pages/Fail.tsx";
import Success from "./pages/Success.tsx";
import Error from "./pages/Error.tsx";
import SubmissionContextProvider from "./context/SubmissionContextProvider.tsx";

function App() {

  return (
    <SubmissionContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Page/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/fail" element={<Fail/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
    </SubmissionContextProvider>
  );
}

export default App
