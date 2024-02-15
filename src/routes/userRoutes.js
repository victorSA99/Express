import express from "express";
import { createUser, getUser, login } from "../controllers/userController.js";
const router = express.Router();

router.post("/createUser", createUser);
router.get("/getUser", getUser);
router.post("/logIn", login);

export default router;
