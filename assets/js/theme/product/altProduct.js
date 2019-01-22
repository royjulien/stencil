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

export default function () {
    if (window.BCData.product_attributes) {
        const stockStatus = window.BCData.product_attributes.instock;

        if (stockStatus === false) {
            const productSKU = window.BCData.product_attributes.sku;

            const altContainer = document.querySelector('.alt-container');
            const requestURL = '/content/json/alt-products.json';

            getJSON(requestURL, (error, data) => {
                if (!error) {
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
}
