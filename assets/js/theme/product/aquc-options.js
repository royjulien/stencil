
const optionsDivs = document.querySelectorAll('div.form-field[data-product-attribute=set-radio]');

const barDivs = [optionsDivs[0], optionsDivs[1], optionsDivs[2], optionsDivs[3], optionsDivs[4]];

const barId = ['bar-8', 'bar-12', 'bar-18', 'bar-24', 'bar-32'];
const barName = ['  8"', '12"', '18"', '24"', '32"'];

const jumperDivs = [optionsDivs[5], optionsDivs[6], optionsDivs[7], optionsDivs[8]];

const jumperId = ['jumper-6', 'jumper-12', 'jumper-18', 'jumper-24'];
const jumperName = ['  6"', '12"', '18"', '24"'];

const powerDivs = optionsDivs[9];

const powerId = 'powerCord';
const powerName = 'Quantity';

const labelsToHide = document.querySelectorAll('label.form-label--alternate.form-label--inlineSmall');

const placeToAppend = document.querySelector('div.form-field[data-product-attribute=swatch]');

// creating divs to house the flex'd options

const flexNode3 = document.createElement('div');
flexNode3.setAttribute('id', 'power-div');
flexNode3.setAttribute('style', 'display:flex; flex-wrap:wrap; width: 180px');
const flexNodeOuter3 = document.createElement('div');
flexNodeOuter3.setAttribute('id', 'jumper-div-outer');
flexNodeOuter3.setAttribute('style', 'display:flex; flex-wrap:wrap;margin-bottom:1.5rem;');
placeToAppend.insertAdjacentElement('afterend', flexNodeOuter3);
flexNodeOuter3.insertAdjacentElement('afterbegin', flexNode3);
flexNodeOuter3.insertAdjacentHTML('afterbegin', '<img src="http://www.aqlightinggroup.com/product_images/uploaded_images/aquc-superpage/powercord.jpg" style="width: 80px;height: 80px;margin-right: 15px;margin-top: auto;">');


const powerInput = document.createElement('input');
powerInput.type = 'checkbox';
powerInput.id = powerId;
powerInput.className = 'inputBox';

const powerLabel = document.createElement('label');
powerLabel.htmlFor = powerId;
powerLabel.innerText = powerName;
powerLabel.setAttribute('style', 'height:50px; width:100px');

const outerDivPower = document.createElement('div');
outerDivPower.className = 'outerDiv3';

const newDivPower = document.createElement('div');
newDivPower.className = 'content2';

const powerSpan = document.createElement('span');
powerSpan.className = 'span2';
powerSpan.innerHTML = '0';

newDivPower.insertAdjacentElement('beforeend', powerDivs);

outerDivPower.insertAdjacentElement('beforeend', powerInput);
outerDivPower.insertAdjacentElement('beforeend', powerSpan);
outerDivPower.insertAdjacentElement('beforeend', powerLabel);
outerDivPower.insertAdjacentElement('beforeend', newDivPower);
flexNode3.insertAdjacentElement('beforeend', outerDivPower);
powerInput.checked = true;


const flexNode2 = document.createElement('div');
flexNode2.setAttribute('id', 'jumper-div');
flexNode2.setAttribute('style', 'display:flex; flex-wrap:wrap; width: 350px');
const flexNodeOuter2 = document.createElement('div');
flexNodeOuter2.setAttribute('id', 'jumper-div-outer');
flexNodeOuter2.setAttribute('style', 'display:flex; flex-wrap:wrap;margin-bottom:1.5rem;');
placeToAppend.insertAdjacentElement('afterend', flexNodeOuter2);
flexNodeOuter2.insertAdjacentElement('afterbegin', flexNode2);
flexNodeOuter2.insertAdjacentHTML('afterbegin', '<img src="http://www.aqlightinggroup.com/product_images/uploaded_images/aquc-superpage/jumper.jpg" style="width: 80px;height: 80px;margin-right: 15px;margin-top: auto;">');


const flexNode = document.createElement('div');
flexNode.setAttribute('id', 'length-div');
flexNode.setAttribute('style', 'display:flex; flex-wrap:wrap; width: 350px');
const flexNodeOuter = document.createElement('div');
flexNodeOuter.setAttribute('id', 'length-div-outer');
flexNodeOuter.setAttribute('style', 'display:flex; flex-wrap:wrap;margin-bottom:1.5rem;');
placeToAppend.insertAdjacentElement('afterend', flexNodeOuter);
flexNodeOuter.insertAdjacentElement('afterbegin', flexNode);
flexNodeOuter.insertAdjacentHTML('afterbegin', '<img src="http://www.aqlightinggroup.com/product_images/uploaded_images/aquc-superpage/aquc.jpg" style="width: 80px;height: 80px;margin-right: 15px;margin-top: auto;">');

