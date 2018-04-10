// setting labels and places where the divs will be

var optionDivs = document.getElementsByClassName('form-field');
var lengthLabel = optionDivs[2];
var jumperLabel = optionDivs[9];
var powerLabel = optionDivs[13];
var romexLabel = optionDivs[8];
var powerLinkerDiv = ["outerDiv3", "outerDiv4"]

var labels = document.getElementsByClassName('form-label form-label--alternate form-label--inlineSmall');
var labelsToHide = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13];

var idNames1 = ['bar-8', 'bar-12', 'bar-18', 'bar-24', 'bar-32'];
var labelName1 = ['  8"', '12"', '18"', '24"', '32"'];
var lengthDivs = [optionDivs[2], optionDivs[3], optionDivs[4], optionDivs[5], optionDivs[6]];


var idNames2 = ['jumper-6', 'jumper-12', 'jumper-18', 'jumper-24'];
var labelName2 = ['  6"', '12"', '18"', '24"'];
var lengthDivs2 = [optionDivs[9], optionDivs[10], optionDivs[11], optionDivs[12]];

var idNames3 = ['powerCord', 'Linker'];
var labelName3 = ['Quantity', 'Quantity'];
var lengthDivs3 = [optionDivs[13], optionDivs[14]];

var idNames4 = ["romex"];
var labelName4 = ['Quantity'];
var lengthDivs4 = [optionDivs[8]];


//creating divs to house the flex'd options

var flexNode = document.createElement("div");
flexNode.setAttribute("id", "length-div");
flexNode.setAttribute("style", "display:flex; flex-wrap:wrap; width: 350px");
var flexNodeOuter = document.createElement("div");
flexNodeOuter.setAttribute("id", "length-div-outer");
flexNodeOuter.setAttribute("style", "display:flex; flex-wrap:wrap;");
lengthLabel.insertAdjacentElement('beforebegin', flexNodeOuter);
flexNodeOuter.insertAdjacentElement('afterbegin', flexNode);
flexNodeOuter.insertAdjacentHTML('afterbegin', '<img src="http://www.aqlightinggroup.com/product_images/uploaded_images/aquc-superpage/aquc.jpg" style="width: 80px;height: 80px;margin-right: 15px;margin-top: auto;">');

var flexNode2 = document.createElement("div");
flexNode2.setAttribute("id", "jumper-div");
flexNode2.setAttribute("style", "display:flex; flex-wrap:wrap; width: 350px");
var flexNodeOuter2 = document.createElement("div");
flexNodeOuter2.setAttribute("id", "jumper-div-outer");
flexNodeOuter2.setAttribute("style", "display:flex; flex-wrap:wrap;");
jumperLabel.insertAdjacentElement('beforebegin', flexNodeOuter2);
flexNodeOuter2.insertAdjacentElement('afterbegin', flexNode2);
flexNodeOuter2.insertAdjacentHTML('afterbegin', '<img src="http://www.aqlightinggroup.com/product_images/uploaded_images/aquc-superpage/jumper.jpg" style="width: 80px;height: 80px;margin-right: 15px;margin-top: auto;">');


var flexNode3 = document.createElement("div");
flexNode3.setAttribute("id", "power-linker-div");
flexNode3.setAttribute("style", "display:flex; flex-wrap:wrap;");

powerLabel.insertAdjacentElement('beforebegin', flexNode3);


var flexNode4 = document.createElement("div");
flexNode4.setAttribute("id", "romex-div");
flexNode4.setAttribute("style", "display:flex; flex-wrap:wrap; width: 170px");
var flexNodeOuter4 = document.createElement("div");
flexNodeOuter4.setAttribute("id", "romex-div-outer");
flexNodeOuter4.setAttribute("style", "display:flex; flex-wrap:wrap;");
romexLabel.insertAdjacentElement('beforebegin', flexNodeOuter4);
flexNodeOuter4.insertAdjacentElement('afterbegin', flexNode4);
flexNodeOuter4.insertAdjacentHTML('afterbegin', '<img src="http://www.aqlightinggroup.com/product_images/uploaded_images/aquc-superpage/romex.jpg" style="width: 80px;height: 80px;margin-right: 15px;margin-top: auto;">');

