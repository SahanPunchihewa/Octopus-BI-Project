const express = require("express");
const router = express.Router();

const hobbyController = require("../controller/hobby.controller");

router.post("/", hobbyController.create);


module.exports = router