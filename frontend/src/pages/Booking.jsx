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



  function handleChange(e){

    setForm({

      ...form,
      [e.target.name]: e.target.value,

    });

  }



  // CHECK ORDERING HOURS
  function isOrderingOpen(){

    const now = new Date();

    const currentHour = now.getHours();

 console.log("Current Date:", now);
  console.log("Current Hour:", currentHour);
    const openingHour = 8; 
    const closingHour = 16;


    return currentHour >= openingHour && currentHour < closingHour;

  }





  function validateForm(){

    const name = form.customer_name.trim();


    if(name.length < 3){

      alert("Please enter a valid name / እባክዎ ትክክለኛ ስም ያስገቡ");

      return false;

    }



    if(!/^09\d{8}$/.test(form.phone_number)){


      alert(
        "Please enter Ethiopian phone number (09xxxxxxxx)"
      );


      return false;

    }



    if(!form.dessert){

      alert("Please select dessert / እባክዎ ጣፋጭ ምግብ ይምረጡ");

      return false;

    }



    if(!form.size){

      alert("Please select size");

      return false;

    }



    if(!form.pickup_date){

      alert("Please select delivery date");

      return false;

    }



    if(!form.pickup_time){

      alert("Please select preferred delivery time");

      return false;

    }



    return true;

  }





  async function handleSubmit(e){

    e.preventDefault();



    if(!isOrderingOpen()){


      alert(
        "Orders are closed now. Please order between 8:00 AM - 4:00 PM.\n\n" +
        "ትዕዛዝ የሚቀበለው ከጠዋቱ 8:00 - ከሰዓቱ 4:00 ብቻ ነው።"
      );


      return;

    }



    if(!validateForm()){

      return;

    }



    setLoading(true);



    try{


      const response = await fetch(

        "https://bi-sweet-backend.onrender.com/api/bookings",

        {

          method:"POST",

          headers:{

            "Content-Type":"application/json",

          },


          body:JSON.stringify(form),

        }

      );



      const data = await response.json();




      if(data.success){


        alert(
          "Booking submitted successfully 🍰\nትዕዛዝዎ ተልኳል"
        );



        setForm({

          customer_name:"",
          phone_number:"",
          dessert:"",
          size:"",
          quantity:"1",
          pickup_date:"",
          pickup_time:"",
          telegram_username:"",
          notes:"",

        });



      }else{


        alert(
          "Booking failed: " + data.error
        );


      }



    }catch(error){


      console.error(error);


      alert(
        "Something went wrong. Please try again."
      );


    }finally{


      setLoading(false);


    }


  }


    return (

<section className="min-h-screen bg-gradient-to-br from-[#FFFBF7] via-[#FFF5F1] to-[#FFE8E0] py-32 px-4">


<div className="max-w-2xl mx-auto">



<div className="text-center mb-12">


<div className="bg-[#8B4A5A]/10 border border-[#8B4A5A]/20 p-6 rounded-sm mb-10">


<h2 className="text-2xl md:text-3xl font-bold text-[#8B4A5A] mb-3">

🍰 ORDERING HOURS  
<br/>

የትዕዛዝ መቀበያ ሰዓት

</h2>



<p className="text-gray-700 text-lg font-medium">

Orders are accepted from:

<br/>

<span className="font-bold">

8:00 AM - 4:00 PM

</span>


</p>



<p className="text-gray-600 mt-3">

ትዕዛዝ የሚቀበለው:

<br/>

<span className="font-bold">

ከጠዋቱ 8:00 - ከሰዓቱ 4:00

</span>


</p>


</div>





<div className="inline-flex items-center gap-2 mb-6">

<span className="w-10 h-px bg-[#8B4A5A]/40"/>


<p className="text-[#8B4A5A] text-xs uppercase tracking-[0.3em]">

Place Your Order

</p>


<span className="w-10 h-px bg-[#8B4A5A]/40"/>


</div>





<h1 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-4">

Book a Dessert

<br/>

ጣፋጭ ምግብ ይዘዙ

</h1>



<p className="text-gray-600 font-light">

Fill out the form and we will prepare your order with love.

<br/>

ቅጹን ይሙሉ እና ትዕዛዝዎን በፍቅር እናዘጋጃለን።

</p>



</div>







<div className="bg-white rounded-sm shadow-sm p-10 md:p-12">


<form 
onSubmit={handleSubmit}
className="space-y-8"
>



<div>


<label className="block text-gray-700 text-sm uppercase mb-3">

Your Name / ስምዎ

</label>



<input

name="customer_name"

value={form.customer_name}

onChange={handleChange}

placeholder="Enter your name / ስምዎን ያስገቡ"

className="w-full px-0 py-4 border-b border-gray-300 focus:outline-none focus:border-[#8B4A5A]"

/>


</div>







<div>


<label className="block text-gray-700 text-sm uppercase mb-3">

Phone Number / ስልክ ቁጥር

</label>



<input

type="tel"

name="phone_number"

value={form.phone_number}

onChange={handleChange}

placeholder="09xxxxxxxx"

maxLength="10"

className="w-full px-0 py-4 border-b border-gray-300 focus:outline-none focus:border-[#8B4A5A]"

/>


</div>






<div>


<label className="block text-gray-700 text-sm uppercase mb-3">

Choose Dessert / ጣፋጭ ምግብ ይምረጡ

</label>



<select

name="dessert"

value={form.dessert}

onChange={handleChange}

className="w-full py-4 border-b border-gray-300 bg-transparent"

>


<option value="">

Select dessert

</option>



{

products.map(product=>(

<option key={product.id} value={product.name}>

{product.name}

</option>

))

}



</select>


</div>







<div>


<label className="block text-gray-700 text-sm uppercase mb-3">

Size / መጠን

</label>



<select

name="size"

value={form.size}

onChange={handleChange}

className="w-full py-4 border-b border-gray-300 bg-transparent"

>


<option value="">

Select size

</option>


<option value="Small">

Small / ትንሽ

</option>


<option value="Large">

Large / ትልቅ

</option>


</select>


</div>







<div>


<label className="block text-gray-700 text-sm uppercase mb-3">

Quantity / ብዛት

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






<div className="grid grid-cols-1 md:grid-cols-2 gap-8">



<div>


<label className="block text-gray-700 text-sm uppercase mb-3">

Delivery Date / የማድረሻ ቀን

</label>



<input

type="date"

name="pickup_date"

value={form.pickup_date}

onChange={handleChange}

className="w-full py-4 border-b border-gray-300"

/>


</div>






<div>


<label className="block text-gray-700 text-sm uppercase mb-3">

Preferred Time / የሚመችዎ ሰዓት

</label>



<input

type="time"

name="pickup_time"

value={form.pickup_time}

onChange={handleChange}

className="w-full py-4 border-b border-gray-300"

/>


</div>


</div>







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







<div>


<label className="block text-gray-700 text-sm uppercase mb-3">

Notes / ተጨማሪ መረጃ

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

className="w-full bg-[#8B4A5A] hover:bg-[#723C4B] text-white py-4 uppercase tracking-widest disabled:opacity-50"

>


{

loading

?

"Submitting..."

:

"Confirm Booking / ትዕዛዝ ያረጋግጡ"

}



</button>




</form>


</div>


</div>


</section>


  );

}