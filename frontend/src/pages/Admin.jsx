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

  }, []);



  async function fetchBookings(){

    try{

      setLoading(true);

      const data = await api.getBookings();

      if(Array.isArray(data)){
        setBookings(data);
      }
      else{
        setError(data.error);
      }

    }
    catch(err){

      setError("Failed to load bookings");

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
    catch(err){

      alert("Update failed");

    }

  }




  async function deleteBooking(id){

    if(!window.confirm("Delete booking?")) return;


    try{

      await api.deleteBooking(id);

      fetchBookings();

    }
    catch(err){

      alert("Delete failed");

    }

  }





  function logout(){

    localStorage.removeItem("token");

    navigate("/admin/login");

  }





  if(loading){

    return (

      <div className="min-h-screen flex items-center justify-center">

        Loading 🍰

      </div>

    );

  }





  return (

<div className="min-h-screen bg-[#F5E0E3]">



{/* HEADER */}

<div className="bg-[#8B4A5A] text-white p-5">

<div className="max-w-7xl mx-auto flex justify-between items-center">

<div>

<h1 className="text-2xl font-bold">
Admin Dashboard
</h1>

<p className="text-sm opacity-70">
Bi-Sweet Desserts
</p>

</div>



<button

onClick={logout}

className="bg-white text-[#8B4A5A] px-4 py-2 rounded-lg text-sm font-semibold"

>

Logout

</button>


</div>

</div>







<div className="max-w-7xl mx-auto p-5">



{/* STATS */}

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">


<div className="bg-white p-4 rounded-xl shadow">

<p className="text-gray-500 text-sm">
Total
</p>

<h2 className="text-2xl font-bold text-[#8B4A5A]">
{bookings.length}
</h2>

</div>




<div className="bg-white p-4 rounded-xl shadow">

<p className="text-gray-500 text-sm">
Pending
</p>

<h2 className="text-2xl font-bold text-yellow-600">

{
bookings.filter(
b=>b.status==="Pending"
).length
}

</h2>

</div>




<div className="bg-white p-4 rounded-xl shadow">

<p className="text-gray-500 text-sm">
Confirmed
</p>

<h2 className="text-2xl font-bold text-green-600">

{
bookings.filter(
b=>b.status==="Confirmed"
).length
}

</h2>

</div>




<div className="bg-white p-4 rounded-xl shadow">

<p className="text-gray-500 text-sm">
Completed
</p>

<h2 className="text-2xl font-bold text-blue-600">

{
bookings.filter(
b=>b.status==="Completed"
).length
}

</h2>

</div>


</div>







{/* BOOKING CARDS */}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">


{

bookings.map((b)=>(


<div

key={b.id}

className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition"

>




<div className="flex justify-between items-start mb-3">


<h3 className="font-bold text-lg">

{b.customer_name}

</h3>



<span

className={`text-xs px-2 py-1 rounded-full font-semibold

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







<div className="text-sm text-gray-600 space-y-1">


<p>
📞 {b.phone_number}
</p>


<p>
🍰 {b.dessert}
</p>


<p>
📏 {b.size}
</p>


<p>
🔢 Qty: {b.quantity}
</p>


<p>
📅 {b.pickup_date}
</p>


<p>
⏰ {b.pickup_time}
</p>



{
b.notes &&
<p>
📝 {b.notes}
</p>
}



</div>







<div className="flex gap-2 mt-5 flex-wrap">


<button

onClick={()=>updateStatus(b.id,"Confirmed")}

className="text-xs bg-green-500 text-white px-3 py-2 rounded-md"

>

Confirm

</button>





<button

onClick={()=>updateStatus(b.id,"Completed")}

className="text-xs bg-blue-500 text-white px-3 py-2 rounded-md"

>

Done

</button>





<button

onClick={()=>updateStatus(b.id,"Cancelled")}

className="text-xs bg-red-500 text-white px-3 py-2 rounded-md"

>

Cancel

</button>





<button

onClick={()=>deleteBooking(b.id)}

className="text-xs bg-[#8B4A5A] text-white px-3 py-2 rounded-md"

>

Delete

</button>



</div>



</div>


))


}



</div>





</div>


</div>


  );

}