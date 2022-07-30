const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
}, {
    timestamps: true
});

module.exports = mongoose.model("Todos", todoSchema);

