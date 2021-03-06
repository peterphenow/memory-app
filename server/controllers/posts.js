//contains all the logic for the routes in the routes directory
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    console.log(postMessages);

    //will respond with an array of all messages
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPostMessage = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() });

  res.status(201).json(newPostMessage);
  try {
    await newPostMessage.save();
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  //renaming id to _id
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id.');

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id.');

  await PostMessage.findByIdAndRemove(id);

  console.log('DELETE');

  res.json({ message: 'Post deleted successfully.' });
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) return res.json({ message: 'Unauthenticated' });

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id.');

  const post = await PostMessage.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    // like a post...
    post.likes.push(req.userId);
  } else {
    // dislike a post...
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

  res.json(updatedPost);
};
