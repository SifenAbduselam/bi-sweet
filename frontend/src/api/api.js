const API_URL = "https://bi-sweet-backend.onrender.com/api";

export const api = {


  // GET ALL BOOKINGS
  async getBookings() {

    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No token found");
    }


    try {

      const res = await fetch(`${API_URL}/bookings`, {

        method: "GET",

        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }

      });



      const data = await res.json();


      if (!res.ok) {

        throw new Error(data.error || "Failed to get bookings");

      }


      return data;


    } catch(error) {

      console.error("Get bookings error:", error);

      throw error;

    }

  },







  // UPDATE BOOKING STATUS
  async updateBooking(id, status) {


    const token = localStorage.getItem("token");


    try {


      const res = await fetch(`${API_URL}/bookings/${id}`, {


        method: "PATCH",


        headers: {

          "Content-Type": "application/json",

          "Authorization": `Bearer ${token}`

        },


        body: JSON.stringify({

          status

        })


      });





      const data = await res.json();



      if(!res.ok){

        throw new Error(
          data.error || "Failed to update booking"
        );

      }



      return data;



    } catch(error){


      console.error(
        "Update booking error:",
        error
      );


      throw error;


    }

  },








  // DELETE BOOKING
  async deleteBooking(id) {


    const token = localStorage.getItem("token");



    try {


      const res = await fetch(`${API_URL}/bookings/${id}`, {


        method:"DELETE",


        headers:{


          "Authorization": `Bearer ${token}`


        }


      });





      const data = await res.json();




      if(!res.ok){

        throw new Error(
          data.error || "Failed to delete booking"
        );

      }




      return data;



    } catch(error){


      console.error(
        "Delete booking error:",
        error
      );


      throw error;


    }


  }


};