import $ from 'jquery';
import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
import utils from '@bigcommerce/stencil-utils';

export default function () {
    const loadingClass = 'is-loading';
    const $cart = $('[data-cart-preview]');
    const $cartDropdown = $('#cart-preview-dropdown');
    const $cartLoading = $('<div class="loadingOverlay"></div>');
    let getContent = '';
    // let applyCoupon = '';
    let incrementItemQuantity = '';
    let removeItem = '';
    let addUpsellItems = '';
    let getUpsellProduct = '';
    let toggleSidecart = '';
    let cartRemoveItem = '';
    let recart = '';

    getContent = (options) => {
        utils.api.cart.getContent(options, (err, response) => {
            $cartDropdown.removeClass(loadingClass).html(response);
            $cartLoading.hide();

            toggleSidecart('.sidecart-close');
            incrementItemQuantity();
            removeItem();

            addUpsellItems();
        });
    };

    addUpsellItems = () => {
        const $cartItems = $('[data-item-row]');
        const currentCartProductIds = [];
        let lineUpsell = '';
        let upsellTitle = '';
        let wattageTotal = 0;
        let conditional = 0;
        let upsellProductIds = 0;
        let upsellProductId = 0;

        $cartItems.each(function () {
            lineUpsell = $(this).find('[data-line-upsell]');
            currentCartProductIds.push($(this)[0].dataset.itemRow);

            if (lineUpsell.length > 0) {
                const lineData = lineUpsell[0].dataset;
                const lengthInFeet = $(this).find('[data-length]') ? parseInt($(this).find('[data-length]')[0].dataset.length.split('Feet')[0].trim(), 10) : 0;
                const quantity = $(this).find('.form-input--incrementTotal') ? parseInt($(this).find('.form-input--incrementTotal').val(), 10) : 0;
                const expression = parseInt(lineData.lineUpsellExpression, 10);

                conditional = parseInt(lineData.lineUpsellCondition, 10);
                wattageTotal += expression * lengthInFeet * quantity;
                upsellProductIds = lineData.lineUpsellProductids.split(',');
                upsellTitle = lineData.lineUpsellTitle;
            }
        });

        if (lineUpsell) {
            if (wattageTotal > 0 && wattageTotal < conditional) {
                upsellProductId = upsellProductIds[0];
            } else if (wattageTotal > 0 && wattageTotal > conditional) {
                upsellProductId = upsellProductIds[1];
            }

            if (upsellProductId > 0 && currentCartProductIds.indexOf(upsellProductId) === -1) {
                getUpsellProduct(upsellProductId, upsellTitle);
            }
        }
    };

    getUpsellProduct = (productId, title) => {
        utils.api.product.getById(productId, { template: 'products/product-upsell' }, (err, res) => {
            // reset cart-item
            $('[data-upsell-product]').html('');
            $('[data-upsell-product]').addClass('active').append(res);
            $('[data-upsell-product]').find('[data-upsell-title]').text(title);
        });
    };

    // applyCoupon = (callback) => {
    //     $.getJSON('/api/storefront/cart', (data) => {
    //         const options = {
    //             template: 'common/cart-preview',
    //         };
    //     });

    //     if (data && data[0]) {
    //         if (data[0].baseAmount) {
    //             const cartSubtotal = data[0].baseAmount;
    //             if (cartSubtotal < 250) {
    //                 utils.api.cart.applyCode('', () => {
    //                     setTimeout(getContent(options), 0);
    //                 }, callback);
    //             } else if (cartSubtotal >= 250 && cartSubtotal < 450) {
    //                 utils.api.cart.applyCode('SIDECART5', () => {
    //                     setTimeout(getContent(options), 0);
    //                 }, callback);
    //             } else if (cartSubtotal >= 450) {
    //                 utils.api.cart.applyCode('SIDECART10', () => {
    //                     setTimeout(getContent(options), 0);
    //                 }, callback);
    //             }
    //         }
    //     } else {
    //         getContent(options);
    //     }
    // };

    incrementItemQuantity = () => {
        $('.sidecart [data-action]').on('click', function (event) {
            const itemId = $(this).data('cart-itemid');
            const $el = $(`#qty-${itemId}`);
            const oldQty = parseInt($el.val(), 10);
            const maxQty = parseInt($el.data('quantity-max'), 10);
            const minQty = parseInt($el.data('quantity-min'), 10);
            const minError = $el.data('quantity-min-error');
            const maxError = $el.data('quantity-max-error');
            const newQty = $(this).data('action') === 'inc' ? oldQty + 1 : oldQty - 1;

            // Does not quality for min/max quantity
            if (newQty < minQty) {
                return alert(minError);
            } else if (newQty > maxQty) {
                return alert(maxError);
            }

            event.currentTarget.parentElement.classList.add(loadingClass);
            $(event.currentTarget).parent().append($cartLoading);
            $cartLoading.show();

            utils.api.cart.itemUpdate(itemId, newQty, (err, response) => {
                if (response.data.status === 'succeed') {
                    recart();
                } else {
                    $el.val(oldQty);
                    alert(response.data.errors.join('\n'));
                }
            });
        });
    };

    removeItem = () => {
        $('.cart-remove').on('click', (event) => {
            const itemId = $(event.currentTarget).data('cart-itemid');
            const openTime = new Date();
            const result = confirm($(event.currentTarget).data('confirm-delete'));
            const delta = new Date() - openTime;
            event.preventDefault();

            // Ask user if they want to confirm removing the item within the cart
            if (!result && delta > 10) {
                return;
            }

            cartRemoveItem(event, itemId);
        });
    };

    toggleSidecart = (element) => {
        $(element).on('click', () => {
            $('.sidecart, .sidecart-exit, .mobileMenu-toggle, body').toggleClass('active');
        });
    };

    cartRemoveItem = (event, itemId) => {
        $(event.currentTarget).parents('.cart-item').addClass(loadingClass).append($cartLoading);
        $cartLoading.show();

        utils.api.cart.itemRemove(itemId, (err, response) => {
            if (response.data.status === 'succeed') {
                recart();
            } else {
                alert(response.data.errors.join('\n'));
            }
        });
    };

    recart = () => {
        // if adding a discount, call applyCoupon() instead
        $.getJSON('/api/storefront/cart', () => {
            const options = {
                template: 'common/cart-preview',
            };

            getContent(options);
        });
    };

    $cart.on('click', (event) => {
        $('.sidecart, .sidecart-exit, .mobileMenu-toggle, body').addClass('active');

        // even though this event isn't being clicked it is triggered and its element is the document itself??
        event.preventDefault();

        $cartDropdown.addClass(loadingClass).html($cartLoading);
        $cartLoading.show();

        recart();
    });

    $('body').on('cart-quantity-update', (event, quantity) => {
        $('.cart-quantity').text(quantity).toggleClass('countPill--positive', quantity > 0);
    });

    toggleSidecart('.sidecart-exit');
}
