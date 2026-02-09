import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import scholarshipRoutes from "./routes/scholarshipRoutes.js";

dotenv.config();
connectDB();

const app = express();

/* ===== Middlewares ===== */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ===== Public Routes ===== */
app.use("/api/scholarship", scholarshipRoutes);

/* ===== Admin Route Placeholder ===== */
app.get("/admin", (req, res) => {
  res.json({
    message: "Admin Panel API is active",
    status: "secured"
  });
});

/* ===== Health Check ===== */
app.get("/", (req, res) => {
  res.send("🎓 Student Admission Scholarship Eligibility System is running");
});

/* ===== Server Start ===== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
