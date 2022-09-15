// app.use() Method Demo Example

// Importing the express module
const express = require('express');

// Initializing the express and port number
var app = express();

// Initializing the router from express
var router = express.Router();
var PORT = 3001;

// This method will call the next() middleware
app.use('/api', function (req, res, nex) {
   console.log('Time for main function: %d', Date.now())
   next();
})

// Will be called after the middleware
app.get('/api', function (req, res,next) {
   console.log('Time for middleware function: %d', Date.now())
   res.write('Welcome to Tutorials Point')
   next();
})

app.get('/api', function (req, res,next) {
   console.log('Time for middleware function: %d', Date.now())
   res.write('Welcome to Tutorials Point')
   res.send()
   next();
})

app.post('/api', function (req, res) {
   console.log('Time for middleware function: %d', Date.now())
   res.write('Post request')
   res.send()
})
app.use('/api', function (req, res, next) {
   console.log(' %d', Date.now())
   next();
})


// App listening on the below port
app.listen(PORT, function(err){
   if (err) console.log(err);
   console.log("Server listening on PORT", PORT);
});