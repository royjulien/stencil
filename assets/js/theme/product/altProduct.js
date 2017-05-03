// Alternate Product Suggestion for Out of Stock Items
function getJSON(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = () => {
        const status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    xhr.send(null);
}
// console.log('page loaded');
if (window.BCData.product_attributes) {
    // console.log('landed on a product page');
    const stockStatus = window.BCData.product_attributes.instock;
    // console.log(stockStatus);

    if (stockStatus === false) {
        // console.log('product is not in stock');
        const productSKU = window.BCData.product_attributes.sku;
        // console.log(productSKU);

        const altContainer = document.querySelector('.alt-container');
        const requestURL = 'http://www.affordablequalitylighting.com/content/json/alt-products.json';

        getJSON(requestURL, (error, data) => {
            if (error) {
                // console.log(error);
            } else {
                // console.log(data);
                for (let i = data.length - 1; i >= 0; i--) {
                    if (data[i].sku === productSKU) {
                        const containerHeader = document.createElement('h3');
                        containerHeader.innerText = 'Recommended Alternative:';
                        altContainer.appendChild(containerHeader);

                        const altProductImg = document.createElement('img');
                        altProductImg.setAttribute('src', data[i].imagePath);
                        altContainer.appendChild(altProductImg);

                        const containerText = document.createElement('p');
                        containerText.className = 'name';
                        containerText.innerText = data[i].name;
                        altContainer.appendChild(containerText);

                        altContainer.style.display = 'block';
                        altContainer.style.cursor = 'pointer';

                        const destinationURL = data[i].url;
                        altContainer.addEventListener('click', () => {
                            window.location.href = destinationURL;
                        }, true);
                    }
                }
            }
        });
    }
}
/*
if (isInStock === false) {
console.log('is not in stock');
const altContainer = document.querySelector('.alt-container');
const requestURL = 'http://www.affordablequalitylighting.com/content/json/alt-products.json';

getJSON(requestURL, (error, data) => {
if (error) {
console.log("Error has occured.");
} else {
console.log(data);
for (let i = data.length - 1; i >= 0; i--) {
if (data[i].sku === productSKUtext) {
altContainer.innerText = 'We Recommend:';
altContainer.innerText += data[i].name;
altContainer.style.display = 'block';
altContainer.style.cursor = 'pointer';
const altProductImg = document.createElement('img');
altProductImg.setAttribute('src', data[i].imagePath);
altContainer.appendChild(altProductImg);
const destinationURL = data[i].url;
altContainer.addEventListener('click', () => {
window.location.href = destinationURL;
}, true);
}
}
}
});
}
*/

/*
if (buyButton) {
console.log('add to cart found');
const isInStock = window.BCData.product_attributes.instock;

if (isInStock === false) {
console.log('is not in stock');
const altContainer = document.querySelector('.alt-container');
const requestURL = 'http://www.affordablequalitylighting.com/content/json/alt-products.json';

getJSON(requestURL, (error, data) => {
if (error) {
console.log("Error has occured.");
} else {
console.log(data);
for (let i = data.length - 1; i >= 0; i--) {
if (data[i].sku === productSKUtext) {
altContainer.innerText = 'We Recommend:';
altContainer.innerText += data[i].name;
altContainer.style.display = 'block';
altContainer.style.cursor = 'pointer';
const altProductImg = document.createElement('img');
altProductImg.setAttribute('src', data[i].imagePath);
altContainer.appendChild(altProductImg);
const destinationURL = data[i].url;
altContainer.addEventListener('click', () => {
window.location.href = destinationURL;
}, true);
}
}
}
});
}
} */
