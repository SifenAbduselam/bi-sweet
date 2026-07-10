import express from "express";
import { supabase } from "../lib/supabase.js";
import { sendTelegramMessage } from "../services/telegramService.js";
import { verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();


// ===============================
// CREATE BOOKING
// ===============================
router.post("/bookings", async (req, res) => {

  const {
    customer_name,
    phone_number,
    dessert,
    size,
    quantity,
    pickup_date,
    pickup_time,
    telegram_username,
    notes
  } = req.body;


  const { data, error } = await supabase
    .from("bookings")
    .insert([
      {
        customer_name,
        phone_number,
        dessert,
        size,
        quantity,
        pickup_date,
        pickup_time,
        telegram_username,
        notes,
        status: "Pending"
      }
    ])
    .select();


  if (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }



  const message = `
🍰 NEW BOOKING

👤 Name:
${customer_name}

📞 Phone:
${phone_number}

🍮 Dessert:
${dessert}

📦 Size:
${size}

🔢 Quantity:
${quantity}

📅 Pickup Date:
${pickup_date}

🕒 Pickup Time:
${pickup_time}

💬 Telegram:
${telegram_username || "Not provided"}

📝 Notes:
${notes || "No notes"}
`;


  await sendTelegramMessage(message);



  res.json({
    success: true,
    booking: data[0]
  });

});




// ===============================
// GET ALL BOOKINGS
// ===============================
router.get("/bookings", verifyAdmin, async (req, res) => {


  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .order("created_at", { ascending: false });



  if (error) {
    return res.status(500).json({
      error: error.message
    });
  }


  res.json(data);

});




// ===============================
// UPDATE STATUS
// ===============================
router.patch("/bookings/:id", verifyAdmin, async (req, res) => {


  const { id } = req.params;

  const { status } = req.body;



  const { error } = await supabase
    .from("bookings")
    .update({ status })
    .eq("id", id);



  if (error) {

    return res.status(500).json({
      error: error.message
    });

  }



  res.json({
    success:true
  });


});




// ===============================
// DELETE BOOKING
// ===============================
router.delete("/bookings/:id", verifyAdmin, async (req,res)=>{


  const { id } = req.params;



  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", id);



  if(error){

    return res.status(500).json({
      error:error.message
    });

  }



  res.json({
    success:true
  });


});



export default router;