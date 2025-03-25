import axios from 'axios';
// Описаний у документації

const API_KEY = '33475610-696620aeee3e1938961deeefe';
const BASE_URL = 'https://pixabay.com/api/';

export function queryImages(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits);
}
