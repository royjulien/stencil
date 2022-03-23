/*
 Import all product specific js
 */
import $ from 'jquery';
import utils from '@bigcommerce/stencil-utils';
import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.reveal';
import ImageGallery from '../product/image-gallery';
import modalFactory from '../global/modal';
import _ from 'lodash';

// We want to ensure that the events are bound to a single instance of the product details component
/*
let quantityInput = document.querySelector('.form-input--incrementTotal').value;
quantityInput = parseInt(quantityInput);
*/
let previewModal = null;
let productSingleton = null;

utils.hooks.on('cart-item-add', (event, form) => {
    if (productSingleton) {
        productSingleton.addProductToCart(event, form);
    }
});

utils.hooks.on('product-option-change', (event, changedOption) => {
    if (productSingleton) {
        productSingleton.productOptionsChanged(event, changedOption);
    }
});

export default class Product {
    constructor($scope, context) {
        const productAttributesData = window.BCData.product_attributes || {};
        this.$scope = $scope;
        this.context = context;
        this.imageGallery = new ImageGallery($('[data-image-gallery]', this.$scope));
        this.imageGallery.init();
        this.listenQuantityChange();
        this.initRadioAttributes();
        this.filterVariations();
        this.toggleDropdown();
        this.parseLabels();
        this.renderBlocks();
        this.renderSets();
        this.showQuantities();

        const $form = $('form[data-cart-item-add]', $scope);
        const $productOptionsElement = $('[data-product-option-change]', $form);
        const hasOptions = $productOptionsElement.html().trim().length;

        // Update product attributes. If we're in quick view and the product has options,
        // then also update the initial view in case items are oos
        const $productId = $('[name="product_id"]', $form).val();

        if (_.isEmpty(productAttributesData) && hasOptions) {
            utils.api.productAttributes.optionChange($productId, $form.serialize(), (err, response) => {
                const attributesData = response.data || {};

                this.updateProductAttributes(attributesData);
                this.updateView(attributesData);
            });
        } else {
            this.updateProductAttributes(productAttributesData);
        }

        $productOptionsElement.show();

        previewModal = modalFactory('#previewModal')[0];
        productSingleton = this;

        let startingPrice = document.querySelector('#productSalePrice').innerText.split('$')[1];
        startingPrice = parseFloat(startingPrice);
        this.updateQualifyForShipping();

        this.initialVariations($productId);
    }

    /**
     * Since $productView can be dynamically inserted using render_with,
     * We have to retrieve the respective elements
     *
     * @param $scope
     */
     /*
    initQty(price) {
        this.updateQualifyForShipping();
        // this.calculatePrice(price, $productQuantity.val);
    }
    */

    getViewModel($scope) {
        return {
            $cyberWeekDeals: $('[data-is-cyber-week-deals]', $scope),
            $priceSaved: $('[data-product-price-saved]', $scope),
            $priceWithTax: $('[data-product-price-with-tax]', $scope),
            $rrpWithTax: $('[data-product-rrp-with-tax]', $scope),
            $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
            $productQuantity: $('[id="#qty[]"]', $scope),
            $rrpWithoutTax: $('[data-product-rrp-without-tax]', $scope),
            $weight: $('.productView-info [data-product-weight]', $scope),
            $increments: $('.form-field--increments :input', $scope),
            $addToCart: $('#form-action-addToCart', $scope),
            stock: {
                $container: $('.form-field--stock', $scope),
                $input: $('[data-product-stock]', $scope),
            },
            $sku: $('[data-product-sku] + .productView-info-value'),
            quantity: {
                $text: $('.incrementTotal', $scope),
                $input: $('[name=qty\\[\\]]', $scope),
            },
        };
    }

    /**
     *
     * Google add to cart tracking
     *
     */
    gtagReportConversion(url) {
      let priceWithoutTax = this.getViewModel().$priceWithoutTax[0].innerText.substring(1);
      let callback = function () {
        if (typeof(url) != 'undefined') window.location = url;
      };

      gtag('event', 'conversion', {
          'send_to': 'AW-1069749593/-sNgCMDQlMUCENmqjP4D',
          'value': priceWithoutTax > 0 ? priceWithoutTax : 1,
          'currency': 'USD',
          'event_callback': callback
      });

      return false;
    }


