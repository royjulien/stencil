const labelButton = document.querySelectorAll('.dropdown-button'),
      dropdownOptions = document.querySelectorAll('#drop-down--swatch');


// closes all dropdowns on outside clicks

window.onclick = (event) => {
  let dropdownContent = document.querySelectorAll('.dropdown-content');
  let targetElement = event.target || event.srcElement;

  if (!targetElement.matches('.dropdown-button')) {
    for (var i = dropdownContent.length - 1; i >= 0; i--) {
      dropdownContent[i].className = 'dropdown-content-hide';
    }
  }
}


// opens and closes the dropdown on click of the button

for (let i = labelButton.length - 1; i >= 0; i--) {
  labelButton[i].addEventListener('click', (event) => {
    let targetElement = event.target || event.srcElement;
    let targetElementClass = targetElement.nextElementSibling;
    if (targetElementClass.className === 'dropdown-content-hide') {
      targetElementClass.className = 'dropdown-content'
    } else {
      targetElementClass.className = 'dropdown-content-hide';
    }

  })
}

// changes the dropdown button
for (let i = dropdownOptions.length - 1; i >= 0; i--) {
  dropdownOptions[i].addEventListener('click', (event) => {
    let targetElement = event.target || event.srcElement;

    if (targetElement.innerHTML) {
      labelButton[0].innerHTML = `${targetElement.innerHTML} <div class="arrow-down"></div>`;
    }
  });
}
