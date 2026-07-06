

// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

function HomePage() {
  return (
    <>
      <Home />
      <Products />
      <About />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={
          <>
            <Navbar />
            <HomePage />
            <Footer />
          </>
        } />
        
        <Route path="/booking" element={
          <>
            <Navbar />
            <Booking />
            <Footer />
          </>
        } />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}