// Alternate Product Suggestion for Out of Stock Items	
//let isOutOfStock = '%%GLOBAL_HideProductAttributeList%%';
console.log("altProducts: LIVE");
const isInStock = this.BCData.product_attributes.instock;

if (isInStock === false) {

const getJSON = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = () => {
        const status = xhr.status;
        if (status === 200){
            callback(null, xhr.response);
        }
        else{
            callback(status);
        }
    };
    xhr.send();
}

console.log(getJSON);
/*
    $.getJSON('http://www.affordablequalitylighting.com/template/alt-products.json',  (data) => {
        $.each(data, (key, val) => {
            if (val.sku === '%%GLOBAL_SKU%%') {
                document.querySelector(".alt-container__href").attr('href', val.url);
                document.querySelector('.alt-container__image').attr('src'. val.imagePath);
                document.querySelector('.alt-container__name').text(val.name);    
                $('.alt-container').fadeIn('slow');
                $('.alt-container__href').attr('href', val.url);
                $('.alt-container__image').attr('src', val.imagePath);
                $('.alt-container__name').text(val.name); */
            }
        });
    });
}
