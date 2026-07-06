// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { businessPresets } from "../data/businessPreset";
// Make sure to save your chosen image output here
import heroBg from "../assets/hero-bg.jpg"; 

export default function Home() {
  const data = businessPresets.bakery;

  return (
    <div style={styles.pageWrapper}>
      {/* Background Container Layer */}
      <div 
        style={{
          ...styles.heroContainer,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${heroBg})`
        }}
      >
        {/* Core Header Content Text Overlays */}
        <div style={styles.content}>
          <h1 style={styles.title}>{data.heroTitle}</h1>
          <p style={styles.subtitle}>{data.heroText}</p>
          
          <Link to="/booking" style={styles.exploreButton}>
            EXPLORE THE GALLERY
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    minHeight: "100vh",
    backgroundColor: "#fff",
    boxSizing: "border-box",
  },
  heroContainer: {
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "80px", // Accommodates fixed navigation header
    boxSizing: "border-box",
  },
  content: {
    textAlign: "center",
    color: "#ffffff",
    padding: "0 20px",
  },
  title: {
    fontSize: "64px",
    fontFamily: "Georgia, serif",
    fontWeight: "700",
    margin: "0 0 16px 0",
    letterSpacing: "-1px",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  subtitle: {
    fontSize: "20px",
    fontFamily: "system-ui, sans-serif",
    fontWeight: "300",
    maxWidth: "600px",
    margin: "0 auto 40px",
    lineHeight: "1.6",
    color: "#f3f4f6",
    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
  },
  exploreButton: {
    display: "inline-block",
    padding: "14px 36px",
    backgroundColor: "#ffffff",
    color: "#4D2F24",
    textDecoration: "none",
    borderRadius: "25px",
    fontWeight: "700",
    fontSize: "14px",
    letterSpacing: "0.5px",
    fontFamily: "system-ui, sans-serif",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease",
  },
};