import Room from "../models/Rooms.js";
import Hotel from "../models/Hotels.js";

//Create Room
export const createRoom = async (req, res, next) => {
  const hotelId = req.params.id;
  console.log(hotelId);
  const newRoom = new Room(req.body);
  try {
    const saveRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: saveRoom._id } });
    } catch (error) {
      next(error);
    }
    res.status(201).json(saveRoom);
  } catch (error) {
    next(error);
  }
};

//Update Room
export const updateRoom = async (req, res, next) => {
  const roomId = req.params.id;
  try {
    const updateRoom = await Room.findByIdAndUpdate(roomId, req.body);
    res.status(200).json(updateRoom);
  } catch (error) {
    next(error);
  }
};
//Delete Room
export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  try {
    const deleteRoom = await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(deleteRoom);
  } catch (error) {
    next(error);
  }
};
//Get Room
export const getRoom = async (req, res, next) => {
  const roomId = req.params.id;
  try {
    const getRoom = await Room.findById(roomId);
    res.status(200).json(getRoom);
  } catch (error) {
    next(error);
  }
};

//Get All Rooms

//Get Room
export const getRooms = async (req, res, next) => {
  try {
    const getRoom = await Room.find();
    res.status(200).json(getRoom);
  } catch (error) {
    next(error);
  }
};
