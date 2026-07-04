import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/admin/login");
    }
  }, []);

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}