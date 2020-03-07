const express = require('express');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
const loadTestData = require('./testData');
const helmet = require('helmet');
const sanitize = require('express-mongo-sanitize');
const path = require('path');

const app = express();

// import routes
const postRoutes = require('./routes/post.routes');

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(sanitize());
app.use('/api', postRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/../client/build')));

// connect to database
mongoose.connect(config.DB, {useNewUrlParser: true});
let db = mongoose.connection;

// success/error servicing
db.once('open', () => {
  console.log('Connected to the database');
  //loadTestData();
});
db.on('error', (err) => console.log(`Error ${err}`));

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../client/build/index.html`));
});

// listening server port
app.listen(config.PORT, function(){
  console.log('Server is running on port:', config.PORT);
});