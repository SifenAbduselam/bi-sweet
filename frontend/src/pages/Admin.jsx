// src/pages/Admin.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

export default function Admin() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  // Check if logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin/login");
    } else {
      fetchBookings();
    }
  }, [navigate]);

  async function fetchBookings() {
    try {
      const data = await api.getBookings();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      alert("Failed to load bookings");
    }
  }

  async function updateStatus(id, status) {
    try {
      await api.updateBooking(id, status);
      fetchBookings();
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status");
    }
  }

  async function deleteBooking(id) {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      try {
        await api.deleteBooking(id);
        fetchBookings();
      } catch (error) {
        console.error("Error deleting booking:", error);
        alert("Failed to delete booking");
      }
    }
  }

  function logout() {
    localStorage.removeItem("token");
    navigate("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-pink-600 text-white py-6 px-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-pink-100 text-sm mt-1">Bi-Sweet Deserts Management</p>
          </div>
          <button
            onClick={logout}
            className="bg-white text-pink-600 px-6 py-2.5 rounded-full font-semibold hover:bg-pink-50 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-500 text-sm mb-1">Total Bookings</p>
            <p className="text-3xl font-bold text-pink-600">{bookings.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-500 text-sm mb-1">Pending</p>
            <p className="text-3xl font-bold text-yellow-600">
              {bookings.filter(b => b.status === "Pending").length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-500 text-sm mb-1">Confirmed</p>
            <p className="text-3xl font-bold text-green-600">
              {bookings.filter(b => b.status === "Confirmed").length}
            </p>
          </div>
        </div>

        {/* Bookings List */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">All Bookings</h2>
          </div>

          {bookings.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              <p className="text-5xl mb-4">📭</p>
              <p className="text-lg">No bookings yet</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {bookings.map((b) => (
                <div key={b.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{b.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          b.status === "Confirmed" ? "bg-green-100 text-green-700" :
                          b.status === "Cancelled" ? "bg-red-100 text-red-700" :
                          "bg-yellow-100 text-yellow-700"
                        }`}>
                          {b.status}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-1">
                        <span className="font-semibold">Dessert:</span> {b.service}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-semibold">Date & Time:</span> {b.date} at {b.time}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => updateStatus(b.id, "Confirmed")}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                      >
                        ✓ Confirm
                      </button>
                      <button
                        onClick={() => updateStatus(b.id, "Cancelled")}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                      >
                        ✕ Cancel
                      </button>
                      <button
                        onClick={() => deleteBooking(b.id)}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                      >
                        🗑 Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}