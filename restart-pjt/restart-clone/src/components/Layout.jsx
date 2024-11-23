import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  //children 타입 명시 
  children: PropTypes.node.isRequired,
};

export default Layout;
