import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";


export default function Admin() {

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();



  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/admin/login");
      return;
    }

    fetchBookings();

  }, [navigate]);





  async function fetchBookings(){

    try{

      setLoading(true);
      setError(null);


      const data = await api.getBookings();


      if(Array.isArray(data)){

        setBookings(data);

      }
      else{

        setError(data.error || "Failed to load bookings");

      }


    }
    catch(error){

      console.error(error);

      setError(
        "Cannot connect to server"
      );

    }
    finally{

      setLoading(false);

    }

  }







  async function updateStatus(id,status){

    try{

      await api.updateBooking(id,status);

      fetchBookings();

    }
    catch(error){

      console.error(error);

      alert("Failed to update status");

    }

  }






  async function deleteBooking(id){

    const confirmDelete = window.confirm(
      "Delete this booking?"
    );


    if(!confirmDelete) return;


    try{

      await api.deleteBooking(id);

      fetchBookings();

    }
    catch(error){

      console.error(error);

      alert("Failed to delete booking");

    }

  }






  function logout(){

    localStorage.removeItem("token");

    navigate("/admin/login");

  }








  if(loading){

    return(

      <div className="min-h-screen flex items-center justify-center bg-[#F5E0E3]">

        <div className="text-center">

          <div className="text-5xl animate-spin">
            🍰
          </div>

          <p className="mt-4 text-[#8B4A5A] font-semibold">
            Loading bookings...
          </p>

        </div>

      </div>

    );

  }







  if(error){

    return(

      <div className="min-h-screen flex items-center justify-center bg-[#F5E0E3]">

        <div className="bg-white p-8 rounded-xl shadow-xl text-center">

          <h2 className="text-2xl font-bold text-[#8B4A5A]">
            Error
          </h2>


          <p className="my-4 text-gray-600">
            {error}
          </p>


          <button

          onClick={()=>navigate("/admin/login")}

          className="bg-[#8B4A5A] text-white px-6 py-3 rounded-lg"

          >

            Login

          </button>


        </div>

      </div>

    );

  }








  return (

<div className="min-h-screen bg-gradient-to-br from-[#F5E0E3] to-[#E5C5CA]">



{/* HEADER */}

<div className="bg-[#8B4A5A] text-white p-6 shadow-lg">


<div className="max-w-7xl mx-auto flex justify-between items-center">


<div>

<h1 className="text-3xl font-bold">
Admin Dashboard
</h1>


<p className="text-white/70">
Bi-Sweet Desserts Management
</p>


</div>




<button

onClick={logout}

className="bg-white text-[#8B4A5A] px-6 py-2 rounded-full font-semibold"

>

Logout

</button>



</div>


</div>







<div className="max-w-7xl mx-auto p-6">





{/* STATS */}

<div className="grid md:grid-cols-4 gap-5 mb-8">


<div className="bg-white rounded-xl shadow p-5">

<p className="text-gray-500">
Total
</p>

<h2 className="text-3xl font-bold text-[#8B4A5A]">
{bookings.length}
</h2>

</div>





<div className="bg-white rounded-xl shadow p-5">

<p className="text-gray-500">
Pending
</p>

<h2 className="text-3xl font-bold text-yellow-600">

{
bookings.filter(
b=>b.status==="Pending"
).length
}

</h2>

</div>





<div className="bg-white rounded-xl shadow p-5">

<p className="text-gray-500">
Confirmed
</p>


<h2 className="text-3xl font-bold text-green-600">

{
bookings.filter(
b=>b.status==="Confirmed"
).length
}

</h2>

</div>





<div className="bg-white rounded-xl shadow p-5">

<p className="text-gray-500">
Completed
</p>


<h2 className="text-3xl font-bold text-blue-600">

{
bookings.filter(
b=>b.status==="Completed"
).length
}

</h2>


</div>


</div>









{/* BOOKINGS LIST */}


<div className="bg-white rounded-xl shadow overflow-hidden">


<div className="p-6 border-b">

<h2 className="text-2xl font-bold text-[#8B4A5A]">

All Bookings

</h2>


</div>






{

bookings.length===0 ?


<div className="p-10 text-center text-gray-500">

No bookings yet 🍰

</div>



:


<div className="divide-y">


{

bookings.map((b)=>(


<div

key={b.id}

className="p-6 hover:bg-gray-50"

>



<div className="flex flex-col lg:flex-row justify-between gap-6">





<div>


<div className="flex items-center gap-3">


<h3 className="text-xl font-bold">

{b.customer_name}

</h3>




<span

className={`px-3 py-1 rounded-full text-xs font-semibold

${
b.status==="Confirmed"

?"bg-green-100 text-green-700"

:

b.status==="Completed"

?"bg-blue-100 text-blue-700"

:

b.status==="Cancelled"

?"bg-red-100 text-red-700"

:

"bg-yellow-100 text-yellow-700"

}

`}

>

{b.status}

</span>


</div>





<div className="mt-4 space-y-1 text-gray-600">


<p>📞 {b.phone_number}</p>

<p>🍰 {b.dessert}</p>

<p>📏 Size: {b.size}</p>

<p>🔢 Quantity: {b.quantity}</p>

<p>📅 {b.pickup_date}</p>

<p>⏰ {b.pickup_time}</p>


{
b.telegram_username &&
<p>
💬 {b.telegram_username}
</p>
}



{
b.notes &&
<p>
📝 {b.notes}
</p>
}



</div>



</div>








<div className="flex flex-wrap gap-2">


<button

onClick={()=>updateStatus(b.id,"Confirmed")}

className="bg-green-500 text-white px-4 py-2 rounded-lg"

>

Confirm

</button>




<button

onClick={()=>updateStatus(b.id,"Completed")}

className="bg-blue-500 text-white px-4 py-2 rounded-lg"

>

Done

</button>




<button

onClick={()=>updateStatus(b.id,"Cancelled")}

className="bg-red-500 text-white px-4 py-2 rounded-lg"

>

Cancel

</button>




<button

onClick={()=>deleteBooking(b.id)}

className="bg-[#8B4A5A] text-white px-4 py-2 rounded-lg"

>

Delete

</button>



</div>





</div>


</div>


))


}


</div>


}


</div>






</div>


</div>

  );

}