    /**
     *
     * Handle product options changes
     *
     */
    productOptionsChanged(event, changedOption) {
        const $changedOption = $(changedOption);
        const $form = $changedOption.parents('form');
        const productId = $('[name="product_id"]', $form).val();

        // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
        if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
            return;
        }

        utils.api.productAttributes.optionChange(productId, $form.serialize(), (err, response) => {
            const productAttributesData = response.data || {};

            this.updateProductAttributes(productAttributesData);
            this.updateView(productAttributesData);
        });
    }

    showProductImage(image) {
        if (_.isPlainObject(image)) {
            const zoomImageUrl = utils.tools.image.getSrc(
                image.data,
                this.context.themeSettings.zoom_size
            );

            const mainImageUrl = utils.tools.image.getSrc(
                image.data,
                this.context.themeSettings.product_size
            );

            this.imageGallery.setAlternateImage({
                mainImageUrl,
                zoomImageUrl,
            });
        } else {
            this.imageGallery.restoreImage();
        }
    }

    /**
     *
     * Handle action when the shopper clicks on + / - for quantity
     *
     */
    listenQuantityChange() {
        this.$scope.on('click', '[data-quantity-change] button', (event) => {
            event.preventDefault();
            const $target = $(event.currentTarget);
            const viewModel = this.getViewModel(this.$scope);
            const $input = viewModel.quantity.$input;
            const quantityMin = parseInt($input.data('quantity-min'), 10);
            const quantityMax = parseInt($input.data('quantity-max'), 10);

            let qty = parseInt($input.val(), 10);

            // If action is incrementing
            if ($target.data('action') === 'inc') {
                // If quantity max option is set
                if (quantityMax > 0) {
                    // Check quantity does not exceed max
                    if ((qty + 1) <= quantityMax) {
                        qty++;
                    }
                } else {
                    qty++;
                }
            } else if (qty > 1) {
                // If quantity min option is set
                if (quantityMin > 0) {
                    // Check quantity does not fall below min
                    if ((qty - 1) >= quantityMin) {
                        qty--;
                    }
                } else {
                    qty--;
                }
            }

            // update hidden input
            viewModel.quantity.$input.val(qty);
            // update text
            viewModel.quantity.$text.text(qty);

            let currentPrice = document.querySelector('#productSalePrice');

            currentPrice = currentPrice.innerText;
            currentPrice = currentPrice.split('$')[1];
            currentPrice = parseFloat(currentPrice);

            this.updateQualifyForShipping();
            return qty;
        });
    }

    // Add a product to Cart
    addProductToCart(event, form) {
        const $addToCartBtn = $('#form-action-addToCart', $(event.target));
        const originalBtnVal = $addToCartBtn.val();
        const waitMessage = $addToCartBtn.data('waitMessage');

        // Do not do AJAX if browser doesn't support FormData
        if (window.FormData === undefined) {
            return;
        }

        // Prevent default
        event.preventDefault();

        $addToCartBtn
            .val(waitMessage)
            .prop('disabled', true);

        // Add item to cart
        utils.api.cart.itemAdd(new FormData(form), (err, response) => {
            const errorMessage = err || response.data.error;

            $addToCartBtn
                .val(originalBtnVal)
                .prop('disabled', false);

            // Guard statement
            if (errorMessage) {
                // Strip the HTML from the error message
                const tmp = document.createElement('DIV');
                tmp.innerHTML = errorMessage;

                alert(tmp.textContent || tmp.innerText);

                return;
            }

            this.updateCartContent(previewModal, response.data.cart_item.hash);

            $('[data-cart-preview]').click();

            this.gtagReportConversion();
        });
    }

    /**
     * Get cart contents
     *
     * @param {String} cartItemHash
     * @param {Function} onComplete
     */
    getCartContent(cartItemHash, onComplete) {
        const options = {
            template: 'cart/preview',
            params: {
                suggest: cartItemHash,
            },
            config: {
                cart: {
                    suggestions: {
                        limit: 4,
                    },
                },
            },
        };

        utils.api.cart.getContent(options, onComplete);
    }

    /**
     * Update cart content
     *
     * @param {Modal} modal
     * @param {String} cartItemHash
     * @param {Function} onComplete
     */
    updateCartContent(modal, cartItemHash, onComplete) {
        this.getCartContent(cartItemHash, (err, response) => {
            if (err) {
                return;
            }

            modal.updateContent(response);

            // Update cart counter
            const $body = $('body');
            const $cartQuantity = $('[data-cart-quantity]', modal.$content);
            const $cartCounter = $('.navUser-action .cart-count');
            const quantity = $cartQuantity.data('cart-quantity') || 0;

            $cartCounter.addClass('cart-count--positive');
            $body.trigger('cart-quantity-update', quantity);

            if (onComplete) {
                onComplete(response);
            }
        });
    }

    /**
     * Show an message box if a message is passed
     * Hide the box if the message is empty
     * @param  {String} message
     */
    showMessageBox(message) {
        const $messageBox = $('.productAttributes-message');

        if (message) {
            $('.alertBox-message', $messageBox).text(message);
            $messageBox.show();
        } else {
            $messageBox.hide();
        }
    }

    /**
     * Update the view of price, messages, SKU and stock options when a product option changes
     * @param  {Object} data Product attribute data
     */
    calculatePrice(price, qty, brand) {
        const freeShippingMinAmount = 250;
        const freeShippingElement = document.querySelector('.free-shipping-container');

        if (price * qty >= freeShippingMinAmount) {
            if (brand !== 'spod' && brand !== 'maximus-3' && brand !== 'warrior products') {
                if (freeShippingElement) {
                    // freeShippingElement.classList.add('active');
                }
            }
        } else {
            if (freeShippingElement) {
                freeShippingElement.classList.remove('active');
            }
        }
    }

    updateQualifyForShipping() {
        // Scrape for Website Price
        let currentPrice = document.querySelector('#productSalePrice');
        currentPrice = currentPrice.innerText.split('$')[1];
        currentPrice = parseFloat(currentPrice);

        let brandName = document.querySelector('#productBrandName');
        if (brandName) brandName = brandName.innerText.trim('').toLowerCase();

        const quantityCheck = document.querySelector('.form-input--incrementTotal');
        let quantityInput = 0;
        if (quantityCheck !== null) {
            quantityInput = document.querySelector('.form-input--incrementTotal').value;
        } else {
            quantityInput = 0;
        }

        this.calculatePrice(currentPrice, quantityInput, brandName);
    }

    updatePriceView(viewModel, price) {
        let discountOff = document.querySelector('.price--save');
        if (discountOff !== null) {
            let pppp = price.rrp_without_tax ? price.rrp_without_tax.formatted : '$'+(price.without_tax.value + viewModel.$priceSaved.data().productPriceSaved).toFixed(2);
            viewModel.$rrpWithoutTax.html(pppp);
        }
        //let pppp = price.rrp_without_tax ? price.rrp_without_tax.formatted : '$'+(price.without_tax.value + viewModel.$priceSaved.data().productPriceSaved).toFixed(2);
        //viewModel.$rrpWithoutTax.html(pppp);


        if (price.with_tax) {
            viewModel.$priceWithTax.html(price.with_tax.formatted);
        }

        if (price.without_tax) {
            viewModel.$cyberWeekDeals[0] ? viewModel.$priceWithoutTax.html('$'+(price.without_tax.value * 0.8).toFixed(2)) : viewModel.$priceWithoutTax.html(price.without_tax.formatted);
        }

        if (price.rrp_with_tax) {
            viewModel.$rrpWithTax.html(price.rrp_with_tax.formatted);
        }

        if (price.rrp_without_tax) {
            viewModel.$rrpWithoutTax.html(price.rrp_without_tax.formatted);
        }
        this.updateQualifyForShipping();
    }


    /**
     * Update the view of price, messages, SKU and stock options when a product option changes
     * @param  {Object} data Product attribute data
     */
    updateView(data) {
        const viewModel = this.getViewModel(this.$scope);

        this.showMessageBox(data.stock_message || data.purchasing_message);

        if (_.isObject(data.price)) {
            this.updatePriceView(viewModel, data.price);
        }

        if (_.isObject(data.weight)) {
            viewModel.$weight.html(data.weight.formatted);
        }

        // If SKU is available
        if (data.sku) {
            // viewModel.$sku.text('SKU: ' + data.sku);
            viewModel.$sku.text(data.sku);
        }

        // if stock view is on (CP settings)
        if (viewModel.stock.$container.length && _.isNumber(data.stock)) {
            // if the stock container is hidden, show
            viewModel.stock.$container.removeClass('u-hiddenVisually');

            viewModel.stock.$input.text(data.stock);
        }

        if (!data.purchasable || !data.instock) {
            viewModel.$addToCart.prop('disabled', true);
            viewModel.$increments.prop('disabled', true);
        } else {
            viewModel.$addToCart.prop('disabled', false);
            viewModel.$increments.prop('disabled', false);
        }
    }

    /**
     * Hide or mark as unavailable out of stock attributes if enabled
     * @param  {Object} data Product attribute data
     */
    updateProductAttributes(data) {
        const behavior = data.out_of_stock_behavior;
        const inStockIds = data.in_stock_attributes;
        const outOfStockMessage = ` (${data.out_of_stock_message})`;

        this.showProductImage(data.image);

        if (behavior !== 'hide_option' && behavior !== 'label_option') {
            return;
        }

        $('[data-product-attribute-value]', this.$scope).each((i, attribute) => {
            const $attribute = $(attribute);
            const attrId = parseInt($attribute.data('product-attribute-value'), 10);

            if (inStockIds.indexOf(attrId) !== -1) {
                this.enableAttribute($attribute, behavior, outOfStockMessage);
            } else {
                this.disableAttribute($attribute, behavior, outOfStockMessage);
            }
        });
    }

    disableAttribute($attribute, behavior, outOfStockMessage) {
        if (this.getAttributeType($attribute) === 'set-select') {
            return this.disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
        }

        if (behavior === 'hide_option') {
            $attribute.hide();
        } else {
            $attribute.addClass('unavailable');
        }
    }

    disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
        const $select = $attribute.parent();

        if (behavior === 'hide_option') {
            $attribute.toggleOption(false);
            // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
            if ($attribute.parent().val() === $attribute.attr('value')) {
                $select[0].selectedIndex = 0;
            }
        } else {
            $attribute.attr('disabled', 'disabled');
            $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
        }
    }

    enableAttribute($attribute, behavior, outOfStockMessage) {
        if (this.getAttributeType($attribute) === 'set-select') {
            return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
        }

        if (behavior === 'hide_option') {
            $attribute.show();
        } else {
            $attribute.removeClass('unavailable');
        }
    }

    enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
        if (behavior === 'hide_option') {
            $attribute.toggleOption(true);
        } else {
            $attribute.removeAttr('disabled');
            $attribute.html($attribute.html().replace(outOfStockMessage, ''));
        }
    }

    getAttributeType($attribute) {
        const $parent = $attribute.closest('[data-product-attribute]');

        return $parent ? $parent.data('product-attribute') : null;
    }

    /**
     * Allow radio buttons to get deselected
     */
    initRadioAttributes() {
        $('[data-product-attribute] input[type="radio"]', this.$scope).each((i, radio) => {
            const $radio = $(radio);

            // Only bind to click once
            if ($radio.attr('data-state') !== undefined) {
                $radio.click(() => {
                    if ($radio.data('state') === true) {
                        $radio.prop('checked', false);
                        $radio.data('state', false);

                        $radio.change();
                    } else {
                        $radio.data('state', true);
                    }

                    this.initRadioAttributes();
                });
            }

            $radio.attr('data-state', $radio.prop('checked'));
        });
    }

    resetAttributes(option) {
        $('.dropdown-content input', option).attr('checked', false);
    }

    resetProductOptionConfiguration(option) {
        this.resetAttributes(option);
        // console.log('reset?', m, $('.dropdown-button', m).removeClass('active'))
        // remove the blue active border for all interfaces & the image inside the all interfaces

        $('.dropdown-button', option).removeClass('active');
        $('.dropdown-button .dropdown-content-image', option).remove();

        // reset all items in modal
        $('[data-product-attribute-parameter]', option).addClass('hide');
        $(`[data-product-attribute-parameter="${event.currentTarget.dataset.productAttributeLabel}"]`, option).removeClass('hide');

    }

    showHideProductOptions(optionsSelected, products, name) {
        products.each((i, element) => {
            let optionAttributes = $(element).data().productAttributeParameter;
            console.log(optionAttributes)
            if (optionAttributes.length == 0) return;

            // let theFuckingParsedData = optionAttributes.replace(/\s+/g, '');
            // console.log(optionAttributes, name, optionAttributes.indexOf(name), optionAttributes.indexOf(name) > 0)
            if (optionAttributes.indexOf(name) < 0) return;
            let matchingItems = Object.values(optionsSelected).every(results => optionAttributes.includes(results));
            // console.log(matchingItems)
            matchingItems ? $(element).removeClass('hide') : $(element).addClass('hide');
        });
    }

    filterVariations() {
        const $bulbInterface = $('[data-product-attribute-category=bulb]'),
              $mountingInterface = $('[data-product-attribute-category=mounting]'),
              $transformerInterface = $('[data-product-attribute-category^=transformer]');

        // Storing options selected
        let optionsSelected = {};
        $('[data-product-attribute-label]').on('click', (event) => {
            let name = $(event.currentTarget).parents('[data-product-attribute-name]').data().productAttributeName;

            if (name !== 'voltage' && name !== 'socket' && name !== 'bulb-temperature') return;

            let data = event.currentTarget.dataset.productAttributeLabel;

            optionsSelected[name] = data;

            if (name == 'voltage') {
                this.resetProductOptionConfiguration($bulbInterface);
                this.resetProductOptionConfiguration($mountingInterface);
                this.resetProductOptionConfiguration($transformerInterface);

                this.showHideProductOptions(optionsSelected, $('[data-product-attribute-parameter]'), name);
            } else if (name !== 'voltate') {
                this.resetProductOptionConfiguration($bulbInterface);
                this.showHideProductOptions(optionsSelected, $('[data-product-attribute-parameter]'), name);
            };
        });
    }

    initialVariations(productId) {
        $('.form-field').each(() => {
            const img = $(this).find('.form-radio:checked + .form-option .dropdown-content-image');

            if (img.length > 0) {
                $(this).find('.dropdown-button').append(img.clone());
            }
        });

        $('[data-product-attribute-name=color] .form-field-item > input').each((data, elem) => {
            const productAttributeName = $(elem)[0].name;
            const productAttributeValue = $(elem)[0].value;
            if (utils.api.productAttributes.getData) {
                utils.api.productAttributes.getData(productId, `product_id=${productId}&${productAttributeName}=${productAttributeValue}`, (err, response) => {
                    const priceArray = response.data.price;
                    const discountedPrice = Math.round(100 - ((priceArray.without_tax.value / priceArray.rrp_without_tax.value) * 100));
                    if (discountedPrice >= 30) $(elem).next()[0].setAttribute('data-discount', `${discountedPrice}% OFF`);
                });
            }
        });
    }

    toggleDropdown() {
        let dropdownButton;
        let dropdownContent;

        $('.dropdown-button').on('click', function () {
            dropdownButton = $(this);
            dropdownContent = $(this).next();

            $(this).next().insertBefore('.body').delay(100).queue(function () {
                $(this).addClass('active').dequeue();
            });

            $('body').toggleClass('no-scroll');
            $('.dropdown-exit').toggleClass('active');
        });

        $('.form-option.drop-down--swatch, .dropdown-exit').on('click', function () {
            const img = $(this).find('.dropdown-content-image');

            // detect if an image is present and attribute it to the selector and activate it else remove any image present
            if (img.length > 0) {
                if (dropdownButton.find('.dropdown-content-image').length > 0) {
                    dropdownButton.find('.dropdown-content-image').replaceWith(img.clone()).addClass('active');
                } else {
                    dropdownButton.append(img.clone()).addClass('active');
                }
            } else {
                dropdownButton.find('.dropdown-content-image').remove();
                dropdownButton.removeClass('active');
            }

            dropdownContent.insertAfter(dropdownButton).removeClass('active');

            $('body').toggleClass('no-scroll');
            $('.dropdown-exit').toggleClass('active');
        });

        if ($('.productView').hasClass('thomas-mark')) {
            const productClassName = $('.productView').attr('class').split(' ')[2];
            $('.dropdown-button').each(function () {
                const text = $(this)[0].previousElementSibling.innerText.trim().replace(/ /g, '-').toLowerCase();
                const imageName = `${productClassName}-${text}.jpg`.replace(/ /g, '').replace('-----required', '');
                $(this).css('background-image', `url(https://cdn11.bigcommerce.com/s-l0exu5p4yn/product_images/uploaded_images/${imageName})`);
            });
        }
    }

    parseLabels() {
        $('[data-parse-label]').each(function () {
            const parseString = $(this).text().split('(');

            if (parseString.length > 1) {
                $(this).text(parseString[0]);
                $(this).parent().append(`<div class="drop-down-form-option-price">${parseString[1].replace('+', '').replace(')', '')}</div>`);
            }
        });
    }

    renderBlocks() {
        let currentAttribute;
        let previousAttribute;

        $('[data-product-option-change] .form-field').each(function (index) {
            currentAttribute = $(this).data('product-attribute');

            if (currentAttribute !== previousAttribute && index !== 0) {
                $(this).before('<div></div>');
            }

            previousAttribute = currentAttribute;
        });
    }

    renderSets() {
        let currentAttribute;
        let previousAttribute;

        $('[data-product-attribute=set-rectangle] [data-product-attribute-name]').each(function () {
            const attributeName = $(this).data('product-attribute-name');
            currentAttribute = attributeName.split('-')[2];

            if (currentAttribute !== previousAttribute) {
                if ($.isNumeric(attributeName.split('-')[1])) {
                    $(this).parent().before(`<div class="form-label"># of __ ${attributeName.split('-')[2]} length</div>`);
                } else {
                    if (attributeName.split('-').length < 4) {
                        $(this).parent().before(`<div class="form-label"># of __ ${attributeName.split('-')[2]}</div>`);
                    } else if (attributeName.split('-').length < 5) {
                        $(this).parent().before(`<div class="form-label"># of __ ${attributeName.split('-')[2]} ${attributeName.split('-')[3]}</div>`);
                    }
                }

                previousAttribute = currentAttribute;
            }

            if ($(this).prev().text().match('^#')) {
                if ($.isNumeric(attributeName.split('-')[1])) {
                    $(this).prev().text(`${attributeName.split('-')[1]}"`).removeClass().addClass('form-option form-option-variant-group').attr('data-option-variant-group', 0);
                } else {
                    $(this).prev().text(`${attributeName.split('-')[1]}`).removeClass().addClass('form-option form-option-variant-group').attr('data-option-variant-group', 0);
                }
            }
        });
    }

    showQuantities() {
        const $group = $('[data-option-variant-group]');
        const $qty = $group.parent().find('.form-radio');

        $group.on('click', function () {
            $(this).next().toggleClass('active');
        });

        // show quantity bubble onload
        $qty.each(function () {
            if ($(this).is(':checked')) if ($(this).attr('data-product-attribute-label') !== 0) $(this).parents('.form-field-list').prev().addClass('hasQuantity');
        });

        $qty.on('click', function () {
            let qty = $(this).attr('data-product-attribute-label').split(/[ ]/)[0];
            let qtySelector = $(this).parents('.form-field-list').prev();

            qty > 0 ? qtySelector.addClass('hasQuantity') : qtySelector.removeClass('hasQuantity');

            $(this).parents('.form-field-list').toggleClass('active');
            qtySelector.attr('data-option-variant-group', qty);
        });

        $group.each(function () {
            const $checked = $(this).next().find('[data-product-attribute-label]:checked');
            const quantity = $('+ .form-option-variant', $checked).text() ? $('+ .form-option-variant', $checked).text() : 0;
            $(this).attr('data-option-variant-group', quantity);
        });
    }
}
