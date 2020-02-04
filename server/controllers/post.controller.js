const Post = require('../models/post.model');

// get all posts
// first endpoint

exports.getPosts = async (req, res) => {

  try {
    res.status(200).json( await Post.find());
  }
  catch(err) {
    res.status(500).json(err);
  }
  // Znajdź wszystkie posty i zwróć je do klienta wraz z kodem 200 (sukces), o ile udało się wykonać funkcję. Jeśli pojawił się błąd, to zamiast tego, zwróć go, wraz z kodem 500.
};

exports.getSinglePost = async (req, res) => {

  try {
    res.status(200).json( await Post.findOne({id:req.params.id}));
  }
  catch(err) {
    res.status(500).json(err);
  }
};
