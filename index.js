import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import roomRouter from "./routes/rooms.js";
import hotelRouter from "./routes/hotels.js";
import cookieParser from "cookie-parser";

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

//Cookie parser
app.use(cookieParser());

//Json Format for the response
app.use(express.json());

//Route & Middleware
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/hotel", hotelRouter);
app.use("/api/room", roomRouter);

app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error
  });
});

//Leasen Port
app.listen(8000, () => {
  dbConnet();
  console.log(`Server connected ${"http://localhost:8000"}`);
});
