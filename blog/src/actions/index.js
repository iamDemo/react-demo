import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '93d3436f-a89e-4c2a-b100-f89d6e81831e';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}?key=${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function createPost(props) {
  console.log("Action createPost: retrieves params", props);
  const request = axios.post(`${ROOT_URL}/posts?key=${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  };
}
