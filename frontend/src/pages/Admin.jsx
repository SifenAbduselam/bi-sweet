import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Admin() {
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