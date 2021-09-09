import $ from 'jquery';

export default function () {

    
    //  Product Page - Transformers and Cables
    const productVoltageElement = document.querySelector('.form-label--inlineSmall');
    const jsonTransformersURI = "https://www.aqlightinggroup.com/dav/content/json/transformerRibbon.json";
    const username = "data@aqlighting.com";
    const pwd = "2675106f03d3c3fe3d16236580a05dd6";

    if (productVoltageElement) {
        let productVoltage = productVoltageElement.innerText.trim();

        productVoltage = productVoltage.split(':')[0].toLowerCase();


        if (productVoltage.includes('voltage')) {

            $.ajax({
                url: jsonTransformersURI,
                type: "POST",
                dataType: 'json',
                contentType: 'application/json',
                async: false,
                crossDomain: true,
                data: `{"username": ${username}, "password": ${pwd}}`,
                success: function(data) {
                    console.log(data)
                }
            });
            
            const transformers = [];


            // get pointer for product view description
            const prependElement = document.querySelector('.productView-description');
            const productDescripton = document.querySelector('.tabs');

            // create main section element for upsell ribbon
            const section = document.createElement('section');
            section.className = 'transformers-slider';

            // create title for main section
            const mainTitle = document.createElement('h2');
            mainTitle.innerText = 'Transformer Required for 12V';
            section.appendChild(mainTitle);

            // create ul list for upsell ribbon
            const unorderedList = document.createElement('ul');
            section.appendChild(unorderedList);


            // start of loop through product array
            for (let i = transformers.length - 1; i >= 0; i--) {
                const listItem = document.createElement('li');
                unorderedList.appendChild(listItem);

                const link = document.createElement('a');
                link.href = transformers[i].anchorLink;
                link.setAttribute('data-transformers-link', '');
                // link.innerHTML = '<h3>' + transformers[i].title + '</h3>';
                link.innerHTML = `<h3>${transformers[i].title}</h3>`;
                listItem.appendChild(link);

                const image = document.createElement('img');
                image.setAttribute('src', transformers[i].imgSource);
                image.setAttribute('alt', transformers[i].imgAlt);
                listItem.appendChild(image);

                const cardPrice = document.createElement('em');
                cardPrice.setAttribute('class', 'catalog-product-price');
                cardPrice.innerText = transformers[i].price;
                listItem.appendChild(cardPrice);

                const cartLink = document.createElement('a');
                cartLink.href = transformers[i].anchorAddToCart;
                cartLink.setAttribute('class', 'transformer-add-to-cart');
                cartLink.innerText = 'Add to Cart';
                listItem.appendChild(cartLink);
            }
            prependElement.insertBefore(section, productDescripton);
        }
    }
}
