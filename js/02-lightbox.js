import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryCards = document.querySelector('.gallery');

const markup = createMarkup(galleryItems);

galleryCards.insertAdjacentHTML('beforeend', markup);
// galleryCards.addEventListener('click', handleGalleryClick);


function createMarkup(array) {
    return array.map(({ preview, original, description }) => {
        return `<li data-preview="${preview}" class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`

    }).join('');
}


// console.log(galleryItems);


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsPosition: 'bottom',
    captionDelay: 250,
});