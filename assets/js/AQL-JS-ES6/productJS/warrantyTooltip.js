// Warranty Tooltip Popup
const popup = document.querySelector('#warranty-popup');

document.querySelector('#warranty-content').addEventListener('click', () => {
    if (popup.classList.contains('active')) {
        popup.classList.remove('active');
    } else {
        popup.classList.add('active');
    }
});
