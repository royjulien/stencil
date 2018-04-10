// setting labels and places where the divs will be

const optionDivs = document.getElementsByClassName('form-field');
const lengthLabel = optionDivs[2];
const jumperLabel = optionDivs[9];
const powerLabel = optionDivs[13];
const romexLabel = optionDivs[8];
const powerLinkerDiv = ['outerDiv3', 'outerDiv4'];

const labels = document.getElementsByClassName('form-label form-label--alternate form-label--inlineSmall');
const labelsToHide = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13];

const idNames1 = ['bar-8', 'bar-12', 'bar-18', 'bar-24', 'bar-32'];
const labelName1 = ['  8"', '12"', '18"', '24"', '32"'];
const lengthDivs = [optionDivs[2], optionDivs[3], optionDivs[4], optionDivs[5], optionDivs[6]];


const idNames2 = ['jumper-6', 'jumper-12', 'jumper-18', 'jumper-24'];
const labelName2 = ['  6"', '12"', '18"', '24"'];
const lengthDivs2 = [optionDivs[9], optionDivs[10], optionDivs[11], optionDivs[12]];

const idNames3 = ['powerCord', 'Linker'];
const labelName3 = ['Quantity', 'Quantity'];
const lengthDivs3 = [optionDivs[13], optionDivs[14]];

const idNames4 = ['romex'];
const labelName4 = ['Quantity'];
const lengthDivs4 = [optionDivs[8]];


// creating divs to house the flex'd options

const flexNode = document.createElement('div');
flexNode.setAttribute('id', 'length-div');
flexNode.setAttribute('style', 'display:flex; flex-wrap:wrap; width: 350px');
const flexNodeOuter = document.createElement('div');
flexNodeOuter.setAttribute('id', 'length-div-outer');
flexNodeOuter.setAttribute('style', 'display:flex; flex-wrap:wrap;');
lengthLabel.insertAdjacentElement('beforebegin', flexNodeOuter);
flexNodeOuter.insertAdjacentElement('afterbegin', flexNode);
flexNodeOuter.insertAdjacentHTML('afterbegin', '<img src="http://www.aqlightinggroup.com/product_images/uploaded_images/aquc-superpage/aquc.jpg" style="width: 80px;height: 80px;margin-right: 15px;margin-top: auto;">');

const flexNode2 = document.createElement('div');
flexNode2.setAttribute('id', 'jumper-div');
flexNode2.setAttribute('style', 'display:flex; flex-wrap:wrap; width: 350px');
const flexNodeOuter2 = document.createElement('div');
flexNodeOuter2.setAttribute('id', 'jumper-div-outer');
flexNodeOuter2.setAttribute('style', 'display:flex; flex-wrap:wrap;');
jumperLabel.insertAdjacentElement('beforebegin', flexNodeOuter2);
flexNodeOuter2.insertAdjacentElement('afterbegin', flexNode2);
flexNodeOuter2.insertAdjacentHTML('afterbegin', '<img src="http://www.aqlightinggroup.com/product_images/uploaded_images/aquc-superpage/jumper.jpg" style="width: 80px;height: 80px;margin-right: 15px;margin-top: auto;">');


const flexNode3 = document.createElement('div');
flexNode3.setAttribute('id', 'power-linker-div');
flexNode3.setAttribute('style', 'display:flex; flex-wrap:wrap;');

powerLabel.insertAdjacentElement('beforebegin', flexNode3);

const flexNode4 = document.createElement('div');
flexNode4.setAttribute('id', 'romex-div');
flexNode4.setAttribute('style', 'display:flex; flex-wrap:wrap; width: 170px');
const flexNodeOuter4 = document.createElement('div');
flexNodeOuter4.setAttribute('id', 'romex-div-outer');
flexNodeOuter4.setAttribute('style', 'display:flex; flex-wrap:wrap;');
romexLabel.insertAdjacentElement('beforebegin', flexNodeOuter4);
flexNodeOuter4.insertAdjacentElement('afterbegin', flexNode4);
flexNodeOuter4.insertAdjacentHTML('afterbegin', '<img src="http://www.aqlightinggroup.com/product_images/uploaded_images/aquc-superpage/romex.jpg" style="width: 80px;height: 80px;margin-right: 15px;margin-top: auto;">');

