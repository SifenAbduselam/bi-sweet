// src/pages/Admin.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

export default function Admin() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      navigate("/admin/login");
      return;
    }
    
    fetchBookings();
  }, [navigate]);

  async function fetchBookings() {
    try {
      setLoading(true);
      setError(null);
      
      const data = await api.getBookings();
      
      if (Array.isArray(data)) {
        setBookings(data);
      } else if (data && data.error) {
        setError(data.error);
        if (data.error.includes("Unauthorized") || data.error.includes("token")) {
          localStorage.removeItem("token");
          navigate("/admin/login");
        }
      } else {
        console.error("Unexpected response:", data);
        setError("Failed to load bookings. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setError("Failed to connect to server. Make sure backend is running.");
    } finally {
      setLoading(false);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F5E0E3] to-[#E5C5CA] flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4 animate-spin">🍰</div>
          <p className="text-[#723C4B] text-lg font-semibold">Loading bookings...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F5E0E3] to-[#E5C5CA] flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
          <div className="text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-[#8B4A5A] mb-2">Error</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => navigate("/admin/login")}
            className="bg-[#8B4A5A] hover:bg-[#723C4B] text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E0E3] to-[#E5C5CA]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B4A5A] to-[#723C4B] text-white py-6 px-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-[#D4A3A3] text-sm mt-1">Bi-Sweet Deserts Management</p>
          </div>
          <button
            onClick={logout}
            className="bg-white text-[#8B4A5A] px-6 py-2.5 rounded-full font-semibold hover:bg-[#F5E0E3] transition-colors shadow-md"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-gray-500 text-sm mb-1">Total Bookings</p>
            <p className="text-3xl font-bold text-[#8B4A5A]">{bookings.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-gray-500 text-sm mb-1">Pending</p>
            <p className="text-3xl font-bold text-yellow-600">
              {bookings.filter(b => b.status === "Pending").length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-gray-500 text-sm mb-1">Confirmed</p>
            <p className="text-3xl font-bold text-green-600">
              {bookings.filter(b => b.status === "Confirmed").length}
            </p>
          </div>
        </div>

        {/* Bookings List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-[#F5E0E3] to-white">
            <h2 className="text-2xl font-bold text-[#8B4A5A]">All Bookings</h2>
          </div>

          {bookings.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              <p className="text-5xl mb-4">📭</p>
              <p className="text-lg">No bookings yet</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {bookings.map((b) => (
                <div key={b.id} className="p-6 hover:bg-[#F5E0E3]/30 transition-colors">
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
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors shadow-md"
                      >
                        ✓ Confirm
                      </button>
                      <button
                        onClick={() => updateStatus(b.id, "Cancelled")}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors shadow-md"
                      >
                        ✕ Cancel
                      </button>
                      <button
                        onClick={() => deleteBooking(b.id)}
                        className="bg-[#8B4A5A] hover:bg-[#723C4B] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors shadow-md"
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