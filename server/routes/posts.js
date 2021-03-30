import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

//all routes in here are accessed by localhost:5000/posts because that was defined in index.js
//route will be reached at localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);

export default router;
