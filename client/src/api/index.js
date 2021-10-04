import axios from 'axios';

//this url points to the backend posts route
//use localhost during development
// const API = axios.create({ baseURL: 'http://localhost:5000' });
const API = axios.create({ baseURL: 'https://memories-app-pcp.herokuapp.com' });

// interceptors function that will happen on each of the requests.
// This will verify the user is logged in before performing any actions.
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

//fetch all posts in the database
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
