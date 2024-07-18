// Import express and other necessary modules
const express = require("express");
const bodyParser = require("body-parser");

// Create an express app
const app = express();

var items = [];

// Middleware for parsing JSON, without this function, bodyparser.
// This is a key aspect of the express library
// https://github.com/express-js/body-parser
app.use(bodyParser.json());

app.get("/", (function(req, res) {
  res.send("Hello, world!");
});

// Get the list of todo items.
app.get("/items", (function(req, res) {
  res.send(items);
});
// Add a new todo item.
app.post("/items", function(req, res) {
  const item = req.body;
  items.push(item);
  res.send(item);
});

/**
 * Creates a port for listening to requests.
 */
var SPORT_PORT = 3000;


let server = app.listen(SPORT_PORT, () => {
  console.log('Server is listening on port '+SPORT_PORT);
});

server.detach(function() {
  console.log('Server is closing.');
  server.connection.refuse(function() {
    console.log('Connection refused.');
  });
});