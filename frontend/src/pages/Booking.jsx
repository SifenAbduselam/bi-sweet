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

    try {
      const response = await fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

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
    <section className="min-h-screen bg-gradient-to-br from-[#FFFBF7] via-[#FFF5F1] to-[#FFE8E0] py-32 px-4">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-10 h-px bg-[#8B4A5A]/40" />
            <p className="text-[#8B4A5A] text-xs font-medium uppercase tracking-[0.3em]">
              Place Your Order
            </p>
            <span className="w-10 h-px bg-[#8B4A5A]/40" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-4">
            Book a Dessert
          </h1>
          
          <p className="text-gray-600 font-light">
            Fill out the form below and we'll prepare your order with love
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-sm shadow-sm p-10 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider mb-3">
                Your Name
              </label>
              <input
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-0 py-4 border-b border-gray-300 focus:border-[#8B4A5A] bg-transparent focus:outline-none transition-colors text-gray-900 placeholder:text-gray-400"
                required
              />
            </div>

            {/* Service Field */}
            <div>
              <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider mb-3">
                Select Dessert
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full px-0 py-4 border-b border-gray-300 focus:border-[#8B4A5A] bg-transparent focus:outline-none transition-colors text-gray-900"
                required
              >
                <option value="" className="text-gray-400">Choose a dessert</option>
                <option value="White Coconut">White Coconut</option>
                <option value="Black Strawberry">Black Strawberry</option>
                <option value="Kinder Biscoff">Kinder Biscoff</option>
                <option value="Oreo">Oreo</option>
                <option value="White Strawberry">White Strawberry</option>
                <option value="Lotus Biscoff">Lotus Biscoff</option>
              </select>
            </div>

            {/* Date & Time Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider mb-3">
                  Pickup Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full px-0 py-4 border-b border-gray-300 focus:border-[#8B4A5A] bg-transparent focus:outline-none transition-colors text-gray-900"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider mb-3">
                  Pickup Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full px-0 py-4 border-b border-gray-300 focus:border-[#8B4A5A] bg-transparent focus:outline-none transition-colors text-gray-900"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#8B4A5A] hover:bg-[#723C4B] text-white py-4 text-sm font-medium uppercase tracking-[0.2em] transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Confirm Booking"}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 font-light text-sm">
            📞 Need help? Call us at <span className="text-[#8B4A5A] font-medium">0982284291</span>
          </p>
        </div>
      </div>
    </section>
  );
}