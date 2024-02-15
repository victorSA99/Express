import express from "express";
import { createUser, getUser, login } from "../controllers/userController.js";
import protegerRuta from "../middleware/auth.js";
const router = express.Router();

router.post("/createUser", protegerRuta, createUser);
router.get("/getUser", protegerRuta, getUser);
router.post("/logIn", login);

export default router;
