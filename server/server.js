const express = require('express');
const cors = require('cors');

const app = express();

// adding  middleware
// body-parser - przypomnieć sobie co to było!!!
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// first endpoint
// .json() let return from server json object
app.get('/api/posts', (req, res) => {
  const data = [
    { id: '1adfasf', title: 'Lorem Ipsum', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
    { id: '2evxc34', title: 'Lorem Ipsum II', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
  ]
  res.json(data);
});

// listening server port
app.listen(8000, function(){
  console.log('Server is running on port:', 8000);
});