import * as api from '../api';

// Action Creators(functions that return actions, actions are just an object with a type and payload)
// with thunk, we need to add 'async (dispatch)', then dispatch the action instead of returning it.
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
