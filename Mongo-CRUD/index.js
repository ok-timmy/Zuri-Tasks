const express = require("express");
const { json} = require("express");
// const flights = require("./controllers/flightController");
// const models = require("./models/Flight");
const routes = require("./Routes/todoRoutes");
const connectDB = require('./db');
require('dotenv').config();
const {PORT} = process.env

connectDB();

const app = express();

app.use(json({extended: false}));

app.use("/", routes);

const port = process.env.PORT || PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
