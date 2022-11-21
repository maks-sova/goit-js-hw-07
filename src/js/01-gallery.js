import { galleryItems } from './gallery-items.js';
// Change code below this line



const divref = document.querySelector('.gallery');

function creatGallaryMarkup(items) {
    return items
        .map((item) => {
                    `<div class="gallery__item">
                        <a class="gallery__link" href="${item.original}">
                            <img
                              class="gallery__image"
                              src="${item.preview}"
                              data-source="${item.original}"
                              alt="${item.description}"
                            />
                        </a>
                        </div>`
        })
        .join("");
}

const addGallaryMarkup = creatGallaryMarkup(galleryItems);

divref.innerHTML = addGallaryMarkup;

divref.addEventListener('click', onImageClick);

function onImageClick(evt) {

    blockStandartAction(evt);

    if (evt.target.nodeName !== "IMG") {
        return;
    }

const instance = basiclightbox.create(`
    <img src="${evt.target.dataset.sourse}" width="800" heigth="600">
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
console.log(galleryItems);