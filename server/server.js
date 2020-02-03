const express = require('express');
const cors = require('cors');
const config = require('./config');

const app = express();

// import routes
const postRoutes = require('./routes/post.routes');

// import database
const mongoose = require('mongoose');

// connect to database
mongoose.connect(config.DB, {useNewUrlParser: true});
let db = mongoose.connection;

// success/error servicing
db.once('open', () => console.log('Connected to the database'));
db.on('error', (err) => console.log(`Error ${err}`));

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', postRoutes);

// listening server port
app.listen(config.PORT, function(){
  console.log('Server is running on port:', config.PORT);
});