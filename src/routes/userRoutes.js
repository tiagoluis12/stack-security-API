import express from "express";
const router = express.Router();

import controller from "../controllers/userController.js";

//READ - read all users
router.get("/", controller.getAll);
router.post("/", controller.createUser);

export default router;
