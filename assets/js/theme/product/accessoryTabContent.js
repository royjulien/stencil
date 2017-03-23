// Accessory Page JS
function clearTabContent(tab){
	tab.innerText = '';
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
	container.append(tabTitle);


	const ulElement = document.createElement('ul');
	ulElement.className = 'accessorytab';

	// for loop start point
	for(let i = 0; i < data.items.length; i++) {
	let cardLink = document.createElement('a');
	cardLink.target='_blank';
	cardLink.href = data.items[i].itemLink;

	let liElement = document.createElement('li');
	liElement.className = 'accessorytab';

	let liImage = document.createElement('img');
	liImage.src = data.items[i].itemImg;
	liElement.append(liImage);
	liElement.append(data.items[i].itemName);

	cardLink.append(liElement);
	ulElement.append(cardLink);
	}
	// for loop end point

	container.append(ulElement);
	return container;
}

const accessoryTabContent = document.querySelector('#Things') || document.querySelector('#Accessories') || document.querySelector('#Housing');

if(accessoryTabContent){
	let tabContent = accessoryTabContent.innerText;
	tabContent = tabContent.split('.')[1];
	tabContent = tabContent.split('%%')[0];
	console.log(tabContent);
	let requestURL = '';
	switch(tabContent) {
		case 'LEDRopeLightAccessories':
			console.log('rope light accessories');
			requestURL = 'http://www.affordablequalitylighting.com/template/LEDRopeLightAccessories.json';
			getJSON(requestURL, (error, data) => {
				if (error) {
					console.log(error);
				}
				clearTabContent(accessoryTabContent);
				console.log(data);
				const newContent = createHTML(data);
				accessoryTabContent.append(newContent);
			});
			break;
		case 'OutdoorAccessories':
			console.log('outdoor accessories');
			requestURL = 'http://www.affordablequalitylighting.com/template/outdoorAccessories.json';
			getJSON(requestURL, (error, data) => {
				clearTabContent(accessoryTabContent);
				console.log(data);

				const newContent = createHTML(data);
				console.log(newContent);
				accessoryTabContent.append(newContent);
			});
			break;
		case '':
			console.log('underwater accessories');
			break;
		case '12VRopeLightAccessories':
			console.log('low voltage rope light accessories');
			break;
		case '120V4FluorescentHousings':
			requestURL = 'https://www.affordablequalitylighting.com/dav/template/120V4FluorescentHousings.json';
			getJSON(requestURL, (error, data) => {
				clearTabContent(accessoryTabContent);
				console.log(data);
				const newContent = createHTML(data);
				console.log(newContent);
				accessoryTabContent.append(newContent);
			});
			break;
		case '120V4FluorescentTrim':
			requestURL = 'http://www.affordablequalitylighting.com/template/120V4FluorescentTrims.json';
			getJSON(requestURL, (error, data) => {
				clearTabContent(accessoryTabContent);
				const newContent = createHTML(data);
				accessoryTabContent.append(newContent);
			});
			break;
		case '120V4Housing':
			console.log('120V 4 Housing');
			requestURL = 'http://www.affordablequalitylighting.com/template/120V4Housing.json';
			getJSON(requestURL, (error, data) => {
				clearTabContent(accessoryTabContent);
				const newContent = createHTML(data);
				accessoryTabContent.append(newContent);
			});
			break;
		case '120V5Housing':
			requestURL = 'http://www.affordablequalitylighting.com/template/120V5Housing.json';
			getJSON(requestURL, (error, data) => {
				clearTabContent(accessoryTabContent);
				const newContent = createHTML(data);
				accessoryTabContent.append(newContent);
			});
			break;
		case '120V6FluorescentHousing':
			requestURL = 'http://www.affordablequalitylighting.com/template/120V6FluorescentHousing.json';
			getJSON(requestURL, (error, data) => {
				clearTabContent(accessoryTabContent);
				const newContent = createHTML(data);
				accessoryTabContent.append(newContent);
			});
			break;
		default:
			console.log('no accessories'); 
	}
}
