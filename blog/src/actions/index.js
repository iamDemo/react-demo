import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '93d3436f-a89e-4c2a-b100-f89d6e81831e';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
