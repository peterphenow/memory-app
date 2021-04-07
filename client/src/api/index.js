import axios from 'axios';

//this url points to the backend posts route
const url = 'http://localhost:5000/posts';

//fetch all posts in the database
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
