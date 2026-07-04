import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Booking from "../pages/Booking";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}