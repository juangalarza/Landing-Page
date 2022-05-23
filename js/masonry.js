const imageListElement = document.querySelector('.mdc-image-list--masonry');
imagesLoaded(imageListElement, () => {
	new Masonry(imageListElement, {
		columnWidth: '.mdc-image-list__item',
		itemSelector: '.mdc-image-list__item', 
		percentPosition: true, 
		gutter: 5, 
		//horizontalOrder: true, 
	});
});