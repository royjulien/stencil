// Product Tab - ES6 Version
let tabAnchors = document.querySelectorAll('.tabNavigation a');
let tabContents = document.querySelectorAll('.product-overview');

// activate the first tab by default
if (location.hash) {
    let tabAnchor = document.querySelector('[href="' + location.hash + '"]');
    let tabContent = document.querySelector(location.hash);

    tabAnchor.classList.add('active');
    tabContent.classList.add('active');
} else {
    tabAnchors[0].classList.add('active');
    tabContents[0].classList.add('active');
}

// check for a has change and activate the relevant tab
window.addEventListener('hashchange', () => {
    let tabName = location.hash.split('#')[1];

    let tabAnchor = document.querySelector('[href="#' + tabName + '"]');
    let tabContent = document.querySelector('#' + tabName);
    
    // loop through all activated tab and hide them
    for (var i = tabContents.length - 1; i >= 0; i--) {
        tabContents[i].classList.remove('active');
    }
    for (var i = tabAnchors.length - 1; i >= 0; i--) {
        tabAnchors[i].classList.remove('active');
    }

    // activate the selected tab
    tabAnchor.classList.add('active');
    tabContent.classList.add('active');
});

let things = document.querySelector('#Things');
if (things.innerText === '%%Panel.OutdoorAccessories%%') {
    things.innerText = '';
    things.appendChild(document.querySelector('.accessory-container'));
}
