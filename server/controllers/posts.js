//contains all the logic for the routes in the routes directory
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

  const newPost = new PostMessage(post);

  res.status(201).json(newPost);
  try {
    await newPost.save();
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
