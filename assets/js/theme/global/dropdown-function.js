const labelButton = document.querySelectorAll('.dropdown-button');
const dropdownOptions = document.querySelectorAll('#drop-down--swatch');

let selectedLabel;

function toggleDropdown(event) {
    const dropdownContent = document.querySelectorAll('.dropdown-content');
    const targetElement = event.target || event.srcElement;
    selectedLabel = targetElement;

    const targetElementClass = targetElement.nextElementSibling;

    if (targetElementClass.className === 'dropdown-content-hide') {
        for (let j = dropdownContent.length - 1; j >= 0; j--) {
            dropdownContent[j].className = 'dropdown-content-hide';
        }
        targetElementClass.classList.remove('dropdown-content-hide');
        targetElementClass.classList.add('dropdown-content');
    } else {
        targetElementClass.classList.remove('dropdown-content');
        targetElementClass.classList.add('dropdown-content-hide');
    }
}

function toggleDropdownArrow(event) {
    const targetElement = event.target || event.srcElement;

    if (targetElement.innerHTML) {
        selectedLabel.innerHTML = `${targetElement.innerHTML} <div class="arrow-down"></div>`;
    }
}

export default function () {
    // closes all dropdowns on outside clicks
    window.onclick = (event) => {
        const dropdownContent = document.querySelectorAll('.dropdown-content');
        const targetElement = event.target || event.srcElement;

        if (!targetElement.matches('.dropdown-button')) {
            for (let i = dropdownContent.length - 1; i >= 0; i--) {
                dropdownContent[i].className = 'dropdown-content-hide';
            }
        }
        if (!event.target.matches('.inputBox')) {
            const allButtons = document.getElementsByClassName('inputBox');

            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].checked = true;
            }
        }
    };

    // opens and closes the dropdown on click of the button
    for (let i = labelButton.length - 1; i >= 0; i--) {
        labelButton[i].addEventListener('click', toggleDropdown);
    }

    // changes the dropdown button
    for (let i = dropdownOptions.length - 1; i >= 0; i--) {
        dropdownOptions[i].addEventListener('click', toggleDropdownArrow);
        dropdownOptions[i].addEventListener('touchend', toggleDropdownArrow);
    }
}
