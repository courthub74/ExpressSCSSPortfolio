// NOW set up the server

// import express library
const express = require('express');

// instantiate the express app
const app = express();

// set up the port
const port = 8000;

// MIDDLEWARE
// app.use(express.urlencoded());
app.use(express.static('public'));

// ROUTES

// Main Page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/views/home/index.html')
});

// create the server
    // tell app to listen
    // pass in the port at which you want the server to run
        // log a message to the console that the server is running
app.listen(port, () => {
    console.log(`Success! Your app is running on port ${port}`)
});