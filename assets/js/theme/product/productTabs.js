// Product Tab - ES6 Version
const tabAnchors = document.querySelectorAll('.tabNavigation a');
const tabContents = document.querySelectorAll('.product-overview');

// activate the first tab by default
if (location.hash) {
    const tabAnchor = document.querySelector(`[href="${location.hash}"]`);
    const tabContent = document.querySelector(location.hash);

    tabAnchor.classList.add('active');
    tabContent.classList.add('active');
} else {
    tabAnchors[0].classList.add('active');
    tabContents[0].classList.add('active');
}

// check for a has change and activate the relevant tab
window.addEventListener('hashchange', () => {
    const tabName = location.hash.split('#')[1];
    const tabAnchor = document.querySelector(`[href="#${tabName}"]`);
    const tabContent = document.querySelector(`#${tabName}`);

    // loop through all activated tab and hide them
    for (let i = tabContents.length - 1; i >= 0; i--) {
        tabContents[i].classList.remove('active');
    }
    for (let i = tabAnchors.length - 1; i >= 0; i--) {
        tabAnchors[i].classList.remove('active');
    }

    // activate the selected tab
    tabAnchor.classList.add('active');
    tabContent.classList.add('active');
});
/*
const things = document.querySelector('#Things');
if (things.innerText === '%%Panel.OutdoorAccessories%%') {
    things.innerText = '';
    things.appendChild(document.querySelector('.accessory-container'));
}*/
