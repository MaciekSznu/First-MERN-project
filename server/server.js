const express = require('express');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
const loadTestData = require('./testData');
const helmet = require('helmet');

const app = express();

// import routes
const postRoutes = require('./routes/post.routes');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', postRoutes);
app.use(helmet());

// connect to database
mongoose.connect(config.DB, {useNewUrlParser: true});
let db = mongoose.connection;

// success/error servicing
db.once('open', () => {
  console.log('Connected to the database');
  loadTestData();
});
db.on('error', (err) => console.log(`Error ${err}`));

// listening server port
app.listen(config.PORT, function(){
  console.log('Server is running on port:', config.PORT);
});