// get rid of labels
for (let i = 0; i < labelsToHide.length; i++) {
    labels[labelsToHide[i]].setAttribute('style', 'display:none;');
}

// adding content div, input checkbox, and label with for-loops
for (let i = 0; i < idNames1.length; i++) {
    const newInput = document.createElement('input');
    newInput.type = 'checkbox';
    newInput.id = idNames1[i];
    newInput.className = 'inputBox';


    const newLabel = document.createElement('label');
    newLabel.htmlFor = idNames1[i];
    newLabel.innerText = labelName1[i];

    const outerDiv = document.createElement('div');
    outerDiv.className = 'outerDiv1';

    const newDiv = document.createElement('div');
    newDiv.className = 'content';

    const newSpan = document.createElement('span');
    newSpan.className = 'span1';
    newSpan.innerHTML = '0';

    newDiv.insertAdjacentElement('beforeend', lengthDivs[i]);

    outerDiv.insertAdjacentElement('beforeend', newInput);
    outerDiv.insertAdjacentElement('beforeend', newSpan);
    outerDiv.insertAdjacentElement('beforeend', newLabel);
    outerDiv.insertAdjacentElement('beforeend', newDiv);
    flexNode.insertAdjacentElement('beforeend', outerDiv);
    newInput.checked = true;
}

for (let i = 0; i < idNames2.length; i++) {
    const newInput = document.createElement('input');
    newInput.type = 'checkbox';
    newInput.id = idNames2[i];
    newInput.className = 'inputBox';

    const newLabel = document.createElement('label');
    newLabel.htmlFor = idNames2[i];
    newLabel.innerText = labelName2[i];

    const outerDiv = document.createElement('div');
    outerDiv.className = 'outerDiv2';

    const newDiv = document.createElement('div');
    newDiv.className = 'content';

    const newSpan = document.createElement('span');
    newSpan.className = 'span1';
    newSpan.innerHTML = '0';

    newDiv.insertAdjacentElement('beforeend', lengthDivs2[i]);

    outerDiv.insertAdjacentElement('beforeend', newInput);
    outerDiv.insertAdjacentElement('beforeend', newSpan);
    outerDiv.insertAdjacentElement('beforeend', newLabel);
    outerDiv.insertAdjacentElement('beforeend', newDiv);
    flexNode2.insertAdjacentElement('beforeend', outerDiv);
    newInput.checked = true;
}

for (let i = 0; i < idNames3.length; i++) {
    const newInput = document.createElement('input');
    newInput.type = 'checkbox';
    newInput.id = idNames3[i];
    newInput.className = 'inputBox';

    const newLabel = document.createElement('label');
    newLabel.htmlFor = idNames3[i];
    newLabel.innerText = labelName3[i];
    newLabel.setAttribute('style', 'height:50px; width:100px');

    const outerDiv = document.createElement('div');
    outerDiv.className = powerLinkerDiv[i];

    const newDiv = document.createElement('div');
    newDiv.className = 'content2';

    const newSpan = document.createElement('span');
    newSpan.className = 'span2';
    newSpan.innerHTML = '0';

    newDiv.insertAdjacentElement('beforeend', lengthDivs3[i]);

    outerDiv.insertAdjacentElement('beforeend', newInput);
    outerDiv.insertAdjacentElement('beforeend', newSpan);
    outerDiv.insertAdjacentElement('beforeend', newLabel);
    outerDiv.insertAdjacentElement('beforeend', newDiv);
    flexNode3.insertAdjacentElement('beforeend', outerDiv);
    newInput.checked = true;
}

