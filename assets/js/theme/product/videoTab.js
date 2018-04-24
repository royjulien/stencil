function clearTabContent(tab) {
    const content = tab;
    content.innerText = '';
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
