const express = require("express");
const { createuser, getUser } = require("../controllers/user.controller");
const router = express.Router();

router.post("/create", createuser);
router.post("/User", getUser);

module.exports = router;
