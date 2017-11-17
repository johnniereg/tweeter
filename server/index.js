"use strict";

// Basic express setup:

const PORT            = 8080;
const express         = require("express");
const bodyParser      = require("body-parser");
const sassMiddleware  = require("node-sass-middleware");
const path            = require("path");
const app             = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(sassMiddleware({
  src: "./public",
  debug: true,
  outputStyle: "compressed",
}));

app.use(express.static("public"));

// Define MongoDB connection parameters.
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

// Establishes connection to database.
MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  // Confirm server connection to "tweeter" database.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  // Provides an interface to the database of tweets. Passing in database.
  const DataHelpers = require("./lib/data-helpers.js")(db);

  // Defines routes that are used to interact with the data layer.
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  // Mount the tweets routes at the "/tweets" path prefix:
  app.use("/tweets", tweetsRoutes);

});

app.listen(PORT, () => {
  console.log("Tweeter is listening on port " + PORT);
});
