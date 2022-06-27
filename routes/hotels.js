import e from "express";
import express from "express";
const router = express.Router();
import Hotel from "../models/Hotels.js";

//Create a new hotel
router.post("/", async (req, res) => {
  try {
    const hotel = await new Hotel(req.body).save();
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update a hotel
router.put('/update/:id', async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
      }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Delete a hotel
router.delete('/:id', async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndDelete(
      req.params.id,
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});
//Get a hotel
router.get('/:id', async (req, res) => {
  try {
    const getHotel = await Hotel.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (error) {
    res.status(400).json(error);
  }
})
//Get all hotels
router.get('/', async (req, res) => {
  try {
    const getHotels = await Hotel.find();
    res.status(200).json(getHotels);
  } catch (error) {
    res.status(400).json(error);
  }
});

export default router;
