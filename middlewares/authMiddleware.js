import JWT, { decode } from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Protected Routes token Base
export const requireSignIn = async (req, res, next) => {
  try {
    const deCode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = deCode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//admin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
        error,
      });
    } else {
      next();
      return res.status(401).send({
        success: false,
        message: "Error is admin middleware",
        error,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
