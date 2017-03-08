// Alternate Product Suggestion for Out of Stock Items
const productSKU = BCData.product_attributes.sku;
const isInStock = BCData.product_attributes.instock;

if (isInStock === false) {
    const altContainer = document.querySelector('.alt-container');
    const requestURL = "http://www.affordablequalitylighting.com/template/alt-products.json";

    getJSON(requestURL, (error, data) => {
        if (error) {
            console.log("Error has occured.");
        } else {
            for (let i = data.length - 1; i >= 0; i--) {
                if (data[i].sku === productSKU) {
                    altContainer.innerText = data[i].name;
                    altContainer.style.display = 'block';
                    altContainer.style.cursor = 'pointer';
                    const altProductImg = document.createElement('img');
                    altProductImg.setAttribute('src', data[i].imagePath);
                    altContainer.append(altProductImg);
                    const destinationURL = data[i].url;
                    altContainer.addEventListener('click', () => {
                        window.location.href = destinationURL;
                    }, true);
                }
            }
        }
    });
}

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