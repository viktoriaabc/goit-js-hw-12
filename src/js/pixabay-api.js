import axios from 'axios';
import iziToast from 'izitoast';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImagesByQuery = async (query, page) => {
  try {
    const { data } = await axios.get('', {
      params: {
        key: '55675620-3b63b7fb21ffc0e94edd19f24',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: 15,
      },
    });

    return data;
  } catch (error) {
    iziToast.error({
      message: 'No data found',
    });
  }
};
