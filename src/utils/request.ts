import axios from 'axios';

const baseURL = 'https://api.liuyuyang.net/api';

export default axios.create({
  baseURL,
});