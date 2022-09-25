import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`;
  })
  .join("");
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target !== event.currentTarget) {
    const img = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${img}" width="1280">
`);

    instance.show();

    galleryEl.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        instance.close();
      }
    });
  }
});
