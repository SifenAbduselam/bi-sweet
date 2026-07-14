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