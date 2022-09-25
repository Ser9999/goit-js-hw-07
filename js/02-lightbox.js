import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createElementsMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createElementsMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
            <a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" /></a>
              `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
console.log(galleryMarkup);
