const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const User = require("../Models/User");
const createToken = (id) => {
  return jwt.sign({ id }, "Timmy's Secret", {
    expiresIn: 60*60*24,
  });
};
//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    console.log(newUser);
    const user = await newUser.save();
    res.status(200).json(user);
    console.log("User Created Successfully!");
  } catch (error) {
    res.status(500).json(error.code);
    console.log(error);
    console.log("User Not Created!!");
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      console.log(user.email, req.body.password)
      const validUser = await bcrypt.compare(req.body.password, user.password);
      if (validUser) {
        console.log(user);
        console.log("User is found");
        const token = createToken(user._id);
        console.log(token);
        res.cookie("jwt", token, { httpOnly: true, maxAge: 1000 * 24 * 60 * 60 });
        console.log("cookie created!!")
        // res.send(token);
        const { password, ...userData} = user._doc
        res.status(200).json(userData);
      } else res.status(400).json("Wrong Credentials");
    } else res.status(400).json("User Does Not exist");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
