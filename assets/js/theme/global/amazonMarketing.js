// Amazon Marketing
let _paPixel = _paPixel || [];
_paPixel.push(['merchantId', 'A2BMBS7MTII41C']);
_paPixel.push(['type', 'purchase']);
_paPixel.push(['uniqueEventId', (new Date()).getTime() + Math.random().toString(16).slice(2)]);
_paPixel.push(['submit']);
//generic function to link to shopping pixel
() => {
    let paPixel = document.createElement('script');
    paPixel.type = 'text/javascript';
    paPixel.async = true;
    paPixel.src = '//d10so77biaxg0k.cloudfront.net/pa_pixel.js';
    let s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(paPixel, s);
};
