import axios from  'axios';

export const postReq = (url, data = {}) => {
  return axios
    .post(url, data, {responseType: 'json'})
    .then(response => response.data)
    .catch(data => Promise.reject(data.response.data));
};

export const deleteReq = (url, data = {}) => {
  return axios
    .delete(url, data, {responseType: 'json'})
    .then(response => response.data)
    .catch(data => Promise.reject(data.response.data));
};