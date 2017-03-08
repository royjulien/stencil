// Free Shipping Override - Product Page
() => {
	let productPrice = document.getElementById("productSalePrice").innerText.trim();
	let brandName = document.getElementById("productSKU").trim();

	if (productPrice.length && brandName !== 'spod' && brandName !== 'maximus-3' && brandName !== 'warrior products') {
		
		let parsedPrice = productPrice.text().replace("$", '');
		
		let quantityInput = document.getElementById("qty[]").value;
		
		let freeShipping = '<span class="free-shipping-container">Qualifies for Free Shipping</span>';

		$('#free-shipping-under-button').show();

		if (parsedPrice * quantityInput >= 249) {
			productPrice.append(freeShipping);
		}

	$('#form-action-addToCart' + quantityInput).on('change', () => {
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
}