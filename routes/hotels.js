import e from "express";
import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getByIdHotel,
  getHotels,
  countByCity,
  countByType
} from "../controllers/hotelController.js";
import { verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//Create a new hotel
router.post("/", verifyUser, createHotel);

//Update a hotel
router.put("/update/:id", verifyUser, updateHotel);

//Delete a hotel
router.delete("/:id", verifyUser, deleteHotel);

//Get a hotel
router.get("/find/:id", getByIdHotel);

//Get all hotels
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