// adding content div using for loop

for (let i = 0; i < barName.length; i++) {
    const newInput = document.createElement('input');
    newInput.type = 'checkbox';
    newInput.id = barId[i];
    newInput.className = 'inputBox';

    const newLabel = document.createElement('label');
    newLabel.htmlFor = barId[i];
    newLabel.innerText = barName[i];

    const outerDiv = document.createElement('div');
    outerDiv.className = 'outerDiv1';

    const newDiv = document.createElement('div');
    newDiv.className = 'content';

    const newSpan = document.createElement('span');
    newSpan.className = 'span1';
    newSpan.innerHTML = '0';

    newDiv.insertAdjacentElement('beforeend', barDivs[i]);

    outerDiv.insertAdjacentElement('beforeend', newInput);
    outerDiv.insertAdjacentElement('beforeend', newSpan);
    outerDiv.insertAdjacentElement('beforeend', newLabel);
    outerDiv.insertAdjacentElement('beforeend', newDiv);
    flexNode.insertAdjacentElement('beforeend', outerDiv);
    newInput.checked = true;
}

for (let i = 0; i < jumperName.length; i++) {
    const newInput = document.createElement('input');
    newInput.type = 'checkbox';
    newInput.id = jumperId[i];
    newInput.className = 'inputBox';

    const newLabel = document.createElement('label');
    newLabel.htmlFor = jumperId[i];
    newLabel.innerText = jumperName[i];

    const outerDiv = document.createElement('div');
    outerDiv.className = 'outerDiv2';

    const newDiv = document.createElement('div');
    newDiv.className = 'content';

    const newSpan = document.createElement('span');
    newSpan.className = 'span1';
    newSpan.innerHTML = '0';

    newDiv.insertAdjacentElement('beforeend', jumperDivs[i]);

    outerDiv.insertAdjacentElement('beforeend', newInput);
    outerDiv.insertAdjacentElement('beforeend', newSpan);
    outerDiv.insertAdjacentElement('beforeend', newLabel);
    outerDiv.insertAdjacentElement('beforeend', newDiv);
    flexNode2.insertAdjacentElement('beforeend', outerDiv);
    newInput.checked = true;
}

// Add Labels

flexNode.insertAdjacentHTML('afterbegin', '<label class="form-label form-label--alternate form-label--inlineSmall"> Select all the sizes of the fixtures <small>Required</small></label>');
flexNode2.insertAdjacentHTML('afterbegin', '<label class="form-label form-label--alternate form-label--inlineSmall"> Select all the sizes of additional jumpers:</label>');
flexNode3.insertAdjacentHTML('afterbegin', '<label class="form-label form-label--alternate form-label--inlineSmall"> 6\' power cord </label>');

// Hide the Unused Labels
for (let i = 0; i < labelsToHide.length; i++) {
    labelsToHide[i].setAttribute('style', 'display:none;');
}


// add event listener that changes the value of those green boxes
const productAttributesValue = document.querySelectorAll('[data-product-attribute-value]');

// I'm using a negative forloop as it's faster than an additional forloop
for (let i = productAttributesValue.length - 1; i >= 0; i--) {
    productAttributesValue[i].addEventListener('click', function () {
        const that = this;
        const outerDivChildren = this.parentElement.parentElement.parentElement.children;

        for (let k = outerDivChildren.length - 1; k >= 0; k--) {
            const child = outerDivChildren[k];

            if (child.classList.contains('span1') || child.classList.contains('span2')) {
                child.innerText = that.innerText;
            }
        }
    });

    productAttributesValue[i].addEventListener('touchend', function () {
        const that = this;
        const outerDivChildren = this.parentElement.parentElement.parentElement.children;

        for (let j = outerDivChildren.length - 1; j >= 0; j--) {
            const child = outerDivChildren[j];

            if (child.classList.contains('span1') || child.classList.contains('span2')) {
                child.innerText = that.innerText;
            }
        }
    });
}

const changeToOne = document.getElementsByClassName('span1');

changeToOne[0].innerHTML = '1';
