import express from "express";
import { createUser, getUser } from "../controllers/userController.js";
const router = express.Router();

router.post("/createUser", createUser);
router.get("/getUser", getUser);

export default router;
