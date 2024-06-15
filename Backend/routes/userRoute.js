import express from "express";
import {
  register,
  login,
  logout,
  getOtherUsers,
} from "../controllers/userController.js";

const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/login").post(logout);
router.route("/login").post(getOtherUsers);
export default router;
