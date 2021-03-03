// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');

// Calling the express() and setting the PORT 
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware cod efor data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

// Requiring the route file
// saw in SlackOverflow tha this is similiar in creating a functuon to require and passing app as a param.
require('./routes/routes')(app);



app.listen(PORT, () => {
    console.log(`You are listening at http://localhost:${PORT}`);
});