window.onclick = function(event) {

    if (!event.target.matches('.dropdown-label-checkbox')) {
        var allButtons = document.getElementsByClassName('dropdown-label-checkbox');


        for (var i = 0; i < allButtons.length; i++) {
            allButtons[i].checked = true;
        }

    }


}
