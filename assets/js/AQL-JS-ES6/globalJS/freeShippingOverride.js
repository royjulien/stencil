// Free Shipping Product Page Override
var productPrice = $('.ProductPrice');
var brandName = $('.brand-name').text().toLowerCase();

if (productPrice.length && brandName !== 'spod' && brandName !== 'maximus-3' && brandName !== 'warrior products') {
	let parsedPrice = productPrice.text().replace("$", '');
	let quantityInput = $('.quantityInput').val();
	let freeShipping = '<span class="free-shipping-container">Qualifies for Free Shipping</span>';

	$('#free-shipping-under-button').show();

	if (parsedPrice * quantityInput >= 249) {
		productPrice.append(freeShipping);
	}

	$('.ProductAddToCart, ' + quantityInput).on('change', () => {
		"use strict";
		setTimeout( () => {
			parsedPrice = productPrice.text().replace("$", '');
			quantityInput = $('.quantityInput').val();

			if (parsedPrice * quantityInput >= 249) {
				productPrice.append(freeShipping);
			}
		}, 2000);
	});
}
