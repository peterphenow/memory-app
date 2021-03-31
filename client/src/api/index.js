import axios from 'axios';

//this url points to the backend posts route
const url = 'http://localhost:5000/posts';

//fetch all posts in the database
export const fetchPosts = () => axios.get(url);
