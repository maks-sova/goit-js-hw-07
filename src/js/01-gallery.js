import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


const divref = document.querySelector('.gallery');

function makeGalleryItems(items) {
  return items
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img loading="lazy" width="354" height="240"
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

const addGallaryMarkup = makeGalleryItems(galleryItems);

divref.innerHTML = addGallaryMarkup;

divref.addEventListener('click', onImageClick);

function onImageClick(evt) {

    blockStandartAction(evt);

    if (evt.target.nodeName !== "IMG") {
        return;
    }

const instance = basiclightbox.create(`
    <img src="${evt.target.dataset.sourse}" width="400" heigth="300">
`);
instance.show();

divref.addEventListener('keydown', (evt) => {
    if (evt.code === "Escape") {
        instance.close()
    }
});
}

function blockStandartAction(evt) {
    evt.preventDefaut();
}
