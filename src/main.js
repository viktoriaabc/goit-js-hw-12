import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
// Sorry, there are no images matching your search query. Please try again!

import { refs } from './js/refs';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

refs.searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
  event.preventDefault();
  clearGallery();

  const { target: searchFormEl } = event;

  const userQuery = searchFormEl.elements['search-text'].value.trim();

  if (!userQuery) {
    iziToast.warning({
      message: 'Please, enter search query',
      position: 'topRight',
    });

    return;
  }
  showLoader();

  getImagesByQuery(userQuery)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: 'plum',
        });
        return;
      }
      createGallery(hits);

      searchFormEl.reset();
      console.log(hits);
    })
    .catch(err => {
      iziToast.error({
        message: 'Error fetch images',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
}
