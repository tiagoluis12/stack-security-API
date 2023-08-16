import express from "express";
const router = express.Router();

import controller from "../controllers/userController.js";
import authController from "../controllers/authController";

//READ - read all users
router.get("/", controller.getAll);
//create
router.post("/", controller.createUser);
// update
router.patch("/:id", controller.updateUserById);
// delete
router.delete("/:id", controller.deleteUserById);

//login
router.post("/login", authController.login);
export default router;