for (let i = 0; i < idNames4.length; i++) {
    const newInput = document.createElement('input');
    newInput.type = 'checkbox';
    newInput.id = idNames4[i];
    newInput.className = 'inputBox';

    const newLabel = document.createElement('label');
    newLabel.htmlFor = idNames4[i];
    newLabel.innerText = labelName4[i];
    newLabel.setAttribute('style', 'height:50px; width:100px');

    const outerDiv = document.createElement('div');
    outerDiv.className = 'outerDiv5';

    const newDiv = document.createElement('div');
    newDiv.className = 'content2';

    const newSpan = document.createElement('span');
    newSpan.className = 'span2';
    newSpan.innerHTML = '0';

    newDiv.insertAdjacentElement('beforeend', lengthDivs4[i]);

    outerDiv.insertAdjacentElement('beforeend', newInput);
    outerDiv.insertAdjacentElement('beforeend', newSpan);
    outerDiv.insertAdjacentElement('beforeend', newLabel);
    outerDiv.insertAdjacentElement('beforeend', newDiv);
    flexNode4.insertAdjacentElement('beforeend', outerDiv);
    newInput.checked = true;
}

// get new labels
const powerCordDiv = document.getElementsByClassName('outerDiv3');
const endToEndDiv = document.getElementsByClassName('outerDiv4');

flexNode.insertAdjacentHTML('afterbegin', '<label class="form-label form-label--alternate form-label--inlineSmall"> Select all the sizes of the fixtures <small>Required</small></label>');
flexNode2.insertAdjacentHTML('afterbegin', '<label class="form-label form-label--alternate form-label--inlineSmall"> Select all the sizes of additional jumpers:</label>');

powerCordDiv[0].insertAdjacentHTML('afterbegin', '<label class="form-label form-label--alternate form-label--inlineSmall"> 6\' power cord </label>');
powerCordDiv[0].insertAdjacentHTML('beforebegin', '<img src="http://www.aqlightinggroup.com/product_images/uploaded_images/aquc-superpage/powercord.jpg" style="width: 80px;height: 80px;margin-right: 15px;margin-top: auto;">');
endToEndDiv[0].insertAdjacentHTML('afterbegin', '<label class="form-label form-label--alternate form-label--inlineSmall"> end-to-end linkers </label>');
endToEndDiv[0].insertAdjacentHTML('beforebegin', '<img src="http://www.aqlightinggroup.com/product_images/uploaded_images/aquc-superpage/end-end.jpg" style="width: 80px;height: 80px;margin-right: 15px;margin-top: auto;">');

flexNode4.insertAdjacentHTML('afterbegin', '<label class="form-label form-label--alternate form-label--inlineSmall"> Romex Connector</label>');


// add event listener that closes all dropdowns out of select
window.onclick = function (event) {
    if (!event.target.matches('.inputBox')) {
        const allButtons = document.getElementsByClassName('inputBox');

        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].checked = true;
        }
    }
};

// add event listener that changes the value of those green boxes
const productAttributesValue = document.querySelectorAll('[data-product-attribute-value]');

// I'm using a negative forloop as it's faster than an additional forloop
for (let i = productAttributesValue.length - 1; i >= 0; i--) {
    productAttributesValue[i].addEventListener('click', function () {
        const that = this;
        const outerDivChildren = this.parentElement.parentElement.parentElement.children;

        for (let k = outerDivChildren.length - 1; k >= 0; k--) {
            let child = outerDivChildren[k];

            if (child.classList.contains('span1') || child.classList.contains('span2')) {
                child.innerText = that.innerText;
            }
        }
    });

    productAttributesValue[i].addEventListener('touchend', function () {
        const that = this;
        const outerDivChildren = this.parentElement.parentElement.parentElement.children;

        for (let j = outerDivChildren.length - 1; j >= 0; j--) {
            let child = outerDivChildren[j];

            if (child.classList.contains('span1') || child.classList.contains('span2')) {
                child.innerText = that.innerText;
            }
        }
    });
}

let changeToOne = document.getElementsByClassName('span1');

changeToOne[0].innerHTML = '1';