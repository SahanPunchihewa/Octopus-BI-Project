const express = require("express");
const router = express.Router();

const hobbyController = require("../controller/hobby.controller");

router.post("/create", hobbyController.create);
router.get("/", hobbyController.getAll);
router.get("/:id", hobbyController.getById)
router.put("/:id", hobbyController.update)
router.delete("/:id", hobbyController.delete)



module.exports = router