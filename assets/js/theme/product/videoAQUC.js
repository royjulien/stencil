export default function () {
    const videoWindow = document.querySelector('#videoAQUC');

    if (videoWindow) {
        videoWindow.className = 'video-window';
        videoWindow.innerText = '';

        const videoFrame = document.createElement('iframe');
        videoFrame.className = 'youtube';
        videoFrame.src = 'https://www.youtube.com/embed/DDyHlHvv9l8';
        videoWindow.appendChild(videoFrame);
    }
}
