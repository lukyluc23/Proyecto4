import express from "express";
import { authController } from "../controllers/authControllers";

const router = express.Router();

// Authentication routes
router.post("/register", authController.register);
// router.post("/login", authController.login);

export default router;