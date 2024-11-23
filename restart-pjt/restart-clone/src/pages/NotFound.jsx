import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.message}>Page Not Found</p>
      <Link to="/" style={styles.link}>
        Go Back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: "5rem",
    color: "#333",
    margin: "0",
  },
  message: {
    fontSize: "1.5rem",
    color: "#666",
    margin: "10px 0 20px",
  },
  link: {
    fontSize: "1rem",
    color: "#007bff",
    textDecoration: "none",
    border: "1px solid #007bff",
    borderRadius: "5px",
    padding: "10px 20px",
    transition: "0.3s",
  },
};

export default NotFound;
