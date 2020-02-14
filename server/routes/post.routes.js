const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

// get all posts
router.route('/posts').get(PostController.getPosts);
// get single post
router.route('/posts/:id').get(PostController.getSinglePost);
// add post
router.route('/posts').post(PostController.addPost);
// get posts by range
router.route('/posts/range/:startAt/:limit').get(PostController.getPostsByRange);
// get random post
router.route('/posts/random/:id').get(PostController.getRandomPost);



module.exports = router;