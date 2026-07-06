// src/api/api.js
const API_URL = "http://localhost:3000/api";

export const api = {
  async getBookings() {
    const token = localStorage.getItem("token");
    
    if (!token) {
      throw new Error("No token found");
    }

    try {
      const res = await fetch(`${API_URL}/bookings`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      // Check if response is OK
      if (!res.ok) {
        const errorData = await res.json();
        return errorData; // Return the error object
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("API Error:", error);
      return { error: "Failed to connect to server" };
    }
  },

  async updateBooking(id, status) {
    const token = localStorage.getItem("token");
    
    try {
      const res = await fetch(`${API_URL}/bookings/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to update");
      }

      return await res.json();
    } catch (error) {
      console.error("Update Error:", error);
      throw error;
    }
  },

  async deleteBooking(id) {
    const token = localStorage.getItem("token");
    
    try {
      const res = await fetch(`${API_URL}/bookings/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to delete");
      }

      return await res.json();
    } catch (error) {
      console.error("Delete Error:", error);
      throw error;
    }
  }
}; 