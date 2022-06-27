import Jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "Unauthorized"));
  }
  Jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) {
      return next(createError(401, "Token not valid!"));
    } else {
      req.user = user;
      next();
    }
  });
};

//Verify User
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id == req.params.id || req.user.isAdmin == 1) {
      next();
    } else {
      return next(createError(401, "Not authorized"));
    }
  });
};

//Verify isAdmin
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin == 1) {
      next();
    } else {
      return next(createError(401, "Not authorized"));
    }
  });
};

