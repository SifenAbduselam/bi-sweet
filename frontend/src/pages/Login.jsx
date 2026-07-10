// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin() {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://bi-sweet-backend.onrender.com/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/admin");
      } else {
        setError(data.error || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Failed to connect to server. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8B4A5A] via-[#723C4B] to-[#4A2028] flex items-center justify-center px-4">
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl max-w-md w-full">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🔐</div>
          <h1 className="text-3xl font-bold text-[#8B4A5A] mb-2">Admin Login</h1>
          <p className="text-gray-600 text-sm">Bi-Sweet Deserts Dashboard</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <div className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@bisweet.com"
              className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8B4A5A] focus:ring-2 focus:ring-[#D4A3A3] transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2 text-sm">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8B4A5A] focus:ring-2 focus:ring-[#D4A3A3] transition-all"
              onKeyPress={(e) => e.key === "Enter" && handleLogin()}
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-[#8B4A5A] hover:bg-[#723C4B] text-white py-4 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            Authorized personnel only
          </p>
        </div>
      </div>
    </div>
  );
}