// Facebook Marketing Tracking
(() => {
	"use strict";
  let _fbq = window._fbq || (window._fbq = []);
  if (!_fbq.loaded) {
    let fbds = document.createElement('script');
    fbds.async = true;
    fbds.src = '//connect.facebook.net/en_US/fbds.js';
    let s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(fbds, s);
    _fbq.loaded = true;
  }
  _fbq.push(['addPixelId', '474109289437097']);
})();
window._fbq = window._fbq || [];
window._fbq.push(['track', 'PixelInitialized', {}]);