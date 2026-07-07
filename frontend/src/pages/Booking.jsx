// src/pages/Booking.jsx
import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    console.log("Submitting booking:", form);

    try {
      const response = await fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response data:", data);

      if (data.success) {
        alert("Booking sent to backend!");
        setForm({
          name: "",
          service: "",
          date: "",
          time: "",
        });
      } else {
        alert("Booking failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("Failed to submit booking. Check console for details.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E0E3] to-[#E5C5CA] pt-28 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#8B4A5A] font-semibold uppercase tracking-wider mb-2">
            Place Your Order
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#723C4B] mb-4">
            Book a Dessert
          </h1>
          <div className="w-20 h-1 bg-[#8B4A5A] mx-auto rounded-full mb-4" />
          <p className="text-gray-700">
            Fill out the form below and we'll prepare your order with love! 🍰
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Your Name
              </label>
              <input
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8B4A5A] focus:ring-2 focus:ring-[#D4A3A3] transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Select Dessert
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8B4A5A] focus:ring-2 focus:ring-[#D4A3A3] transition-all bg-white"
                required
              >
                <option value="">Choose a dessert</option>
                <option value="White Coconut">White Coconut</option>
                <option value="Black Strawberry">Black Strawberry</option>
                <option value="Kinder Biscoff">Kinder Biscoff</option>
                <option value="Oreo">Oreo</option>
                <option value="White Strawberry">White Strawberry</option>
                <option value="Lotus Biscoff">Lotus Biscoff</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Pickup Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8B4A5A] focus:ring-2 focus:ring-[#D4A3A3] transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Pickup Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8B4A5A] focus:ring-2 focus:ring-[#D4A3A3] transition-all"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#8B4A5A] hover:bg-[#723C4B] text-white py-4 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Confirm Booking 🍰"}
            </button>
          </form>
        </div>

        {/* Info Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-700 text-sm">
            📞 Need help? Call us at <span className="font-semibold text-[#8B4A5A]">0982284291</span>
          </p>
        </div>
      </div>
    </div>
  );
}