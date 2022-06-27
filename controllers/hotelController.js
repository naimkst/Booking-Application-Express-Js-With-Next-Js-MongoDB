import Hotel from "../models/Hotels.js";

//Create Hotel
export const createHotel = async (req, res, next) => {
  try {
    const hotel = await new Hotel(req.body).save();
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

//Update Hotel
export const updateHotel = async (req, res, next) => {
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
    next(error);
  }
};

//Delete Hotel
export const deleteHotel = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json(updateHotel);
  } catch (error) {
    next(error);
  }
};

//Get Hotel By ID
export const getByIdHotel = async (req, res, next) => {
  try {
    const getHotel = await Hotel.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (error) {
    next(error);
  }
};

//Get All Hotels
export const getHotels = async (req, res, next) => {
  try {
    const getHotels = await Hotel.find();
    res.status(200).json(getHotels);
  } catch (error) {
    next(error);
  }
};
