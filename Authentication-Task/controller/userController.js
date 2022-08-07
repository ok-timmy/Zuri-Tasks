const User = require("../models/User");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrpyt = require("bcryptjs");
require("dotenv").config();
const { SECRET } = process.env;

exports.getLoggedInUser = async(req, res)=> {
    try {
        // Get User From DB
        const user = await User.findById(req.body.id).select("-password");

        // return User
        res.json({
            statusCode: 200,
            message: "User Gotten Successfully!"
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error!');
    }
}

exports.loginUser = async (req, res) => {
  // Check For errors

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    // Destructure Body
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ statusCode: 400, message: "Invalid Credentials" });
      } else {
        //Check password
        const isMatch = await bcrpyt.compare(password, user.password);
        if (isMatch) {
          res.status(400).json({
            statusCode: 400,
            message: "Incorrect Password",
          });
        } else {
          //There is a match so send token
          const payload = {
            user: {
              id: user.id,
            },
          };

          jwt.sign(payload, SECRET, { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            return res.json({
              statusCode: 200,
              message: "User Logged In",
              user: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                userRole: user.userRole,
                isStaff: user.isStaff,
                isManager: user.isManager,
                isAdmin: user.isAdmin,
              },
              token
            });
          });
        }
      }
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Internal Server Error");
    }
  }
};

