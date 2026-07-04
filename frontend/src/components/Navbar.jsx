import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav style={styles.nav}>
      <h2 style={styles.logo}>BookingSystem</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/booking" style={styles.link}>Booking</Link>
        <Link to="/admin" style={styles.link}>Admin</Link>
      </div>
    </nav>
    </>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 20px",
    borderBottom: "1px solid #ddd",
    alignItems: "center",
  },
  logo: {
    margin: 0,
    fontSize: "18px",
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontWeight: "500",
  },
};