const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

// get all posts
router.route('/posts').get(PostController.getPosts);
// get random post
router.route('/posts/random').get(PostController.getRandomPost);
// get single post
router.route('/posts/:id').get(PostController.getSinglePost);
// add post
router.route('/posts').post(PostController.addPost);
// get posts by range
router.route('/posts/range/:startAt/:limit').get(PostController.getPostsByRange);


module.exports = router;