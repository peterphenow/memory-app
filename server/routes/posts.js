import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

//all routes in here are accessed by localhost:5000/posts because that was defined in index.js
//route will be reached at localhost:5000/posts
//use auth middleware to authenticate the user before performing any of the following actions with auth
router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;
