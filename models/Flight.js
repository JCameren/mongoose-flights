const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema(
  {
    airport: {
      type: String,
      enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
      required: true,
    },
    arrival: { type: Date },
  },
  {
    timestamps: true,
  }
);

const flightSchema = new Schema({
  airline: { type: String, enum: ["American", "Southwest", "United"] },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN",
  },
  flightNo: { type: Number },
  departs: {
    type: Date,
    default: function () {
      return new Date().setFullYear(new Date().getFullYear() + 1);
    },
  },
  destinations: [destinationSchema]
});

module.exports = mongoose.model("Flight", flightSchema);
