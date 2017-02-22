// Changing Payments at Checkout
$('#bottom_payment_button').removeAttr('src', '').attr('value', 'Proceed to Payment');
    var numberOfItemsInCart = $('#numberOfItemsInCart').text().replace(/[^0-9]/g, '');
    $('#numberOfItemsInCart').text(numberOfItemsInCart).show();