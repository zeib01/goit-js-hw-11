import { queryImages } from './js/pixabay-api';

import { renderImages, clearGallery } from './js/render-functions';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
const form = document.querySelector('.form');
const input = document.querySelector("input[name='search-text']");
const loader = document.querySelector(`.loader`);
// const photoList = document.querySelector('.user-list');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term.',
      position: 'topRight',
      timeout: 5000,
    });
    return;
  }
  clearGallery();
  loader.classList.add(`visible`);
  queryImages(query)
    .then(function (images) {
      if (images.length === 0) {
        iziToast.warning({
          title: 'Warning',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 5000,
        });
      } else {
        renderImages(images);
      }
    })
    .catch(function (error) {
      console.error('Error fetching images:', error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
        position: 'topRight',
        timeout: 5000,
      });
    })
    .finally(() => {
      loader.classList.remove('visible'); // Приховати лоадер у будь-якому випадку
    });
});
