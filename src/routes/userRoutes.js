import express from "express";
import { createUser, getUser, login } from "../controllers/userController.js";
import { protegerRuta, validateUserFields } from "../middleware/index.js";
const routerUser = express.Router();

routerUser.post("/createUser", protegerRuta, validateUserFields, createUser);
routerUser.get("/getUser", protegerRuta, getUser);
routerUser.post("/logIn", login);

export default routerUser;
