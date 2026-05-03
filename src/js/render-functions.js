import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from './refs';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const createGallery = images => {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"
      />
      <div class="info-wrapper">
      <p class="info">Likes: ${likes}</p>
      <p class="info">Views: ${views}</p>
      <p class="info">Comments: ${comments}</p>
      <p class="info">Downloads: ${downloads}</p>
      </div>
    </a>
  </li>`
    )
    .join('');

  refs.galleryList.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
};

export function clearGallery() {
  refs.galleryList.innerHTML = '';
}
export function showLoader() {
  refs.loader.classList.remove('hidden');
}
export function hideLoader() {
  refs.loader.classList.add('hidden');
}
