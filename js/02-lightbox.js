import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
console.log(gallery);

const markup = galleryItems
  .map((item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.preview}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`)
    .join("");
  
    gallery.insertAdjacentHTML("afterbegin", markup);