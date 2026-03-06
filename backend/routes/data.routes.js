const express = require("express");
const router = express.Router();

const userController = require("../controller/data.controller");

// Get all user
router.get("/", userController.getAllUser);

// Get user by id
router.get("/:id", userController.getUserById);

// Create user
router.post("/", userController.createUser);

// Update user
router.put("/:id", userController.updateUser);

// Delete user
router.delete("/:id", userController.deleteUser);


module.exports = router;
