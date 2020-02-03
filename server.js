require('dotenv').config()
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const flash = require("connect-flash");
const session = require("express-session");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express Session
app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true,
}));

// Connect flash
app.use(flash());

// Global Vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
})

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("react-portfolio/build"));
}

// If deployed, use the deployed database. Otherwise use the local mongoSoap Database
const MONGODB_URI = process.env.MONGODB_URI
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }); 

// Define API routes here
app.use(routes);


// Send every other request to the React app
// Define any API routes before this runs

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./react-portfolio/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
