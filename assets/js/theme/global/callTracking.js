// Calltracking Adwords / Callrail
((a, e, c, f, g, b, d) => {
	let h = {
		ak: "1069749593",
		cl: "50doCJGjsmUQ2aqM_gM"
	};
	a[c] = a[c] || (() => {
		(a[c].q = a[c].q || []).push(arguments);
	});
	a[f] || (a[f] = h.ak);
	b = e.createElement(g);
	b.async = 1;
	b.src = "//www.gstatic.com/wcm/loader.js";
	d = e.getElementsByTagName(g)[0];
	d.parentNode.insertBefore(b, d);
	a._googWcmGet = (b, d, e) => {
		a[c](2, b, h, d, null, new Date, e);
	};
})(window, document, "_googWcmImpl", "_googWcmAk", "script");
 
$( () => {
    let callback = function(mobile_number) {
      let e = document.getElementById("top-menu-phone-number");
      e.href = "tel:" + mobile_number;
      e.innerHTML = "";
      e.appendChild(document.createTextNode(mobile_number));
    };
    _googWcmGet(callback, '1-800-865-7221');
});

 setTimeout( () => {
    //let phoneNumber = $('#top-menu-phone-number').text().split('.').join('-');
    let phoneNumber = document.querySelector('#top-menu-phone-number').innerText.split('.').join('-');
    $('#top-menu-phone-number').attr('href', 'tel:+' + phoneNumber);
  }, 1000);