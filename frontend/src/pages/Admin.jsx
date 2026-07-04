import { useEffect, useState } from "react";

export default function Admin() {
  const [bookings, setBookings] = useState([]);
  const token = localStorage.getItem("token");

  async function fetchBookings() {
    const res = await fetch("http://localhost:3000/api/bookings");
    const data = await res.json();
    setBookings(data);
  }

  useEffect(() => {
    fetchBookings();
  }, []);

  async function updateStatus(id, status) {
    await fetch(`http://localhost:3000/api/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });

    fetchBookings();
  }

async function deleteBooking(id) {
  await fetch(`http://localhost:3000/api/bookings/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

    fetchBookings();
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Admin Dashboard</h1>

      {bookings.map((b) => (
        <div key={b.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
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