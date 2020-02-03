// get all posts
// first endpoint

exports.getPosts = function (req, res) {
  const data = [
    { id: '1adfasf', title: 'Lorem Ipsum', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit' },
    { id: '2evxc34', title: 'Lorem Ipsum II', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit' },
  ]
  res.json(data);
};