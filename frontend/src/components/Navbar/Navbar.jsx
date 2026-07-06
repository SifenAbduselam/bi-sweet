import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <span>Sweet</span>
        <h2>CRUMB</h2>
      </div>

      <nav>

        <a href="#home">Home</a>

        <a href="#menu">Menu</a>

        <a href="#gallery">Gallery</a>

        <a href="#contact">Contact</a>

      </nav>

      <Link to="/booking" className="order-btn">
        Order Now
      </Link>

    </header>
  );
}