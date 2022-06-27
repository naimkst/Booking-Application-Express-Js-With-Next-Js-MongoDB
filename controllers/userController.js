import User from "../models/Users.js";
import { createError } from "../utils/error.js";

//Update user
export const updateUser = async (req, res, next)=> {
  try {
    const updateuser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    const {password, ...userWithoutPassword} = updateuser.toObject();
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    next(error);
  }
}

//Delete User
export const deleteUser = async (req, res, next) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    next(createError(200, deleteUser));
  } catch (error) {
    next(error);
  }
}