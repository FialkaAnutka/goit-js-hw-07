import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.js-gallery')
const addGalleryContainer = galleryItems.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img 
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
    </a>
    </div>
    `
}).join('');

galleryContainer.insertAdjacentHTML("afterbegin", addGalleryContainer)
galleryContainer.addEventListener('click', onGalleryContainerClick)

let instance;

function onGalleryContainerClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
        return
    };

    const url = getOriginalImg(evt);
    instance = createModal(url);

    instance.show(window.addEventListener('keydown', onEscapeClick))
};

function createModal(url) {
    return basicLightbox.create(`
      <img src="${url}">
    `, {
        onClose: () => {
            window.removeEventListener('keydown', onEscapeClick);
        }
    });
};

function getOriginalImg(evt) {
    return evt.target.dataset.source;
};

function onEscapeClick(evt) {
    if (evt.code === 'Escape') {
        instance.close();
    }
};




	// 1.Создание и рендер разметки по массиву данных galleryItems 
	// и предоставленному шаблону элемента галереи.
	// 2.Реализация делегирования на div.gallery и получение url большого изображения.
	// 3.Подключение скрипта и стилей библиотеки модального окна basicLightbox.
	// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
	// 4.Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
	// 5.Замена значения атрибута src элемента <img> в модальном окне перед открытием.
	// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox
