//  Product Page - Transformers and Cables
const productVoltageElement = document.querySelector('.form-label--inlineSmall');

if (productVoltageElement) {
    let productVoltage = productVoltageElement.innerText.trim();

    productVoltage = productVoltage.split(':')[0].toLowerCase();

    if (productVoltage.includes('voltage')) {
        const transformers = [{
            title: '12V 60W Outdoor Mini Transformer PTX60',
            anchorLink: '/outdoor-lighting/low-voltage-transformers/12v-60w-outdoor-mini-transformer-ptx60/',
            imgSource: '/product_images/uploaded_images/PTX60/PTX60-UL-Listed-Outdoor-Rated-Transformer-with-photocell-and-hour-timer.jpg',
            imgAlt: '12V 60w Mini Outdoor Rated Transformer PTX60',
            price: '$87.99',
            anchorAddToCart: '/cart.php?action=add&product_id=567',
        }, {
            title: '150w Multi-Tap Low Voltage PTXKM150-15',
            anchorLink: '/outdoor-lighting/low-voltage-transformers/150w-multi-tap-low-voltage-transformer-ptx150-15/',
            imgSource: '/product_images/uploaded_images/PTX150/PTX150-15-150w-Stainless-Steel-Outdoor-Multi-Tap-Low-Voltage-Magnetic-Transformer.jpg',
            imgAlt: '150w Stainless Steel Encased Low Voltage Magnetic Transformer PTX150-15',
            price: '$189.95',
            anchorAddToCart: '/cart.php?action=add&product_id=1679',
        }, {
            title: '300w Outdoor Rated Multi-Tap PTXKM22-300',
            anchorLink: '/outdoor-lighting/low-voltage-transformers/300w-outdoor-rated-multi-tap-transformer-ptxkm22-300/',
            imgSource: '/product_images/uploaded_images/PTXKM22/PTXKM22-300-300w-Stainless-Steel-Outdoor-Rated-Low-Voltage-Magnetic-Multi-Tap-Transformer.jpg',
            imgAlt: '300w Outdoor Rated Multi-Tap Transformer PTXKM22-300',
            price: '$289.95',
            anchorAddToCart: '/cart.php?action=add&product_id=1680',
        }, {
            title: '600w Outdoor Rated Multi-Tap PTXKM22-600',
            anchorLink: '/outdoor-lighting/low-voltage-transformers/600w-outdoor-rated-multi-tap-transformer-ptxkm22-600/',
            imgSource: '/product_images/uploaded_images/PTXKM22/PTXKM22-300-300w-Stainless-Steel-Outdoor-Rated-Low-Voltage-Magnetic-Multi-Tap-Transformer.jpg',
            imgAlt: '600w Outdoor Rated Multi-Tap Transformer PTXKM22-600',
            price: '$325.99',
            anchorAddToCart: '/cart.php?action=add&product_id=1683',
        }, {
            title: '10 Gauge Low Voltage Cable - 250ft',
            anchorLink: '/outdoor-lighting/landscape-accessories/wires-cables-connectors/250-ft-10-gauge-low-voltage-underground-direct-burial-cable/',
            imgSource: '/product_images/uploaded_images/HC-10-250/HC-10-250-10-Gauge-Low-Voltage-Direct-Burial-Cable-250ft-Spool.jpg',
            imgAlt: '250ft 10 Gauge Low Voltage Cable Spool',
            price: '$199.99',
            anchorAddToCart: '/cart.php?action=add&product_id=1877',
        }, {
            title: '12 Gauge Low Voltage Cable - 250ft',
            anchorLink: '/outdoor-lighting/landscape-accessories/wires-cables-connectors/250-ft-12-gauge-low-voltage-underground-direct-burial-cable/',
            imgSource: '/product_images/uploaded_images/C-12-250/C12-12-250-12-Gauge-Low-Voltage-Underground-Direct-Burial-Cable-250-foot-Spool.jpg',
            imgAlt: '250ft 12 Gauge Low Voltage Cable Spool',
            price: '$98.95',
            anchorAddToCart: '/cart.php?action=add&product_id=1880',
        }, {
            title: '14 Gauge Low Voltage Cable - 250ft',
            anchorLink: '/outdoor-lighting/landscape-accessories/wires-cables-connectors/14-gauge-low-voltage-underground-direct-burial-cable-250ft/',
            imgSource: '/product_images/uploaded_images/HC-14-250/HC-14-250-14-Gauge-Low-Voltage-Underground-Direct-Burial-Cable-250-foot-Spool.jpg',
            imgAlt: '250ft 14 Gauge Low Voltage Cable Spool',
            price: '$68.98',
            anchorAddToCart: '/cart.php?action=add&product_id=1766',
        }];


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
