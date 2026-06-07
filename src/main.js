import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

const loadMoreBTn = document.querySelector('.load-more-btn');
loadMoreBTn.addEventListener('click', handleLoading);

let page = 1;
let keyWord = '';

async function handleSubmit(event) {
  event.preventDefault();

  const inputValue = form.elements['search-text'].value.trim();

  if (!inputValue) {
    iziToast.show({
      message: 'Please enter a search query!',
      position: 'topRight',
      messageColor: '#fff',
      backgroundColor: 'red',
    });
    return;
  }

  keyWord = inputValue;
  page = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const { hits, totalHits } = await getImagesByQuery(keyWord, page);

    if (hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        messageColor: '#fff',
        backgroundColor: 'red',
      });
      return;
    }

    createGallery(hits);

    const totalPages = Math.ceil(totalHits / 15);

    if (page >= totalPages) {
      hideLoadMoreButton();

      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        messageColor: '#fff',
        backgroundColor: 'red',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.show({
      message: `Ooops, something went wrong, try again. ${error}`,
      position: 'topRight',
      messageColor: '#fff',
      backgroundColor: 'red',
    });
  } finally {
    hideLoader();
    form.reset();
  }
}

async function handleLoading() {
  page++;

  const galleryItem = document.querySelector('.gallery-item');

  const galleryItemHeight = galleryItem
    ? galleryItem.getBoundingClientRect().height * 2 + 48
    : 0;

  showLoader();
  hideLoadMoreButton();

  try {
    const { hits, totalHits } = await getImagesByQuery(keyWord, page);

    createGallery(hits);

    window.scrollBy({
      top: galleryItemHeight,
      behavior: 'smooth',
    });

    const totalPages = Math.ceil(totalHits / 15);

    if (page >= totalPages) {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        messageColor: '#fff',
        backgroundColor: 'red',
      });

      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.show({
      message: `Ooops, something went wrong, try again. ${error}`,
      position: 'topRight',
      messageColor: '#fff',
      backgroundColor: 'red',
    });
  } finally {
    hideLoader();
  }
}