import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
console.log(gallery);

const markup = galleryItems
  .map((item) => `<div class="gallery__item">
  <a class="gallery__link" href="xx${item.preview}">
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
  
    const imageLink = event.target.dataset.source;
    console.log(imageLink);
    basicLightbox.create(`
		<img src="${imageLink}">
	`).show()
})   



