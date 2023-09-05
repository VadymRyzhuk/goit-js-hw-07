import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryCards = document.querySelector('.gallery');

const markup = createMarkup(galleryItems);

galleryCards.insertAdjacentHTML('beforeend', markup);
galleryCards.addEventListener('click', handleGalleryClick);


// console.log(markup);


function createMarkup(array) {
    return array.map(({ preview, original, description }) => {
        return `<li data-preview="${preview}" class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join('');
}




function handleGalleryClick(event) {
  event.preventDefault();
    if (event.target === event.currentTarget) {
        return
  }
    const targetElement = event.target.closest('.gallery__item');
  const galleryData = targetElement.dataset.preview;
  const galleryInfo = galleryItems.find(card => card.preview === galleryData);

  const instance = basicLightbox.create(`
  <div class="modal">
  <img src="${galleryInfo.original}" alt="${galleryInfo.description}" />
  </div>`
  );

  instance.show();
};

// console.log(galleryItems);