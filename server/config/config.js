'use strict'

const mongoose = require('mongoose');

module.exports = {
    'database': 'mongodb://localhost:27017/tutorials_db',

    // connect function to create a mongoDB connection
    'connectDB': function () {
        mongoose.connect(this.database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    },
}
// on mongo connection open event print a console statement
mongoose.connection.on('open', function () {
    console.log('Connected to Database (MongoDB) ');
})