//get rid of labels
for (var i = 0; i < labelsToHide.length; i++) {
    labels[labelsToHide[i]].setAttribute('style', 'display:none;')
}

//adding content div, input checkbox, and label with for-loops
for (var i = 0; i < idNames1.length; i++) {
    var newInput = document.createElement("input");
    newInput.type = "checkbox";
    newInput.id = idNames1[i];
    newInput.className = 'inputBox';


    var newLabel = document.createElement("label");
    newLabel.htmlFor = idNames1[i];
    newLabel.innerText = labelName1[i];

    var outerDiv = document.createElement("div");
    outerDiv.className = 'outerDiv1';

    var newDiv = document.createElement("div");
    newDiv.className = "content";

    var newSpan = document.createElement("span");
    newSpan.className = "span1";
    newSpan.innerHTML = '0';

    newDiv.insertAdjacentElement('beforeend', lengthDivs[i]);

    outerDiv.insertAdjacentElement('beforeend', newInput);
    outerDiv.insertAdjacentElement('beforeend', newSpan);
    outerDiv.insertAdjacentElement('beforeend', newLabel);
    outerDiv.insertAdjacentElement('beforeend', newDiv);
    flexNode.insertAdjacentElement('beforeend', outerDiv);
    newInput.checked = true;
}

for (var i = 0; i < idNames2.length; i++) {
    var newInput = document.createElement("input");
    newInput.type = "checkbox";
    newInput.id = idNames2[i];
    newInput.className = 'inputBox';

    var newLabel = document.createElement("label");
    newLabel.htmlFor = idNames2[i];
    newLabel.innerText = labelName2[i];

    var outerDiv = document.createElement("div");
    outerDiv.className = 'outerDiv2';

    var newDiv = document.createElement("div");
    newDiv.className = "content";

    var newSpan = document.createElement("span");
    newSpan.className = "span1";
    newSpan.innerHTML = '0';

    newDiv.insertAdjacentElement('beforeend', lengthDivs2[i]);

    outerDiv.insertAdjacentElement('beforeend', newInput);
    outerDiv.insertAdjacentElement('beforeend', newSpan);
    outerDiv.insertAdjacentElement('beforeend', newLabel);
    outerDiv.insertAdjacentElement('beforeend', newDiv);
    flexNode2.insertAdjacentElement('beforeend', outerDiv);
    newInput.checked = true;
}

for (var i = 0; i < idNames3.length; i++) {
    var newInput = document.createElement("input");
    newInput.type = "checkbox";
    newInput.id = idNames3[i];
    newInput.className = 'inputBox';

    var newLabel = document.createElement("label");
    newLabel.htmlFor = idNames3[i];
    newLabel.innerText = labelName3[i];
    newLabel.setAttribute("style", "height:50px; width:100px");

    var outerDiv = document.createElement("div");
    outerDiv.className = powerLinkerDiv[i];

    var newDiv = document.createElement("div");
    newDiv.className = "content2";

    var newSpan = document.createElement("span");
    newSpan.className = "span2";
    newSpan.innerHTML = '0';

    newDiv.insertAdjacentElement('beforeend', lengthDivs3[i]);

    outerDiv.insertAdjacentElement('beforeend', newInput);
    outerDiv.insertAdjacentElement('beforeend', newSpan);
    outerDiv.insertAdjacentElement('beforeend', newLabel);
    outerDiv.insertAdjacentElement('beforeend', newDiv);
    flexNode3.insertAdjacentElement('beforeend', outerDiv);
    newInput.checked = true;
}

