import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

export function createGallery(images) {
  const galleryContainer = document.querySelector('.gallery');
  let createdElements = [];
  images.forEach(image => {
    createdElements.push(`<li class="gallery-item">
	<a class="gallery-link" href="${image.webformatURL}">
  <div class="image-wrapper">
    <img 
      class="gallery-image" 
      src="${image.largeImageURL}" 
      alt="${image.tags}" 
    />
    
    <div class="overlay-box">
      <div class="in-list-container">
        <h2 class="in-list-title">Likes</h2>
        <p class="in-list-p">${image.likes}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Views</h2>
        <p class="in-list-p">${image.views}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Comments</h2>
        <p class="in-list-p">${image.comments}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Downloads</h2>
        <p class="in-list-p">${image.downloads}</p>
      </div>
    </div>
  </div>
</a>
   
</li>`);
  });
  galleryContainer.insertAdjacentHTML(
    'beforeend',
    `${createdElements.join('')}`
  );

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      download: true,
    });
  }
}
export function clearGallery() {
  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.innerHTML = '';

  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
}
export function showLoader() {
  loader.classList.remove('display-none');
}
export function hideLoader() {
  loader.classList.add('display-none');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('display-none');
}
export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('display-none');
}