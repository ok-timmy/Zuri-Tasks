const express = require("express");
const { json, urlencoded } = require("express");
// const flights = require("./controllers/flightController");
// const models = require("./models/Flight");
const routes = require("./routes/flightRoute");

const app = express();

app.use(json());
app.use(urlencoded());

app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
