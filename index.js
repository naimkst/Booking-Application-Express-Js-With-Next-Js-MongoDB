import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import roomRouter from "./routes/rooms.js";
import hotelRouter from "./routes/hotels.js";

// Load environment variables from .env file
dotenv.config();

//User Express
const app = express();

// Connect to MongoDB
const dbConnet = async () => {
  try {
    const dbconnet = await mongoose.connect(process.env.DATABASE_URL);
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(error);
  }
};

//Json Format for the response
app.use(express.json());

//Route & Middleware
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/hotel", hotelRouter);
app.use("/api/room", roomRouter);

//Leasen Port
app.listen(8000, () => {
  dbConnet();
  console.log(`Server connected ${"http://localhost:8000"}`);
});
