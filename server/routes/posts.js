import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

//all routes in here are accessed by localhost:5000/posts because that was defined in index.js
//route will be reached at localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
