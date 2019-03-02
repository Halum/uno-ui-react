import axios from  'axios';

export const post = (url, data = {}) => {
  return axios
    .post(url, data, {responseType: 'json'})
    .then(response => response.data);
};