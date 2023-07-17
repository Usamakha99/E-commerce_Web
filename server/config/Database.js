const mongoose = require("mongoose")
exports.connect = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017', {useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log("connected")
    });
}


// const MongoClient = require('mongodb').MongoClient;

// const mongoURL = 'mongodb://127.0.0.1:27017/test'; // Replace with your MongoDB connection URL
// const mongoOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// };

// MongoClient.connect(mongoURL, mongoOptions, (err, client) => {
//   if (err) {
//     console.error('Failed to connect to MongoDB:', err);
//     return;
//   }

//   // Perform database operations here
//   const db = client.db(); // Access the connected database

//   // Start your Express server or perform other tasks
// });
