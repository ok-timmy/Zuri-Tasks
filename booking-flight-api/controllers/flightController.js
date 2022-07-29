const flights = require("../flights.json");
const fs = require('fs');

exports.example = (req, res) => {
  console.log("example");
  res.send("Flight example");
};

exports.allFlight = (req, res) => {
  res.send(
    flights
  );
};

exports.singleFlight = (req, res) => {
  const id = req.params.id;
  const singleFlight = flights.find(flight => flight.id == id);
  res.send(singleFlight);
};

exports.newFlight = (req, res) => {
    const newFlight = req.body;
    const newFlights = flights.push({...newFlight.title});
    // console.log(flights);
    // console.log(newFlight);
    console.log(newFlights);
    fs.writeFile('../flights.json', JSON.stringify(newFlights), (error)=> {
        console.log(error)
    });
    res.send("This flight has been created!");
}

exports.updateFlight = (req, res) => {

}

exports.deleteFlight = (req, res) => {
    
}
