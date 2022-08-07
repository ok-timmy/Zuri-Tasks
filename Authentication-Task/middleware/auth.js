// Check to see if there is a token and header
const { header } = require("express-validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { SECRET } = process.env;

module.exports = (req, res, next) => {
  // Get Token from Header

  const token = req.header("x-auth-token");

  // Check If token does not exist
  if (!token) {
    return res
      .status(401)
      .json({ statusCode: 401, message: "No Token, authorization denied" });
  } else {
    //If token exist
    try {
      const decoded = jwt.verify(token, SECRET);
      //Assign User
      req.user = decoded.user;
      next();
    } catch (error) {
      res.status(401).json({ statusCode: 401, message: "Token Is Not Valid" });
    }
  }
};
