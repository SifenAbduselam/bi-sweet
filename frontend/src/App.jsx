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
import ProtectedRoute from "./components/ProtectedRoute";
import heroBg from "./assets/hero-bg.jpg"; // Import the background image

export default function App() {
  return (
    // Global Background Wrapper with the dessert image
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Subtle dark overlay so the burgundy cards pop nicely */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10">
        <Routes>
          {/* Public Home Page */}
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <Products />
              <About />
              <Contact />
              <Footer />
            </>
          } />

          {/* Booking Page */}
          <Route path="/booking" element={
            <>
              <Navbar />
              <Booking />
              <Footer />
            </>
          } />

          {/* Login Page */}
          <Route path="/admin/login" element={<Login />} />
          
          {/* Protected Admin Dashboard */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </div>
  );
}