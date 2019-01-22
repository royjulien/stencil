import $ from 'jquery';
import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
import utils from '@bigcommerce/stencil-utils';

export default function () {
    const loadingClass = 'is-loading';
    const $cart = $('[data-cart-preview]');
    const $cartDropdown = $('#cart-preview-dropdown');
    const $cartLoading = $('<div class="loadingOverlay"></div>');

    function cartRemoveItem(event, itemId) {
        $(event.currentTarget).parents('.cart-item').addClass(loadingClass).append($cartLoading);
        $cartLoading.show();

        utils.api.cart.itemRemove(itemId, (err, response) => {
            if (response.data.status === 'succeed') {
                recart();
            } else {
                alert(response.data.errors.join('\n'));
            }
        });
    }

    function removeItem() {
        $('.cart-remove').on('click', (event) => {
            const itemId = $(event.currentTarget).data('cart-itemid');
            const openTime = new Date();
            const result = confirm($(event.currentTarget).data('confirm-delete'));
            const delta = new Date() - openTime;
            event.preventDefault();

            // Delta workaround for Chrome's "prevent popup"
            if (!result && delta > 10) {
                return;
            }

            cartRemoveItem(event, itemId);
        });
    }

    function toggleSidecart(element) {
        $(element).on('click', () => {
            $('.sidecart, .sidecart-exit, .mobileMenu-toggle, body').toggleClass('active');
        });
    }

    function getContent(options) {
        utils.api.cart.getContent(options, (err, response) => {
            $cartDropdown.removeClass(loadingClass).html(response);
            $cartLoading.hide();

            toggleSidecart('.sidecart-close');

            $('.sidecart [data-action]').on('click', (event) => {
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
                        $.getJSON('/api/storefront/cart', (data) => {
                            const options = {
                                template: 'common/cart-preview',
                            };

                            if (data && data[0]) {
                                if (data[0].baseAmount) {
                                    const cartSubtotal = data[0].baseAmount;
                                    if (cartSubtotal < 250) {
                                        utils.api.cart.applyCode('', () => {
                                            setTimeout(getContent(options), 0);
                                        });
                                    } else if (cartSubtotal >= 250 && cartSubtotal < 450) {
                                        utils.api.cart.applyCode('SIDECART5', () => {
                                            setTimeout(getContent(options), 0);
                                        });
                                    } else if (cartSubtotal >= 450) {
                                        utils.api.cart.applyCode('SIDECART10', () => {
                                            setTimeout(getContent(options), 0);
                                        });
                                    }
                                }
                            } else {
                                getContent(options);
                            }
                        });
                    } else {
                        $el.val(oldQty);
                        alert(response.data.errors.join('\n'));
                    }
                });
            });

            removeItem();
        });
    }

    function recart() {
        $.getJSON('/api/storefront/cart', (data) => {
            const options = {
                template: 'common/cart-preview',
            };

            if (data && data[0]) {
                if (data[0].baseAmount) {
                    const cartSubtotal = data[0].baseAmount;
                    if (cartSubtotal < 250) {
                        utils.api.cart.applyCode('', () => {
                            setTimeout(getContent(options), 0);
                        });
                    } else if (cartSubtotal >= 250 && cartSubtotal < 450) {
                        utils.api.cart.applyCode('SIDECART5', () => {
                            setTimeout(getContent(options), 0);
                        });
                    } else if (cartSubtotal >= 450) {
                        utils.api.cart.applyCode('SIDECART10', () => {
                            setTimeout(getContent(options), 0);
                        });
                    }
                }
            } else {
                getContent(options);
            }
        });
    }

    toggleSidecart('.sidecart-exit');

    $('body').on('cart-quantity-update', (event, quantity) => {
        $('.cart-quantity').text(quantity).toggleClass('countPill--positive', quantity > 0);
    });

    $cart.on('click', (event) => {
        $('.sidecart, .sidecart-exit, .mobileMenu-toggle, body').toggleClass('active');

        event.preventDefault();

        $cartDropdown.addClass(loadingClass).html($cartLoading);
        $cartLoading.show();

        recart();
    });
}
