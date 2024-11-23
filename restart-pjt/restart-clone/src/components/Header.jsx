import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/careers">Careers</Link>
      </nav>
    </header>
  );
};

export default Header;