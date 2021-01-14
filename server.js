// REQUIRE EXPRESS
const express = require("express");

// CREATE AN INSTANCE OF EXPRESS
const app = express();

// CREATE A PORT FOR THE APP TO RUN
// BUT ALSO LISTEN TO ENVIRONMENT VARIABLES SO WE CAN DEPLOY TO HEROKU
const PORT = process.env.PORT || 8080;

// ADD MIDDLEWARE
// COPY/PASTE FROM STAR WARS APP
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CREATE AN ARRAY OF TABLES
// CREATE AN ARRAY FOR WAITLIST

// ARRAYS OF OBJECTS. OBJECTS SHOULD HAVE
// NAME
// PHONE
// EMAIL
// ID

// HTML ROUTES
// ROUTE FOR HOME

// ROUTE FOR TABLES

// ROUTE FOR RESERVE

// API ROUTES

// GET ALL TABLE DATA

// CREATE A TABLE/RESERVATION

// LISTEN ON THE PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
