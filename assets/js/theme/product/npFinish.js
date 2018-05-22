function clearTabContent(tabContent) {
    const content = tabContent;
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

    // needs to loop for finish and glass swatches
    for (let n = 0; n < 2; n++) {
        let currentArray;
        let currentTitle;

        if (n === 1) {
            currentArray = data.finishSwatches;
            currentTitle = data.finishHeader;
        } else if (n === 2) {
            currentArray = data.glassSwatches;
            currentTitle = data.glassHeader;
        }

        const tabTitle = document.createElement('span');
        tabTitle.className = 'product-title';
        tabTitle.innerText = currentTitle;
        container.append(tabTitle);

        const ulElement = document.createElement('ul');
        ulElement.className = 'accessorytab';

        for (let i = 0; i < currentArray.length; i += 1) {
            const liElement = document.createElement('li');

            const liImg = document.createElement('img');
            liImg.src = currentArray[i].swatchImg;
            liImg.alt = currentArray[i].imgDescription;
            liImg.title = currentArray[i].imgDescription;
            liElement.appendChild(liImg);

            const liText = currentArray[i].colorName;
            liElement.appendChild(liText);


            ulElement.appendChild(liElement);
        }
        container.appendChild(ulElement);
    }
    // loop should terminate here after going through finish and glass objects

    return container;
}

const finishTab = document.querySelector('NPFinishes');
const requestURL = '/content/json/NPFinish.json';

if (finishTab !== null) {
    clearTabContent(finishTab);
    getJSON(requestURL, (error, data) => {
        const newContent = createHTML(data);
        finishTab.appendChild(newContent);
    });
}
