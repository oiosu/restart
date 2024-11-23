import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Careers from "./pages/Careers";

const App = () => {
  return (
    <Router>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/careers" style={linkStyle}>Careers</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  );
};

const navStyle = {
  padding: "10px 20px",
  background: "#4facfe",
  display: "flex",
  gap: "20px",
  justifyContent: "center",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

export default App;
