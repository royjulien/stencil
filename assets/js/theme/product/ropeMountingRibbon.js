// Product Page - Rope Light Mounting Ribbon
const productSKUElement = document.querySelector('#productSKU');

if (productSKUElement) {
    const productSKU = productSKUElement.innerText.trim().toLowerCase();
    addProducts(productSKU);
}

const addProducts = (sku) => {
    if (sku.includes('rope') || sku.includes('ez-led') || sku.includes('cc-led')) {
        const ropeMountingAccessories = [{
            title: '50ft 1/2" 2ft Sections',
            anchorLink: '/rope-light/ropelight-accessories/mounting/50ft-1-2-rope-light-clear-channel-mounting-pack-2ft-sections/',
            imgSource: '/product_images/uploaded_images/RA2C/RA2C-Clear-Half-Inch-Rope-Light-Mounting-Channel.jpg',
            imgAlt: '50ft 1/2 Inch 2ft Sections of Clear Mounting Channel',
            price: '$49.79',
            anchorAddToCart: '/cart.php?action=add&product_id=1983',
        }, {
            title: '100ft 1/2" 2ft Sections',
            anchorLink: '/rope-light/ropelight-accessories/mounting/100ft-1-2-rope-light-clear-channel-mounting-pack-2ft-sections/',
            imgSource: '/product_images/uploaded_images/RA2C/RA2C-Clear-Half-Inch-Rope-Light-Mounting-Channel.jpg',
            imgAlt: '100ft 1/2 Inch 2ft Sections of Clear Mounting Channel',
            price: '$99.59',
            anchorAddToCart: '/cart.php?action=add&product_id=1984',
        }, {
            title: '150ft 1/2" 2ft Sections',
            anchorLink: '/rope-light/ropelight-accessories/mounting/150ft-1-2-rope-light-clear-channel-mounting-pack-2ft-sections/',
            imgSource: '/product_images/uploaded_images/RA2C/RA2C-Clear-Half-Inch-Rope-Light-Mounting-Channel.jpg',
            imgAlt: '150ft 1/2 2ft Sections of Clear Mounting Channel',
            price: '$149.39',
            anchorAddToCart: '/cart.php?action=add&product_id=1985',
        }, {
            title: '60ft 1/2" 3ft Sections',
            anchorLink: '/rope-light/ropelight-accessories/mounting/60ft-1-2-rope-light-clear-channel-mounting-pack-3ft-sections/',
            imgSource: '/product_images/uploaded_images/RA2C/RA2C-Clear-Half-Inch-Rope-Light-Mounting-Channel.jpg',
            imgAlt: '60ft 1/2 3ft Sections of Clear Mounting Channel',
            price: '$54.89',
            anchorAddToCart: '/cart.php?action=add&product_id=1986',
        }, {
            title: '120ft 1/2" 3ft Sections',
            anchorLink: '/rope-light/ropelight-accessories/mounting/120ft-1-2-rope-light-clear-channel-mounting-pack-3ft-sections/',
            imgSource: '/product_images/uploaded_images/RA2C/RA2C-Clear-Half-Inch-Rope-Light-Mounting-Channel.jpg',
            imgAlt: '120ft 1/2 3ft Sections of Clear Mounting Channel',
            price: '$109.69',
            anchorAddToCart: '/cart.php?action=add&product_id=1988',
        }, {
            title: '50x 1/2" Mounting Clips',
            anchorLink: '/rope-light/ropelight-accessories/mounting/1-2-mounting-clips/',
            imgSource: '/product_images/uploaded_images/RAMC/RAMC-Half-Inch-Rope-Light-Mounting-Clip-Thumb.jpg',
            imgAlt: '50x 1/2 Clear Plastic Mounting Clips',
            price: '$10.95',
            anchorAddToCart: '/cart.php?action=add&product_id=3476',
        }];

        // get pointer for product view description
        const prependElement = document.querySelector('.productView-description');

        // create main section element for upsell ribbon
        const section = document.createElement('section');
        section.className = 'transformers-slider';

        // create title for main section
        const mainTitle = document.createElement('h2');
        mainTitle.innerText = 'Rope Light Mounting Options';
        section.append(mainTitle);

        // create ul list for upsell ribbon
        const unorderedList = document.createElement('ul');
        section.append(unorderedList);

        // start of loop through product array
        for (let i = ropeMountingAccessories.length - 1; i >= 0; i--) {
            const listItem = document.createElement('li');
            unorderedList.append(listItem);

            const link = document.createElement('a');
            link.href = ropeMountingAccessories[i].anchorLink;
            link.setAttribute('data-transformers-link', '');
            link.innerHTML = `<h3>${ropeMountingAccessories[i].title}</h3>`;
            listItem.append(link);

            const image = document.createElement('img');
            image.setAttribute('src', ropeMountingAccessories[i].imgSource);
            image.setAttribute('alt', ropeMountingAccessories[i].imgAlt);
            listItem.append(image);

            const cardPrice = document.createElement('em');
            cardPrice.setAttribute('class', 'catalog-product-price');
            listItem.append(cardPrice);

            const cartLink = document.createElement('a');
            cartLink.href = ropeMountingAccessories[i].anchorAddToCart;
            cartLink.setAttribute('class', 'transformer-add-to-cart');
            cartLink.innerText = 'Add to Cart';
            listItem.append(cartLink);
        }
        prependElement.prepend(section);
    }
};