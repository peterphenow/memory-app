import express from 'express';

const router = express.Router();

//all routes in here are accessed by localhost:5000/posts because that was defined in index.js
//route will be reached at localhost:5000/posts

router.get('/', (req, res) => {
  res.send('THIS works!');
});

export default router;
