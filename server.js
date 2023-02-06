const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
const dbConfig = require("./api/config/db.config");
const Role = require('./api/models/role.model');
const mongoose = require("mongoose")


var corsOptions = {
  origin: "http://localhost:8081"
};

// Create the express app
const app = express();

app.use(cors(corsOptions));
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extend: true })); // Parse URL Encoded requests
app.use(
  cookieSession({
    name: 'dev-session',
    secret: 'COOKIE_SECRET', // use env variable for security
    httpOnly: true
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app" });
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
});

// Connect to MongoDB Database
const conn_str = `mongodb+srv://${dbConfig.HOST}:${dbConfig.PASS}@cluster0.e32n4ut.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(
  conn_str,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err) => {
    if (err) {
      console.log("error in connection");
    } else {
      console.log("mongodb is connected");
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
          console.log('error', err)
        }

        console.log('added user to roles collection.')
      });

      new Role({
        name: 'moderator'
      }).save(err => {
        if (err) {
          console.log('error', err)
        }

        console.log('added moderator to roles collection.')
      });

      new Role({
        name: 'admin'
      }).save(err => {
        if (err) {
          console.log('error', err)
        }

        console.log('added admin to roles collection.')
      });
    }
  });
}
