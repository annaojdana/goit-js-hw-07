import { galleryItems } from './gallery-items.js';
// Change code below this line

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
gallery.addEventListener('click', (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
    const imageLink = event.target.dataset.source;
    const instance = basicLightbox.create(`
		<img src="${imageLink}">
	`).show()
})   



