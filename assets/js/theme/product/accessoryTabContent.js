// Accessory Page JS
function clearTabContent(tab) {
    const content = tab;
    content.innerText = '';
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

function createHTML(data) {
    const container = document.createElement('div');

    const tabTitle = document.createElement('span');
    tabTitle.className = 'product-title';
    tabTitle.innerText = data.header;
    container.appendChild(tabTitle);


    const ulElement = document.createElement('ul');
    ulElement.className = 'accessorytab';

// for loop start point
    for (let i = 0; i < data.items.length; i++) {
        const cardLink = document.createElement('a');
        cardLink.target = '_blank';
        cardLink.href = data.items[i].itemLink;

        const liElement = document.createElement('li');
        liElement.className = 'accessorytab';

        const liImage = document.createElement('img');
        liImage.src = data.items[i].itemImg;
        liElement.appendChild(liImage);
        liElement.appendChild(data.items[i].itemName);

        cardLink.appendChild(liElement);
        ulElement.appendChild(cardLink);
    }
// for loop end point

    container.appendChild(ulElement);
    return container;
}

const accessoryTabContent = document.querySelector('#Things') || document.querySelector('#Accessories') || document.querySelector('#Housing') || document.querySelector('#Accessory');

if (accessoryTabContent) {
    let tabContent = accessoryTabContent.innerText.split('.')[1];

    if (tabContent) {
        tabContent = tabContent.split('%%')[0];

        let requestURL = '';
        switch (tabContent) {
        case 'LEDRopeLightAccessories':
            // console.log('rope light accessories');
            requestURL = '/template/LEDRopeLightAccessories.json';
            getJSON(requestURL, (error, data) => {
                if (error) {
                    // console.log(error);
                }
                clearTabContent(accessoryTabContent);
                // console.log(data);
                const newContent = createHTML(data);
                accessoryTabContent.appendChild(newContent);
            });
            break;
        case 'OutdoorAccessories':
            // console.log('outdoor accessories');
            requestURL = '/content/json/outdoorAccessories.json';
            getJSON(requestURL, (error, data) => {
                clearTabContent(accessoryTabContent);
                // console.log(data);

                const newContent = createHTML(data);
                // console.log(newContent);
                accessoryTabContent.appendChild(newContent);
            });
            break;
        case '120V4FluorescentHousings':
            requestURL = 'https://www.affordablequalitylighting.com/dav/template/120V4FluorescentHousings.json';
            getJSON(requestURL, (error, data) => {
                clearTabContent(accessoryTabContent);
                // console.log(data);
                const newContent = createHTML(data);
                // console.log(newContent);
                accessoryTabContent.appendChild(newContent);
            });
            break;
        case '120V4FluorescentTrim':
            requestURL = '/template/120V4FluorescentTrims.json';
            getJSON(requestURL, (error, data) => {
                clearTabContent(accessoryTabContent);
                const newContent = createHTML(data);
                accessoryTabContent.appendChild(newContent);
            });
            break;
        case '120V4Housing':
            // console.log('120V 4 Housing');
            requestURL = '/template/120V4Housing.json';
            getJSON(requestURL, (error, data) => {
                clearTabContent(accessoryTabContent);
                const newContent = createHTML(data);
                accessoryTabContent.appendChild(newContent);
            });
            break;
        case '120V5Housing':
            requestURL = '/template/120V5Housing.json';
            getJSON(requestURL, (error, data) => {
                clearTabContent(accessoryTabContent);
                const newContent = createHTML(data);
                accessoryTabContent.appendChild(newContent);
            });
            break;
        case '120V6FluorescentHousing':
            requestURL = '/template/120V6FluorescentHousing.json';
            getJSON(requestURL, (error, data) => {
                clearTabContent(accessoryTabContent);
                const newContent = createHTML(data);
                accessoryTabContent.appendChild(newContent);
            });
            break;
        case '120V6FluorescentTrim':
            requestURL = '/template/120V6FluorescentTrim.json';
            getJSON(requestURL, (error, data) => {
                clearTabContent(accessoryTabContent);
                const newContent = createHTML(data);
                accessoryTabContent.appendChild(newContent);
            });
            break;
        case '120V6Housing':
            requestURL = '/template/120V6Housing.json';
            getJSON(requestURL, (error, data) => {
                clearTabContent(accessoryTabContent);
                const newContent = createHTML(data);
                accessoryTabContent.appendChild(newContent);
            });
            break;
        case '120V6SlopedHousing':
            requestURL = '/template/120V6SlopedHousing.json';
            getJSON(requestURL, (error, data) => {
                clearTabContent(accessoryTabContent);
                const newContent = createHTML(data);
                accessoryTabContent.appendChild(newContent);
            });
            break;
        case '120V6SlopedTrim':
            requestURL = '/template/120V6SlopedTrim.json';
            getJSON(requestURL, (error, data) => {
                clearTabContent(accessoryTabContent);
                const newContent = createHTML(data);
                accessoryTabContent.appendChild(newContent);
            });
            break;
        case '120V6Trim':
            requestURL = '/template/120V6Trim.json';
            getJSON(requestURL, (error, data) => {
                clearTabContent(accessoryTabContent);
                const newContent = createHTML(data);
                accessoryTabContent.appendChild(newContent);
            });
            break;
        case '12VLEDTapeAccessories':
            requestURL = '/content/json/12VLEDTapeAccessories.json';
            getJSON(requestURL, (error, data) => {
                clearTabContent(accessoryTabContent);
                const newContent = createHTML(data);
                accessoryTabContent.appendChild(newContent);
            });
            break;
        case '12VRGBLEDTapeAccessories':
            requestURL = '/content/json/12VRGBLEDTapeAccessories.json';
            getJSON(requestURL, (error, data) => {
                clearTabContent(accessoryTabContent);
                const newContent = createHTML(data);
                accessoryTabContent.appendChild(newContent);
            });
            break;
        case '12VHOLEDTapeAccessories':
            requestURL = '/content/json/12VHOLEDTapeAccessories.json';
            getJSON(requestURL, (error, data) => {
                clearTabContent(accessoryTabContent);
                const newContent = createHTML(data);
                accessoryTabContent.appendChild(newContent);
            });
            break;
        case 'AQUCaccessories':
            requestURL = '/content/json/AQUCaccessories.json';
            getJSON(requestURL, (error, data) => {
                clearTabContent(accessoryTabContent);
                const newContent = createHTML(data);
                accessoryTabContent.appendChild(newContent);
            });
            break;
        case 'PuckLightJumpers':
            requestURL = '/content/json/PuckLightJumpers.json';
            getJSON(requestURL, (error, data) => {
                clearTabContent(accessoryTabContent);
                const newContent = createHTML(data);
                accessoryTabContent.appendChild(newContent);
            });
            break;
        default:
            clearTabContent(accessoryTabContent);
            accessoryTabContent.innerText = 'Coming Soon!';
        }
    }
}
