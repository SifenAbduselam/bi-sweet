import { useState } from "react";
import { businessPresets } from "../data/businessPresets";

export default function Booking() {

  const { products } = businessPresets.bakery;

  const [form, setForm] = useState({
    customer_name: "",
    phone_number: "",
    dessert: "",
    size: "",
    quantity: "1",
    pickup_date: "",
    pickup_time: "",
    telegram_username: "",
    notes: "",
  });


  const [loading, setLoading] = useState(false);



  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  }




  async function handleSubmit(e) {

    e.preventDefault();

    setLoading(true);


    try {

      const response = await fetch(
        "http://localhost:3000/api/bookings",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(form),
        }
      );


      const data = await response.json();



      if(data.success){

        alert("Booking submitted successfully 🍰");


        setForm({
          customer_name: "",
          phone_number: "",
          dessert: "",
          size: "",
          quantity: "1",
          pickup_date: "",
          pickup_time: "",
          telegram_username: "",
          notes: "",
        });

      }
      else{

        alert(
          "Booking failed: " + data.error
        );

      }



    }
    catch(error){

      console.error(error);

      alert(
        "Something went wrong. Try again."
      );

    }
    finally{

      setLoading(false);

    }

  }





  const selectedDessert = products.find(
    (p)=> p.name === form.dessert
  );



  return (

<section className="min-h-screen bg-gradient-to-br from-[#FFFBF7] via-[#FFF5F1] to-[#FFE8E0] py-32 px-4">


<div className="max-w-2xl mx-auto">


{/* Header */}

<div className="text-center mb-16">


<div className="inline-flex items-center gap-2 mb-6">

<span className="w-10 h-px bg-[#8B4A5A]/40"/>

<p className="text-[#8B4A5A] text-xs uppercase tracking-[0.3em]">
Place Your Order
</p>

<span className="w-10 h-px bg-[#8B4A5A]/40"/>

</div>



<h1 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-4">
Book a Dessert
</h1>


<p className="text-gray-600 font-light">
Fill out the form and we will prepare your order with love
</p>


</div>






<div className="bg-white rounded-sm shadow-sm p-10 md:p-12">


<form 
onSubmit={handleSubmit}
className="space-y-8"
>




{/* Name */}

<div>

<label className="block text-gray-700 text-sm uppercase mb-3">
Your Name
</label>


<input

name="customer_name"

value={form.customer_name}

onChange={handleChange}

placeholder="Enter your name"

className="w-full px-0 py-4 border-b border-gray-300 focus:outline-none focus:border-[#8B4A5A]"

required

/>

</div>






{/* Phone */}

<div>

<label className="block text-gray-700 text-sm uppercase mb-3">
Phone Number
</label>


<input

name="phone_number"

value={form.phone_number}

onChange={handleChange}

placeholder="09xxxxxxxx"

className="w-full px-0 py-4 border-b border-gray-300 focus:outline-none focus:border-[#8B4A5A]"

required

/>

</div>







{/* Dessert */}

<div>

<label className="block text-gray-700 text-sm uppercase mb-3">
Choose Dessert
</label>


<select

name="dessert"

value={form.dessert}

onChange={handleChange}

className="w-full py-4 border-b border-gray-300 bg-transparent"

required

>


<option value="">
Select dessert
</option>


{
products.map(product=>(

<option 
key={product.id}
value={product.name}
>

{product.name}

</option>

))
}


</select>

</div>








{/* Size */}

<div>

<label className="block text-gray-700 text-sm uppercase mb-3">
Choose Size
</label>


<select

name="size"

value={form.size}

onChange={handleChange}

className="w-full py-4 border-b border-gray-300 bg-transparent"

required

>


<option value="">
Select size
</option>


<option value="Small">
Small
</option>


<option value="Large">
Large
</option>


</select>


</div>








{/* Quantity */}

<div>

<label className="block text-gray-700 text-sm uppercase mb-3">
Quantity
</label>


<select

name="quantity"

value={form.quantity}

onChange={handleChange}

className="w-full py-4 border-b border-gray-300 bg-transparent"

>


{
[1,2,3,4,5].map(num=>(

<option key={num} value={num}>
{num}
</option>

))
}


</select>


</div>









{/* Date and Time */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">


<div>

<label className="block text-gray-700 text-sm uppercase mb-3">
Pickup Date
</label>


<input

type="date"

name="pickup_date"

value={form.pickup_date}

onChange={handleChange}

className="w-full py-4 border-b border-gray-300"

required

/>


</div>





<div>

<label className="block text-gray-700 text-sm uppercase mb-3">
Pickup Time
</label>


<input

type="time"

name="pickup_time"

value={form.pickup_time}

onChange={handleChange}

className="w-full py-4 border-b border-gray-300"

required

/>


</div>


</div>








{/* Telegram */}

<div>

<label className="block text-gray-700 text-sm uppercase mb-3">
Telegram Username (Optional)
</label>


<input

name="telegram_username"

value={form.telegram_username}

onChange={handleChange}

placeholder="@username"

className="w-full py-4 border-b border-gray-300"

/>


</div>









{/* Notes */}

<div>

<label className="block text-gray-700 text-sm uppercase mb-3">
Notes (Optional)
</label>


<textarea

name="notes"

value={form.notes}

onChange={handleChange}

placeholder="Any special request?"

rows="4"

className="w-full border border-gray-300 p-3"

/>


</div>







<button

disabled={loading}

className="w-full bg-[#8B4A5A] hover:bg-[#723C4B] text-white py-4 uppercase tracking-widest"

>


{
loading 
? "Submitting..."
: "Confirm Booking"
}


</button>






</form>


</div>





</div>


</section>

  );

}