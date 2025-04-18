import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const searchInput = document.querySelector('input[name="search-text"]');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (query === '') {
    iziToast.error({
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);
    console.log(data);

    if (data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, no images found. Please try again!',
        position: 'topRight',
      });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({
      message: 'Error fetching images. Please try again!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});
