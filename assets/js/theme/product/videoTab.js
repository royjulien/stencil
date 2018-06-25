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
    videoWindow.src = videoLink + "?rel=0";
    container.appendChild(videoWindow);

    return container;
}

function insertGalleryVideo(videoSrc, thumbnail) {


        //create the video modal

        let theContainer = document.querySelector('#Overview');

        let theModal = document.createElement("div");
        theModal.className = "modal";
        theModal.setAttribute("id", "modalVideo");
        theModal.setAttribute("data-reveal", "");

        let videoContainer = document.createElement("div");
        videoContainer.className = "video-container";
        
        
        let theVideo = document.createElement("iframe");
        theVideo.style = "background:none;border:none;";

        // This removes the recommended videos
        theVideo.src = videoSrc + "?rel=0";

        videoContainer.appendChild(theVideo);
        theModal.appendChild(videoContainer);
        theContainer.appendChild(theModal);


        // target dom
    
        let thumbnailGallary = document.querySelector('.productView-thumbnails');
        
        // set elements
        
        let thumbNailLi = document.createElement("li");
        let thumbNailOuter = document.createElement("a");
        let thumbNail = document.createElement("img");
        
        
        // setting the attributes in these elements.
        
        thumbNailLi.setAttribute("class", "productView-thumbnail");
        
        thumbNailOuter.setAttribute("class", "productView-thumbnail-link");
        thumbNailOuter.setAttribute("id", "productView-thumbnail-video");
        thumbNailOuter.setAttribute("data-reveal-id", "modalVideo");
        thumbNailOuter.setAttribute("href", "#modalVideo");
        
        thumbNail.setAttribute("src", thumbnail);
        
        thumbNailOuter.appendChild(thumbNail);
        thumbNailLi.appendChild(thumbNailOuter);
        thumbnailGallary.appendChild(thumbNailLi);
}

const videoTabContent = document.querySelector('#Videos');

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
                    videoTabContent.appendChild(newContent);
                    insertGalleryVideo(data[i].url, data[i].thumbnail);
                }
            }
        }
    });

    // if (tabContent) {
    //     switch (tabContent) {
    //     case 'LEDRopeVideos': {
    //         clearTabContent(videoTabContent);
    //         const newContent = insertVideo('DIY Video Guide: LED Rope Light', 'https://www.youtube.com/embed/yf7B4UgraXg?list=PLNsL1D_GAczZ_0Ocddeic0uivx1u3lWPP');
    //         videoTabContent.appendChild(newContent);
    //         break;
    //     }
    //     case 'PGC3BVideos': {
    //         clearTabContent(videoTabContent);
    //         const newContent = insertVideo('DIY Video Guide: PGC3B', 'https://www.youtube.com/embed/-paZ8wrVQLY?rel=0');
    //         videoTabContent.appendChild(newContent);
    //         break;
    //     }
    //     default: {
    //         clearTabContent(videoTabContent);
    //         videoTabContent.innerText = 'Coming Soon!';
    //         break;
    //     }
    //     }
    // }
}
