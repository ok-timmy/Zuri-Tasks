const express = require('express');
const router = express.Router();
const {check} = require("express-validator")
const userController = require("../controller/userController");
const auth = require('../middleware/auth');

router.post("/api/auth/login", [
    check("email", "Please Enter A Valid email").isEmail(),
    check("password", "A Valid Password Is Required").exists()
], userController.loginUser);

router.get("/api/auth", auth, userController.getLoggedInUser)


module.exports = router;