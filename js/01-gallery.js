import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.js-gallery')

function addGalleryContainer() {
	return galleryItems
		.map(({ original, preview, description }) => {
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
		})
		.join('');
}

galleryContainer.insertAdjacentHTML('beforeend', addGalleryContainer());
galleryContainer.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
	e.preventDefault();

	if (!e.target.classList.contains('gallery__image')) {
		return;
	}

	const instance = basicLightbox.create(
		`
		<img srs="${e.target.dataset.sourse}" 
		width="800" height="600">
		`,
		{
			onShow: () => {
				window.addEventListener("keydown", onEscapeClick);
			},
			onClose: () => {
				window.removeEventListener("keydown", onEscapeClick);
			},
		},
	);

	function onEscapeClick(e) {
		if (e.code === 'Escape') {
			instance.close();
		}
	}
	instance.show()
};


	// 1.Создание и рендер разметки по массиву данных galleryItems 
	// и предоставленному шаблону элемента галереи.
	// 2.Реализация делегирования на div.gallery и получение url большого изображения.
	// 3.Подключение скрипта и стилей библиотеки модального окна basicLightbox.
	// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
	// 4.Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
	// 5.Замена значения атрибута src элемента <img> в модальном окне перед открытием.
	// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox
