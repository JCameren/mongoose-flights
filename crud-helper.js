require("dotenv").config();
require("./config/database");

const Flight = require("./models/Flight");
const Ticket = require("./models/Ticket");

let flight, flights;
let ticket, tickets;

Flight.find({}).then(console.log);
console.log("Time to CRUD!");
