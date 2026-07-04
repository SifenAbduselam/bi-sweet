import express from "express";
import { supabase } from "../lib/supabase.js";
import { sendTelegramMessage } from "../services/telegramService.js";
const router = express.Router();
import { verifyAdmin } from "../middleware/authMiddleware.js";

// CREATE booking
router.post("/bookings", async (req, res) => {
  const { name, service, date, time } = req.body;

  const { error } = await supabase.from("bookings").insert([
    { name, service, date, time, status: "New" }
  ]);

  if (error) return res.status(500).json({ error });
 const text = `
📌 NEW BOOKING

Name: ${name}
Service: ${service}
Date: ${date}
Time: ${time}
`;

  await sendTelegramMessage(text);
  res.json({ success: true });
});

// GET bookings
router.get("/bookings", async (req, res) => {
  const { data, error } = await supabase.from("bookings").select("*");

  if (error) return res.status(500).json({ error });

  res.json(data);
});

// UPDATE status
router.patch("/bookings/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const { error } = await supabase
    .from("bookings")
    .update({ status })
    .eq("id", id);

  if (error) return res.status(500).json({ error });

  res.json({ success: true });
});

// DELETE booking
router.delete("/bookings/:id", async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", id);

  if (error) return res.status(500).json({ error });

  res.json({ success: true });
});

export default router;