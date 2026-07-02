import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Smart Booking System</h1>

      <p style={styles.subtitle}>
        Book services instantly. Manage appointments easily. Built for small businesses.
      </p>

      <Link to="/booking" style={styles.button}>
        Book Now
      </Link>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    textAlign: "center",
  },
  title: {
    fontSize: "40px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    maxWidth: "500px",
    margin: "0 auto 30px",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "black",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
  },
};