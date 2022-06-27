import User from "../models/Users.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";
import Jwt from "jsonwebtoken";

// Register a new user
export const userRegister = async (req, res, next) => {
  const password = await bcrypt.hash(req.body.password, 10);
  try {
    const newUser = await new User({ ...req.body, password }).save();
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

//User login
export const userLogin = async (req, res, next) => {
  console.log(req.body.email);
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(createError(400, "Invalid email or password"));
    }
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return next(createError(400, "Invalid email or password"));
    }
    const token = Jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET);
    const { password, ...userWithoutPassword } = user.toObject();
    res.cookie('access_tone', token, {
      httpOnly: true,
    }).status(200).json(userWithoutPassword);
  } catch (error) {
    next(error);
  }
};
