// Product Tab - ES6 Version
let tabContainers = document.querySelectorAll('.product-overview');

let initHide = () => {
    for (let i = 1; i < tabContainers.length; i++) {
        tabContainers[i].style.display = "none";
    }
}
let hideAllContainers = () => {
    for (let i = 0; i < tabContainers.length; i++) {
        tabContainers[i].style.display = 'none';
    }
}
initHide();


const clickTabs = document.querySelectorAll('.tabNavigation a');

for (var i = 0; i < clickTabs.length; i++) {
    console.log(clickTabs[i].hash);
    clickTabs[i].addEventListener('click', () => {
        console.log(this);
    }
}

const overviewTab = document.querySelector('a[href="#Overview"]');
overviewTab.addEventListener('click', () => {
    console.log('clicked on overview tab');
    hideAllContainers();
    document.querySelector('#Overview').style.display = 'block';
});

const specTab = document.querySelector('a[href="#Specs"]');
specTab.addEventListener('click', () => {
    console.log('clicked on specs tab');
    hideAllContainers();
    document.querySelector('#Specs').style.display = 'block';
});

const accessoryTab = document.querySelector('a[href="#Accessory"]');
accessoryTab.addEventListener('click', () => {
    console.log('clicked on accessory tab');
    hideAllContainers();
    document.querySelector('#Accessory').style.display = 'block';
});

const installTab = document.querySelector('a[href="#Install"]');
installTab.addEventListener('click', () => {
    console.log('clicked on specs tab');
    hideAllContainers();
    document.querySelector('#Install').style.display = 'block';
});
