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

function insertVideo(title, videoLink) {
    let noRel;

    if (videoLink === 'https://www.youtube.com/embed/yf7B4UgraXg?list=PLNsL1D_GAczZ_0Ocddeic0uivx1u3lWPP') {
        noRel = '';
    } else {
        noRel = '?rel=0';
    }

    const outerContainer = document.createElement('div');
    const lineBreaks = '<br><br> <h1>';
    const endTag = '</h1>';
    outerContainer.innerHTML = lineBreaks + title + endTag;


    const container = document.createElement('div');
    container.className = 'video-window';

    const videoTitle = document.createElement('span');
    videoTitle.innerText = title;
    videoTitle.className = 'product-title';
    container.appendChild(videoTitle);

    const videoWindow = document.createElement('iframe');
    videoWindow.className = 'youtube';
    videoWindow.src = videoLink + noRel;
    container.appendChild(videoWindow);
    outerContainer.appendChild(container);

    // return container;

    return outerContainer;
}

function insertGalleryVideo(videoSrc, thumbnail) {
    const noRel = '?rel=0&amp;showinfo=0';
    // create the video modal

    const theContainer = document.querySelector('#Overview');

    const theModal = document.createElement('div');
    theModal.className = 'modal';
    theModal.setAttribute('id', 'modalVideo');
    theModal.setAttribute('data-reveal', '');

    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-container';

    const xButton = document.createElement('a');
    xButton.className = 'modal-close';
    xButton.setAttribute('href', '#');
    xButton.setAttribute('aria-label', 'Close');
    xButton.setAttribute('role', 'button');

    const theX = document.createElement('span');
    theX.setAttribute('aria-hidden', 'true');
    theX.innerText = 'x';

    const theVideo = document.createElement('iframe');
    theVideo.style = 'background:none;border:none;';

    // This removes the recommended videos

    theVideo.src = videoSrc + noRel;

    xButton.appendChild(theX);
    videoContainer.appendChild(xButton);
    videoContainer.appendChild(theVideo);
    videoContainer.appendChild(theVideo);
    theModal.appendChild(videoContainer);
    theContainer.appendChild(theModal);

    // target dom

    const thumbnailGallary = document.querySelector('.productView-thumbnails');

    // set elements

    const thumbNailLi = document.createElement('li');
    const thumbNailOuter = document.createElement('a');
    const thumbNail = document.createElement('img');

    // setting the attributes in these elements.

    thumbNailLi.setAttribute('class', 'productView-thumbnail');

    thumbNailOuter.setAttribute('class', 'productView-thumbnail-link');
    thumbNailOuter.setAttribute('id', 'productView-thumbnail-video');
    thumbNailOuter.setAttribute('data-reveal-id', 'modalVideo');
    thumbNailOuter.setAttribute('href', '#modalVideo');

    thumbNail.setAttribute('src', thumbnail);

    thumbNailOuter.appendChild(thumbNail);
    thumbNailLi.appendChild(thumbNailOuter);
    thumbnailGallary.appendChild(thumbNailLi);
}

const videoTabContent = document.querySelector('#Videos');
const overViewContent = document.querySelector('#Overview');

if (videoTabContent) {
    let tabContent = videoTabContent.innerText.split('.')[1];
    tabContent = tabContent.split('%%')[0];
    const requestURL = 'https://www.aqlightinggroup.com/content/json/video-tab-videos.json';

    getJSON(requestURL, (error, data) => {
        if (error) {
            // console.log('This is the error', error);
        } else {
            for (let i = data.length - 1; i >= 0; i--) {
                if (data[i].name === tabContent) {
                    clearTabContent(videoTabContent);
                    const newContent = insertVideo(data[i].title, data[i].url);
                    overViewContent.insertAdjacentElement('beforeend', newContent);
                    insertGalleryVideo(data[i].url, data[i].thumbnail);
                }
            }
        }
    });
}
