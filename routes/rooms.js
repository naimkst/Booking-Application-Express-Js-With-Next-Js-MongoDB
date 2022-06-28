import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  updateRoom,
  getRooms,
} from "../controllers/roomController.js";
import { verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//Create a new Room
router.post("/:id", verifyUser, createRoom);

//Update a Room
router.put("/update/:id", verifyUser, updateRoom);

//Delete a Room
router.delete("/:id/:hotelId", verifyUser, deleteRoom);

//Get all Room
router.get("/", getRooms);

//Get One Room
router.get("/:id", getRoom);

export default router;
