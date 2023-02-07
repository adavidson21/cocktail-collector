require('dotenv').config()

const express = require('express');
const cors = require('cors');
const Role = require('./api/models/role.model');
const mongoose = require("mongoose");

var corsOptions = {
  origin: "http://localhost:8081"
};

const app = express(); // Create the express app

app.use(cors(corsOptions));
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL Encoded requests

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
});

// Connect to MongoDB Database
const conn_str = process.env.MONGO_URL;

mongoose.set("strictQuery", false);
mongoose.connect(
  conn_str,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err) => {
    if (err) {
      console.error("There was an error connecting to MongoDB. ", err);
    } else {
      console.log(`MongoDB connection successful.`)
      initialize();
    }
  });

// routes
require('./api/routes/auth.routes')(app);
require('./api/routes/user.routes')(app);

function initialize() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user'
      }).save(err => {
        if (err) {
          console.error('Error adding User to roles connection. ', err)
        }

        console.log('Added user to roles collection.')
      });

      new Role({
        name: 'admin'
      }).save(err => {
        if (err) {
          console.error('Error adding Admin to roles connection. ', err)
        }

        console.log('Added Admin to roles collection.')
      });
    }
  });
}
