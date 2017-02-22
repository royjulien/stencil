// Alternate Product Suggestion for Out of Stock Items	
let isOutOfStock = '%%GLOBAL_HideProductAttributeList%%';

if (isOutOfStock.length) {
	$.getJSON('http://www.affordablequalitylighting.com/template/alt-products.json',  (data) => {
		$.each(data, (key, val) => {
			if (val.sku === '%%GLOBAL_SKU%%') {
				$('.alt-container').fadeIn('slow');
				$('.alt-container__href').attr('href', val.url);
				$('.alt-container__image').attr('src', val.imagePath);
				$('.alt-container__name').text(val.name);
			}
		});
	});
}
