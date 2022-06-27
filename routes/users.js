import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUsers,
} from "../controllers/userController.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//User Update
router.put("/:id", verifyUser, updateUser);

//User Delete
router.delete("/:id", verifyUser, deleteUser);

//get all users
router.get("/", verifyAdmin, getAllUsers);


export default router;
