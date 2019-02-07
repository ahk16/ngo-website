const express = require('express');
const app = express();

const { mongoose } = require('./config/db');

const { eventsController } = require('./app/controllers/events_controller'); 
const { bloodInfoController } = require('./app/controllers/blood_intimation_controller');
const { scribeInfoController } = require('./app/controllers/scribe_intimation_controller');
const { usersController } = require('./app/controllers/users_controller');
const { donorsController } = require('./app/controllers/donations_controller');


const port = 3001;

app.use(express.json());

// app.get('/', function(req, res) {
//     res.redirect('localhost:3000/');
// })
app.use('/event', eventsController);

app.use('/bloodIntimation', bloodInfoController);

app.use('/scribeIntimation', scribeInfoController);

app.use('/user', usersController);

app.use('/donor', donorsController);





app.listen(port, function() {
    console.log('Listening on port', port);
})