const BASE_URL = "http://localhost:3000/api";

// helper to get token
function getToken() {
  return localStorage.getItem("token");
}

// generic request function
async function request(endpoint, options = {}) {
  const res = await fetch(BASE_URL + endpoint, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken() ? `Bearer ${getToken()}` : "",
      ...options.headers,
    },
  });

  return res.json();
}

// API functions
export const api = {
  login: (data) =>
    request("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  getBookings: () => request("/bookings"),

  createBooking: (data) =>
    request("/bookings", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  updateBooking: (id, status) =>
    request(`/bookings/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),

  deleteBooking: (id) =>
    request(`/bookings/${id}`, {
      method: "DELETE",
    }),
};