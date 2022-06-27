import express from 'express';
import { updateUser,deleteUser } from '../controllers/userController.js';
const router = express.Router();

//User Update
router.put("/:id", updateUser);

//User Delete
router.delete("/:id", deleteUser);

export default router;