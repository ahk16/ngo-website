const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost:27017/ngo-project', { useNewUrlParser: true}).then(function() {
    console.log('Connected to db');
}).catch(function(err) {
    console.log('Error connecting to db', err);
})

module.exports = {
    mongoose
}