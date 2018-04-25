window.onclick = function(event) {

    if (!event.target.matches('.dropdown-label-checkbox')) {
        var allButtons = document.getElementsByClassName('dropdown-label-checkbox');


        for (var i = 0; i < allButtons.length; i++) {
            allButtons[i].checked = true;
        }

    }

}

var labelButton = document.querySelectorAll('.dropdown-button');

var dropdownOptions = document.querySelectorAll('#drop-down--swatch');

for(var i = 0; i < dropdownOptions.length; i++) {
    dropdownOptions[i].addEventListener("click", function(event){
        var targetElement = event.target || event.srcElement;
        var newDropDown = targetElement.innerHTML
        labelButton[0].innerHTML = newDropDown + '<div class="arrow-down"></div>';
})  
}
