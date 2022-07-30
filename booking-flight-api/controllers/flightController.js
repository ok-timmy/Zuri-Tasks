const Flight = require("../models/Flight");


// Get All Flights
exports.allFlight = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
    console.log("Got all Flights!");
  } catch (error) {
    console.log(error);
  }
};

//Get Single Flight
exports.singleFlight = async (req, res) => {
  const { id } = req.params;
  try {
    const flight = await Flight.findById(id);
    console.log("Flight Found Successfully!");
    // console.log(post)
    res.status(200).json(flight);
  } catch (error) {
    console.log(error);
  }
};

// Create New Flight
exports.newFlight = async (req, res) => {
  const { title, time, price, date } = req.body;
  try {
    const newFlight = new Flight({
      title,
      time,
      price,
      date,
    });

    const flight = await newFlight.save();
    console.log("Flight was Created Successfully!!");
    res.status(200).json(flight);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};

//Update Flight
exports.updateFlight = async (req, res) => {
  const { title, time, price, date } = req.body;
  try {
    const updatedFlight = await Flight.findByIdAndUpdate(
      {_id : req.params.id },
      {
        $set: {
          title,
          time,
          price,
          date,
        },
      },
      {
        new: true,
      }
    );
    console.log("Flight Updated Successfully!!");
    res.status(200).json(updatedFlight);
  } catch (error) {
    console.log(error);
  }
};

//Delete Flight
exports.deleteFlight = async(req, res) => {
  try {
    await Flight.findByIdAndDelete( req.params.id );
   console.log("Flight Deleted Successfully!");
   res.status(200).json("deleted successfully");
 } catch (error) {
   console.log(error);
 }
};
