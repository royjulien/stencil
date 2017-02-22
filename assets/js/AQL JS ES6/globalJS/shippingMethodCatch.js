// Shipping Method Catch
    $('.ShippingMethodList').ajaxSuccess( (e, xhr, settings) => {
        let i = xhr.responseText.search("Unfortunately");
        if (i > 0) {
			$(".ShippingMethodList p").html('<p>There seems to be a problem with the shipping information you have entered; contact us by using the chat window below or call us toll free at <strong>1(800) 865-7221</strong></p>');
		}
    });