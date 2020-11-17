export default function () {
    $('.form-option-variant--label').click(function () {
        $(this)[0].innerHTML == '10"' ? $('.productView-image--default').removeClass('enlarge') : $('.productView-image--default').addClass('enlarge');
    })
}
