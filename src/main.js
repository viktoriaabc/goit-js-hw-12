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
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

let page = 1;
let query = '';

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreButtonClick);

async function onSearchFormSubmit(event) {
  try {
    event.preventDefault();

    clearGallery();
    hideLoadMoreButton();

    const { target: searchFormEl } = event;

    const userQuery = searchFormEl.elements['search-text'].value.trim();

    if (!userQuery) {
      iziToast.warning({
        message: 'Please, enter search query',
        position: 'topRight',
      });

      return;
    }

    query = userQuery;
    page = 1;

    showLoader();

    const { hits, totalHits } = await getImagesByQuery(query, page);

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

    if (page * 15 < totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.warning({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'bottomCenter',
        backgroundColor: 'plum',
      });
    }

    searchFormEl.reset();
  } catch (error) {
    iziToast.error({
      message: 'Error fetch images',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

async function onLoadMoreButtonClick(event) {
  page++;
  hideLoadMoreButton();
  showLoader();
  try {
    const { hits, totalHits } = await getImagesByQuery(query, page);

    createGallery(hits);

    const cardHeight =
      refs.galleryList.children[0].getBoundingClientRect().height;

    scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (page * 15 >= totalHits) {
      hideLoadMoreButton();

      iziToast.warning({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'bottomCenter',
        backgroundColor: 'plum',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Error fetch images',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}
