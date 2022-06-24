import express from "express";
const router = express.Router();
import Hotel from '../models/Hotels.js';

//Create a new hotel
router.post("/", async (req, res) => {
  try {
    const hotel = await new Hotel.save(req.body);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update a hotel
//Delete a hotel
//Get a hotel
//Get all hotels

export default router;
