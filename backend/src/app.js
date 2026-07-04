import express from "express";
import cors from "cors";
import "dotenv/config";
import bookingRoutes from "./routes/bookingRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api", bookingRoutes);

app.use("/api", bookingRoutes);

export default app;