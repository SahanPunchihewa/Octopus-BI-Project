const express = require("express");
const router = express.Router();

const userController = require("../controller/user.controller");

router.post("/register", userController.create);
router.get("/", userController.getAll);
router.get("/:id",userController.getById);
router.put("/:id",userController.update);
router.delete("/:id", userController.delete);
router.post("/login", userController.login);




module.exports = router