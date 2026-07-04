import { useEffect, useState } from "react";
import { api } from "../api/api";

export default function Admin() {
  const [bookings, setBookings] = useState([]);

  async function fetchBookings() {
    const data = await api.getBookings();
    setBookings(data);
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  async function updateStatus(id, status) {
    await api.updateBooking(id, status);
    fetchBookings();
  }

  async function deleteBooking(id) {
    await api.deleteBooking(id);
    fetchBookings();
  }

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Admin Dashboard</h1>

      <button onClick={logout}>Logout</button>

      {bookings.map((b) => (
        <div
          key={b.id}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <p><b>{b.name}</b></p>
          <p>{b.service}</p>
          <p>{b.date} - {b.time}</p>
          <p>Status: {b.status}</p>

          <button onClick={() => updateStatus(b.id, "Confirmed")}>
            Confirm
          </button>

          <button onClick={() => updateStatus(b.id, "Cancelled")}>
            Cancel
          </button>

          <button onClick={() => deleteBooking(b.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}