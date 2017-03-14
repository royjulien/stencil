//Product Page - Rope Light Mounting Ribbon
let productSKU = document.querySelector('#productSKU').innerText.trim().toLowerCase();
console.log(productSKU);

if (productSKU.includes('rope') || productSKU.includes('ez-led')) {
    console.log('it is rope light');
} else {
    console.log('it is not rope light');
}

let ropeMountingAccessories = [{
    'title': '50ft 1/2" 2ft Sections',
    'anchorLink': '/rope-light/ropelight-accessories/mounting/50ft-1-2-rope-light-clear-channel-mounting-pack-2ft-sections/',
    'imgSource': '/product_images/uploaded_images/RA2C/RA2C-Clear-Half-Inch-Rope-Light-Mounting-Channel.jpg',
    'imgAlt': '50ft 1/2 Inch 2ft Sections of Clear Mounting Channel',
    'price': '$49.79',
    'anchorAddToCart': 'https://affordablequalitylighting.com/cart.php?action=add&product_id=1983'
}, {
    'title': '100ft 1/2" 2ft Sections',
    'anchorLink': '/rope-light/ropelight-accessories/mounting/100ft-1-2-rope-light-clear-channel-mounting-pack-2ft-sections/',
    'imgSource': '/product_images/uploaded_images/RA2C/RA2C-Clear-Half-Inch-Rope-Light-Mounting-Channel.jpg',
    'imgAlt': '100ft 1/2 Inch 2ft Sections of Clear Mounting Channel',
    'price': '$99.59',
    'anchorAddToCart': 'https://affordablequalitylighting.com/cart.php?action=add&product_id=1984',
},{
	'title': '150ft 1/2" 2ft Sections',
	'anchorLink': '/rope-light/ropelight-accessories/mounting/150ft-1-2-rope-light-clear-channel-mounting-pack-2ft-sections/',
	'imgSource': '/product_images/uploaded_images/RA2C/RA2C-Clear-Half-Inch-Rope-Light-Mounting-Channel.jpg',
	'imgAlt': '150ft 1/2 2ft Sections of Clear Mounting Channel',
	'price': '$149.39',
	'anchorAddToCart': 'https://affordablequalitylighting.com/cart.php?action=add&product_id=1985'
},{
	'title': '60ft 1/2" 3ft Sections',
	'anchorLink': '/rope-light/ropelight-accessories/mounting/60ft-1-2-rope-light-clear-channel-mounting-pack-3ft-sections/',
	'imgSource': '/product_images/uploaded_images/RA2C/RA2C-Clear-Half-Inch-Rope-Light-Mounting-Channel.jpg',
	'imgAlt': '60ft 1/2 3ft Sections of Clear Mounting Channel',
	'price': '$54.89',
	'anchorAddToCart': 'https://affordablequalitylighting.com/cart.php?action=add&product_id=1986'
},
{
	'title': '120ft 1/2" 3ft Sections',
	'anchorLink': '/rope-light/ropelight-accessories/mounting/120ft-1-2-rope-light-clear-channel-mounting-pack-3ft-sections/',
	'imgSource': '/product_images/uploaded_images/RA2C/RA2C-Clear-Half-Inch-Rope-Light-Mounting-Channel.jpg',
	'imgAlt': '120ft 1/2 3ft Sections of Clear Mounting Channel',
	'price': '$109.69',
	'anchorAddToCart': 'https://affordablequalitylighting.com/cart.php?action=add&product_id=1988'
},
{
	'title': '50x 1/2" Mounting Clips',
	'anchorLink': '/rope-light/ropelight-accessories/mounting/1-2-mounting-clips/',
	'imgSource': '/product_images/uploaded_images/RAMC/RAMC-Half-Inch-Rope-Light-Mounting-Clip-Thumb.jpg',
	'imgAlt': '50x 1/2 Clear Plastic Mounting Clips',
	'price': '$10.95',
	'anchorAddToCart': 'https://affordablequalitylighting.com/cart.php?action=add&product_id=3476'
}
];

console.log(ropeMountingAccessories);