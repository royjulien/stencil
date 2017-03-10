// Free Shipping Override - Product Page
// let productPrice = document.querySelector("#productSalePrice").innerText.trim();
// productPrice = productPrice.split('$')[1];
// productPrice = parseFloat(productPrice);
// console.log(productPrice);

// let brandName = document.querySelector('#productBrandName').innerText.trim().toLowerCase();
// console.log(brandName);

// let quantityInput = document.querySelector('.form-input--incrementTotal').value;
// quantityInput = parseInt(quantityInput);
// console.log(quantityInput);


// let quantityCount = document.querySelector('.form-input--incrementTotal').value;

// let decreaseQty = document.querySelector('button[data-action=dec]');
// decreaseQty.addEventListener('click', () => {
//     console.log('changed the quantity: -1');
//     if (quantityInput > 1) {
//         quantityInput -= 1;
//     }
//     console.log(quantityInput);
// });

// let increaseQty = document.querySelector('button[data-action=inc]');
// increaseQty.addEventListener('click', () => {
//     console.log('changed the quantity: +1');
//     quantityInput += 1;
//     console.log(quantityInput);
// });

/*
setInterval(() => {
    if (productPrice.length && brandName !== 'spod' && brandName !== 'maximus-3' && brandName !== 'warrior products') {
    	console.log(productPrice * quantityInput);

        if (productPrice * quantityInput >= 249) {
            let freeShipping = '<span class="free-shipping-container">Qualifies for Free Shipping</span>';
            document.querySelector('#productSalePrice').append(freeShipping);
            freeShipping.style.display = 'block';
        }
    }

}, 20);
*/