const allButtons = document.getElementsByClassName('dropdown-label-checkbox'),
      labelButton = document.querySelectorAll('.dropdown-button'),
      dropdownOptions = document.querySelectorAll('#drop-down--swatch');

window.onclick = (event) => {
  // close dropdown when user clicks anywhere but the dropdown
  if (!event.target.matches('.dropdown-label-checkbox')) {
    for (var i = allButtons.length - 1; i >= 0; i--) {
      allButtons[i].checked = true;
    }
  }
}


for (var i = dropdownOptions.length - 1; i >= 0; i--) {
  dropdownOptions[i].addEventListener('click', (event) => {
    var targetElement = event.target || event.srcElement;

    if (targetElement.innerHTML) {
      labelButton[0].innerHTML = `${targetElement.innerHTML} <div class="arrow-down"></div>`;
    }
  });
}