for (var i = 0; i < idNames4.length; i++) {
    var newInput = document.createElement("input");
    newInput.type = "checkbox";
    newInput.id = idNames4[i];
    newInput.className = 'inputBox';

    var newLabel = document.createElement("label");
    newLabel.htmlFor = idNames4[i];
    newLabel.innerText = labelName4[i];
    newLabel.setAttribute("style", "height:50px; width:100px");

    var outerDiv = document.createElement("div");
    outerDiv.className = 'outerDiv5';

    var newDiv = document.createElement("div");
    newDiv.className = "content2";

    var newSpan = document.createElement("span");
    newSpan.className = "span2";
    newSpan.innerHTML = '0';

    newDiv.insertAdjacentElement('beforeend', lengthDivs4[i]);

    outerDiv.insertAdjacentElement('beforeend', newInput);
    outerDiv.insertAdjacentElement('beforeend', newSpan);
    outerDiv.insertAdjacentElement('beforeend', newLabel);
    outerDiv.insertAdjacentElement('beforeend', newDiv);
    flexNode4.insertAdjacentElement('beforeend', outerDiv);
    newInput.checked = true;
}

//get new labels
var powerCordDiv = document.getElementsByClassName('outerDiv3');
var endToEndDiv = document.getElementsByClassName('outerDiv4');

flexNode.insertAdjacentHTML('afterbegin', '<label class="form-label form-label--alternate form-label--inlineSmall"> Select all the sizes of the fixtures <small>Required</small></label>');
flexNode2.insertAdjacentHTML('afterbegin', '<label class="form-label form-label--alternate form-label--inlineSmall"> Select all the sizes of additional jumpers:</label>');

powerCordDiv[0].insertAdjacentHTML('afterbegin', '<label class="form-label form-label--alternate form-label--inlineSmall"> 6\' power cord </label>');
powerCordDiv[0].insertAdjacentHTML('beforebegin', '<img src="http://www.aqlightinggroup.com/product_images/uploaded_images/aquc-superpage/powercord.jpg" style="width: 80px;height: 80px;margin-right: 15px;margin-top: auto;">');
endToEndDiv[0].insertAdjacentHTML('afterbegin', '<label class="form-label form-label--alternate form-label--inlineSmall"> end-to-end linkers </label>');
endToEndDiv[0].insertAdjacentHTML('beforebegin', '<img src="http://www.aqlightinggroup.com/product_images/uploaded_images/aquc-superpage/end-end.jpg" style="width: 80px;height: 80px;margin-right: 15px;margin-top: auto;">');

flexNode4.insertAdjacentHTML('afterbegin', '<label class="form-label form-label--alternate form-label--inlineSmall"> Romex Connector</label>');


//add event listener that closes all dropdowns out of select
window.onclick = function(event) {
    if (!event.target.matches('.inputBox')) {
        var allButtons = document.getElementsByClassName('inputBox');

        for (var i = 0; i < allButtons.length; i++) {
            allButtons[i].checked = true;
        }
    }
}

//add event listener that changes the value of those green boxes
var productAttributesValue = document.querySelectorAll('[data-product-attribute-value]');

// I'm using a negative forloop as it's faster than an additional forloop
for (var i = productAttributesValue.length - 1; i >= 0; i--) {
    productAttributesValue[i].addEventListener('click', function() {
        var that = this;
        var outerDivChildren = this.parentElement.parentElement.parentElement.children;

        for (var i = outerDivChildren.length - 1; i >= 0; i--) {
            var child = outerDivChildren[i];

            if (child.classList.contains('span1') || child.classList.contains('span2')) {
                child.innerText = that.innerText;
            }
        }
    });

    productAttributesValue[i].addEventListener('touchend', function() {
        var that = this;
        var outerDivChildren = this.parentElement.parentElement.parentElement.children;

        for (var i = outerDivChildren.length - 1; i >= 0; i--) {
            var child = outerDivChildren[i];

            if (child.classList.contains('span1') || child.classList.contains('span2')) {
                child.innerText = that.innerText;
            }
        }
    });
}

var changeToOne = document.getElementsByClassName('span1');

changeToOne[0].innerHTML = '1';