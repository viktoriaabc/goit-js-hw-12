import axios from 'axios';
import iziToast from 'izitoast';

import { refs } from './refs';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImagesByQuery = query => {
  const params = {
    key: '55675620-3b63b7fb21ffc0e94edd19f24',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  return axios.get('', { params }).then(response => response.data);
};
