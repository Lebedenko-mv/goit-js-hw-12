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
let keyWord;
let oldKeyWord;

async function handleSubmit(event) {
  event.preventDefault();
  showLoader();
  clearGallery();
  hideLoadMoreButton();

  const inputValue = form.elements['search-text'].value.trim();
  keyWord = inputValue;
  if (oldKeyWord !== keyWord) {
    page = 1;
    oldKeyWord = keyWord;
  }
  try {
    const { hits, totalHits } = await getImagesByQuery(inputValue, page);
    if (hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        messageColor: '#fff',
        backgroundColor: 'red',
      });
    } else {
      createGallery(hits);
      const totalPages = Math.ceil(totalHits / 15);
      if (page >= totalPages) {
        hideLoadMoreButton();
      } else {
        showLoadMoreButton();
      }
    }
  } catch (error) {
    iziToast.show({
      message: `Ooops, something went wrong, try again. ${error}`,
      position: 'topRight',
      messageColor: '#fff',
      backgroundColor: 'red',
    });
  }
  hideLoader();
  form.reset();
}

async function handleLoading() {
  page++;
  const galleryItemHeight =
    document.querySelector('.gallery-item').getBoundingClientRect().height * 2 +
    48;
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
  }
  hideLoader();
}