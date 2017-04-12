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
    container.append(videoTitle);

    const videoWindow = document.createElement('iframe');
    videoWindow.className = 'youtube';
    videoWindow.src = videoLink;
    container.append(videoWindow);

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
            videoTabContent.append(newContent);
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
