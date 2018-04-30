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
    const container = document.createElement('div');
    container.className = 'video-window';

    const videoTitle = document.createElement('span');
    videoTitle.innerText = title;
    videoTitle.className = 'product-title';
    container.appendChild(videoTitle);

    const videoWindow = document.createElement('iframe');
    videoWindow.className = 'youtube';
    videoWindow.src = videoLink;
    container.appendChild(videoWindow);

    return container;
}

const videoTabContent = document.querySelector('#Videos');

if (videoTabContent) {
    let tabContent = videoTabContent.innerText.split('.')[1];
    tabContent = tabContent.split('%%')[0];
    requestURL = '/content/json/video-tab-videos.json'

    getJSON(requestURL, (error, data) => {
        if (error) {
            // console.log(error);
        } else {
            // console.log(data);
            for (let i = data.length - 1; i >= 0; i--) {
                if (data[i].name === tabContent) {
                    clearTabContent(videoTabContent);
                    const newContent = insertVideo(data[i].title, data[i].url);
                    videoTabContent.appendChild(newContent);
                }
            }
        }
    });

    if (tabContent) {
        switch (tabContent) {
        case 'LEDRopeVideos': {
            clearTabContent(videoTabContent);
            const newContent = insertVideo('DIY Video Guide: LED Rope Light', 'https://www.youtube.com/embed/yf7B4UgraXg?list=PLNsL1D_GAczZ_0Ocddeic0uivx1u3lWPP');
            videoTabContent.appendChild(newContent);
            break;
        }
        case 'PGC3BVideos': {
            clearTabContent(videoTabContent);
            const newContent = insertVideo('DIY Video Guide: PGC3B', 'https://www.youtube.com/embed/-paZ8wrVQLY?rel=0');
            videoTabContent.appendChild(newContent);
            break;
        }
        default: {
            clearTabContent(videoTabContent);
            videoTabContent.innerText = 'Coming Soon!';
            break;
        }
        }
    }
}
