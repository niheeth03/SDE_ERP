import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const International_admissions = () => {
  return (
    <div>
      <h2>
        Calling for{" "}
        <Link to="./application">application from International students</Link>
      </h2>
    </div>
  );
};

export default International_admissions;
