var allButtons = document.getElementsByClassName('dropdown-label-checkbox');
var labelButton = document.querySelectorAll('.dropdown-button');
var dropdownOptions = document.querySelectorAll('#drop-down--swatch');


window.onclick = function(event) {
    
        if (!event.target.matches('.dropdown-label-checkbox')) {
            console.log(event.target)
    
            for (var i = 0; i < allButtons.length; i++) {
                allButtons[i].checked = true;
            } 
        
        }
        
}


for(var i = 0; i < dropdownOptions.length; i++) {
    dropdownOptions[i].addEventListener("click", function(event){
        var targetElement = event.target || event.srcElement;
        if(targetElement.innerHTML) 
        var newDropDown = targetElement.innerHTML;
        labelButton[0].innerHTML = newDropDown + '<div class="arrow-down"></div>';
})  
}