const Post = require('../models/post.model');
const uuid = require('uuid');

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

// get single post
exports.getSinglePost = async (req, res) => {

  try {
    res.status(200).json( await Post.findOne({id: req.params.id}));
  }
  catch(err) {
    res.status(500).json(err);
  }
};

// add new post

exports.addPost = async (req, res) => {

  try {
    const { title, author, content } = req.body;

    let newPost = new Post(req.body);
    //let newPost = new Post();
    // newPost.title = title;
    // newPost.author = author;
    // newPost.content = content;
    newPost.id = uuid();

    postSaved = await newPost.save();
    res.status(200).json(postSaved);

  }
  catch(err) {
    res.status(500).json(err);
  }
}
