// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      {/* 1. Left Section: Action CTA Button */}
      <div style={styles.flexSectionLeft}>
        <Link to="/booking" style={styles.bookButton}>
          BOOK NOW
        </Link>
      </div>

      {/* 2. Middle Section: Navigation Links */}
      <div style={styles.flexSectionCenter}>
        <Link to="/" style={styles.link}>HOME</Link>
        <Link to="/gallery" style={styles.link}>GALLERY</Link>
        <Link to="/contact" style={styles.link}>CONTACT US</Link>
      </div>

      {/* 3. Right Section: Brand Name Text */}
      <div style={styles.flexSectionRight}>
        <h2 style={styles.logo}>Bi Sweet Bakery</h2>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
    height: "80px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #f3f4f6",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxSizing: "border-box",
  },
  flexSectionLeft: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
  },
  flexSectionCenter: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    gap: "40px",
  },
  flexSectionRight: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  logo: {
    margin: 0,
    fontSize: "22px",
    fontFamily: "Georgia, serif",
    color: "#4D2F24",
    letterSpacing: "-0.5px",
  },
  link: {
    textDecoration: "none",
    color: "#4b5563",
    fontWeight: "600",
    fontSize: "13px",
    letterSpacing: "1px",
    fontFamily: "system-ui, sans-serif",
  },
  bookButton: {
    padding: "10px 24px",
    backgroundColor: "#4D2F24",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "1px",
    fontFamily: "system-ui, sans-serif",
    transition: "background-color 0.2s ease",
  },
};