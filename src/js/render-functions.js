import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const galleryContainer = document.querySelector('.gallery');
  const markup = images.map(image => `
    <li class="gallery-item">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div class="info">
        <p>👍 ${image.likes}</p>
        <p>👁 ${image.views}</p>
        <p>💬 ${image.comments}</p>
        <p>⬇ ${image.downloads}</p>
      </div>
    </li>
  `).join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.add('visible');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('visible');
}
